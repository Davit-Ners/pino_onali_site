const ADMIN_COOKIE = "pino_admin";
const ALG = "HS256";
const encoder = new TextEncoder();
const decoder = new TextDecoder();

type AdminPayload = {
  sub: "admin";
  iat: number;
  exp: number;
};

function getSubtle() {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) {
    throw new Error("Web Crypto API indisponible pour la signature JWT");
  }
  return subtle;
}

function base64UrlEncodeBytes(bytes: Uint8Array) {
  let base64: string;
  if (typeof btoa === "function") {
    let binary = "";
    bytes.forEach((b) => {
      binary += String.fromCharCode(b);
    });
    base64 = btoa(binary);
  } else if (typeof Buffer !== "undefined") {
    base64 = Buffer.from(bytes).toString("base64");
  } else {
    throw new Error("Aucun encodeur base64 disponible");
  }

  return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function base64UrlEncodeString(data: string) {
  return base64UrlEncodeBytes(encoder.encode(data));
}

function base64UrlDecodeToString(input: string) {
  input = input.replace(/-/g, "+").replace(/_/g, "/");
  const pad = 4 - (input.length % 4);
  if (pad !== 4) {
    input += "=".repeat(pad);
  }

  let binary: string;
  if (typeof atob === "function") {
    binary = atob(input);
  } else if (typeof Buffer !== "undefined") {
    binary = Buffer.from(input, "base64").toString("binary");
  } else {
    throw new Error("Aucun decodeur base64 disponible");
  }

  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return decoder.decode(bytes);
}

function getSecret() {
  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret) {
    throw new Error("ADMIN_JWT_SECRET manquant dans les variables d'environnement");
  }
  return secret;
}

async function sign(data: string, secret: string) {
  const subtle = getSubtle();
  const key = await subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await subtle.sign("HMAC", key, encoder.encode(data));
  return base64UrlEncodeBytes(new Uint8Array(signature));
}

export async function issueAdminToken(ttlSeconds = 60 * 60 * 4) {
  const secret = getSecret();
  const now = Math.floor(Date.now() / 1000);
  const payload: AdminPayload = {
    sub: "admin",
    iat: now,
    exp: now + ttlSeconds,
  };
  const header = { alg: ALG, typ: "JWT" };

  const headerPart = base64UrlEncodeString(JSON.stringify(header));
  const payloadPart = base64UrlEncodeString(JSON.stringify(payload));
  const data = `${headerPart}.${payloadPart}`;
  const signature = await sign(data, secret);

  return `${data}.${signature}`;
}

export async function verifyAdminToken(token: string | undefined): Promise<AdminPayload | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const [headerB64, payloadB64, signature] = parts;
  const secret = getSecret();
  const expected = await sign(`${headerB64}.${payloadB64}`, secret);

  if (expected !== signature) return null;

  let payload: AdminPayload;
  try {
    payload = JSON.parse(base64UrlDecodeToString(payloadB64));
  } catch {
    return null;
  }

  if (payload.sub !== "admin") return null;
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp && now > payload.exp) return null;

  return payload;
}

export async function isAdminAuthenticated(cookieValue: string | undefined) {
  return Boolean(await verifyAdminToken(cookieValue));
}

export { ADMIN_COOKIE };
