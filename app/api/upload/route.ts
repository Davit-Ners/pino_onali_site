import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { cloudinary } from "@/app/lib/cloudinary";
import { ADMIN_COOKIE, verifyAdminToken } from "@/app/lib/auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const token = (await cookies()).get(ADMIN_COOKIE)?.value;
    if (!(await verifyAdminToken(token))) {
      return NextResponse.json({ error: "Non autorise." }, { status: 401 });
    }
  } catch (err) {
    console.error("ADMIN AUTH ERROR:", err);
    return NextResponse.json({ error: "Configuration manquante." }, { status: 500 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const folder =
      process.env.CLOUDINARY_FOLDER || "pino";

    const result = await new Promise<any>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: "image",
        },
        (error, result) => {
          if (error || !result) return reject(error);
          resolve(result);
        }
      );

      stream.end(buffer);
    });

    return NextResponse.json(
      {
        url: result.secure_url as string,
        publicId: result.public_id as string,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("CLOUDINARY UPLOAD ERROR:", err);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
