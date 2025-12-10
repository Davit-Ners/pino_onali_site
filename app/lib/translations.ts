export type Language = "fr" | "en" | "nl";

interface Translations {
  skipToContent: string;
  nav: {
    home: string;
    gallery: string;
    about: string;
    contact: string;
    legal: string;
  };
  themeToggle: {
    light: string;
    dark: string;
    switchToLight: string;
    switchToDark: string;
  };
  languageToggle: {
    label: string;
    switchToFrench: string;
    switchToEnglish: string;
    switchToDutch: string;
  };
  home: {
    hero: {
      title: string;
      content: string;
      subtitle: string;
      actions: {
        primary: string;
      };
    },
    video: {
      overTitle: string;
      title: string;
      content: string;
      muteMessage: string;
    },
    news: {
      kicker:string;
      title: string;
      subtitle: string;
      meta: string;
      description: string;
      ctaLabel: string;
    }
  };
  gallery: {
    title: string;
    subtitle: string;
    interess: string;
    soldout: string;
    zoom: string;
    filterAll: string;
    filterAvailable: string;
    filterSold: string;
  };
  aboutPage: {
    hero: {
      rail: string;
      title: string;
      content: string;
      image: {
        title: string;
        subtitle: string;
      }
    },
    columns: {
      left: {
        title: string;
        content1: string;
        content2: string;
      },
      right: {
        title: string;

        locationTitle: string;
        locationContent: string;

        themeTitle: string;
        themeContent: string;

        technicTitle: string;
        technicContent: string;

        formatTitle: string;
        formatContent: string;
      }
    },
    panel: {
      panel1: {
        title: string;
        content: string;
      },
      panel2: {
        title: string;
        content: string;
      },
      panel3: {
        title: string;
        content: string;
      }
    },
    quote: string;
  };
  contactPage: {
    hero: {
      title: string;
      subtitle: string;
    },
    infos: {
      title: string;
      subtitle: string;
      phone: string;
      email: string;
      footer: string;
    },
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      nameEx: string;
      emailLabel: string;
      emailEx: string;
      messageLabel: string;
      messageEx: string;
      button: string;
      buttonLoading: string;
      succesMsg: string;
      errorMsg: string;
      interess: string;
      captchaError: string;
    }
  };
  footer: {
    c1: string;
    c2: string;
    c3: string;
    legalLink: string;
  };
  legalPage: {
    hero: {
      title: string;
      subtitle: string;
      updated: string;
    };
    editor: {
      title: string;
      identity: string;
      contact: string;
      location: string;
    };
    data: {
      title: string;
      intro: string;
      items: {
        title: string;
        content: string;
      }[];
    };
    legalBases: {
      title: string;
      items: string[];
    };
    recipients: {
      title: string;
      items: string[];
      note: string;
    };
    retention: {
      title: string;
      items: string[];
    };
    rights: {
      title: string;
      intro: string;
      items: string[];
      outro: string;
      authority: string;
    };
    cookies: {
      title: string;
      intro: string;
      items: string[];
    };
    social: {
      title: string;
      content: string;
    };
  };
};

export const defaultLanguage: Language = "fr";

export const translations: Record<Language, Translations> = {
  fr: {
    skipToContent: "Aller au contenu",
    nav: {
      home: "Accueil",
      gallery: "Galerie",
      about: "À Propos",
      contact: "Contact",
      legal: "Mentions légales"
    },
    themeToggle: {
      light: "Clair",
      dark: "Sombre",
      switchToLight: "Activer le thème clair",
      switchToDark: "Activer le thème sombre",
    },
    languageToggle: {
      label: "FR",
      switchToFrench: "Afficher le site en français",
      switchToEnglish: "Afficher le site en anglais",
      switchToDutch: "Afficher le site en neerlandais",
    },
    home: {
      hero: {
        title: "LA FACE CACHÉE DE L'ARTISTE",
        content: "Personne ne se doutait de l’artiste qui sommellait en lui, mais depuis 2010 Pino Onali crée sans compter. Les pigments jaillissent et débordent maintenant de ses toiles aux tailles de plus en plus impressionnantes. Le résultat est surprenant et les murs de son atelier ne suffisent plus à afficher cette rage de peindre. Pino vous invite à ce voyage et à découvrirl’autre coté de ce miroir à facettes où se reflètent les couleurs de la vie. Une vie foisonnante qui nous entraîne des émotions verde, rosso à un très grand clin d’oeil à la lune.",
        subtitle: "Peintre - Artiste",
        actions: {
          primary: "VOIR LES OEUVRES",
        },
      },
      video: {
        content: "Découvrez un aperçu de la dernière exposition de Pino Onali à travers cette courte vidéo immersive. Une plongée dans son univers de lunes, d’astres et de pigments en mouvement.",
        muteMessage: "La vidéo démarre en silence. Activez le son si vous le souhaitez.",
        overTitle: "Exposition",
        title: "« Objectif Lune »"
      },
      news: {
        kicker: "Prochaine exposition",
        title: "Milky Moon",
        subtitle: "Une série d’œuvres autour des astres et constellations.",
        meta: "Boulevard de Waterloo 65\n1000 Bruxelles — 19 janvier au 25 décembre 2026",
        description: `
        Revoilà ma Lune tant aimée, en déclinaison ludique, plus petite, elle guide la voie lactée et décide de tout voir et surtout, de tout entendre grâce à ses oreilles noirs recouvertes de résine pour la rendre plus réceptive.. cela vous rappellera certainement quelque chose qui pourtant n’a jamais prononcé un seul mot, mais que tous ont toujours compris.
        Elle se décline cette fois en nuances plus fluorescente, et parfois reprend le style de son aïeul.
        Bonne route sur la Milky Moon.`,
        ctaLabel: "En savoir plus"
      }
    },
    gallery: {
        title: "Galerie",
        subtitle: "Découvrez une sélection d’œuvres issues de l’univers de Pino Onali.",
        interess: "Cette œuvre m'intéresse",
        soldout: "SOLD OUT",
        zoom: "Zoom",
        filterAll: "Toutes les œuvres",
        filterAvailable: "Disponibles",
        filterSold: "Vendues"
    },
    aboutPage: {
      hero: {
        title: 'Pino Onali',
        rail: 'À PROPOS',
        content: `Entre astres, pigments et éclats de lumière, Pino Onali compose
                des toiles qui oscillent entre contemplation et explosion. Sa
                peinture ne cherche pas à raconter une histoire linéaire : elle
                ouvre des portes, crée des atmosphères, laisse le regard voyager.`,
        image: {
          title: "Artiste peintre",
          subtitle: "Basé à Bruxelles • Inspirations lunaires & cosmiques"
        }
      },
      columns: {
        left: {
          title: "Biographie",
          content1: `Pino décide de se mettre à la peinture par obligation de trouver exactement le tableau idéal pour son intérieur en 2010, force est de croire que rien n’allait avec les murs « chocolat » qui s’étendaient sur tout l’appartement.
          De fils en aiguille, il s’est découvert un talent qu’il n’a plus cessé de deréinventé !`,
          content2: `D’expos en expos, de bars d’hôtels en bars d’hôtels, de galeries en galeries, il n’a cessé de produire de nouvelles tonalités due au mélange infini de couleurs, il avoue d’ailleurs que même si légèrement daltonien, voir complètement, cet handicap est une force énorme qui le pousse à recrée des tonalités exceptionnelles que beaucoup de clients se sont déjà approprié au fils des ans.
          Sa devise est la couleur et la couleur, son domaine de prédilection.`
        },
        right: {
          title: "Repères",
          locationTitle: "Basé à",
          locationContent: "Bruxelles, Belgique",
          themeTitle: "Thèmes récurrents",
          themeContent: "Lunes, constellations, matières cosmiques",
          technicTitle: "Techniques",
          technicContent: "Acrylique, polyuréthane, huile, techniques mixtes",
          formatTitle: "Formats",
          formatContent: "Toiles de grand format, séries modulaires"
        }
      },
      panel: {
        panel1: {
          title: "Démarche artistique",
          content: `La peinture de Pino ne cherche pas à dominer l’espace, mais à le
                faire respirer. Il construit ses toiles par couches successives :
                transparences, recouvrements, gestes spontanés, accidents assumés.`
        },
        panel2: {
          title: "Univers visuel",
          content: `Lunes, halos, éclats et fragments de lumière : ses toiles évoquent
                des cartes du ciel imaginaires, des paysages intérieurs traversés
                par des forces invisibles.`
        },
        panel3: {
          title: "Techniques & matières",
          content: `Acrylique, huile, encres, parfois sable ou pigments bruts… Pino
                explore comment chaque matière réagit, se mélange ou résiste à la
                surface de la toile.`
        }
      },
      quote: "« La peinture n’est pas ce que l’on voit, mais ce que l’on ressent. »"
    },
    contactPage: {
      hero: {
        title: "Contact",
        subtitle: "Pour toute question, intérêt pour une œuvre ou projet d’exposition, vous pouvez contacter directement Pino Onali ou utiliser le formulaire."
      },
      infos: {
        title: "Coordonnées",
        subtitle: "Pino est disponible pour des demandes d’acquisition d’œuvres, des projets d’exposition ou des commandes spécifiques.",
        phone: "Téléphone",
        email: "Email",
        footer: "Vous pouvez également utiliser le formulaire de contact pour préciser l’œuvre ou le type de projet qui vous intéresse."
      },
      form: {
        title: "Formulaire de contact",
        subtitle: "Remplissez ce formulaire pour envoyer un message directement à l’artiste.",
        nameLabel: "NOM",
        nameEx: "Votre nom",
        emailLabel: "EMAIL",
        emailEx: "vous@example.com",
        messageLabel: "MESSAGE",
        messageEx: "Votre message...",
        button: "ENVOYER LE MESSAGE",
        buttonLoading: "Envoi...",
        succesMsg: "Merci, votre message a bien été envoyé. Pino vous répondra dès que possible.",
        errorMsg: "Une erreur est survenue. Veuillez réessayer plus tard.",
        interess: "Je suis intéressé(e) par l’œuvre : ",
        captchaError: "Merci de valider le captcha avant d’envoyer votre message."
      }
    },
    footer: {
      c1: "© 2025 Pino Onali. Tous droits réservés.",
      c2: "Toutes les œuvres et images présentes sur ce site sont la propriété de l’artiste.",
      c3: "Site conçu et développé par Davit Nersesyan.",
      legalLink: "Mentions légales & politique de confidentialité"
    },
    legalPage: {
      hero: {
        title: "Mentions légales & politique de confidentialité",
        subtitle: "Informations requises par le RGPD et la loi belge pour l’édition et la publication du site.",
        updated: "Dernière mise à jour : 08/12/2025"
      },
      editor: {
        title: "Éditeur du site",
        identity: "Site édité par Pino Onali, artiste peintre indépendant.",
        contact: "Contact principal :",
        location: "Adresse professionnelle : Bruxelles, Belgique"
      },
      data: {
        title: "Données collectées et finalités",
        intro: "Les données personnelles traitées sur ce site servent uniquement à répondre aux demandes envoyées via le formulaire de contact :",
        items: [
          {
            title: "Formulaire de contact",
            content: "nom, adresse e-mail, contenu du message et, le cas échéant, œuvre qui vous intéresse. Ces données sont nécessaires pour vous répondre."
          },
          {
            title: "Sécurité anti-bot",
            content: "Cloudflare Turnstile vérifie que la soumission vient d’une personne humaine. Cloudflare peut recevoir des données techniques (adresse IP, empreintes navigateur)."
          }
        ]
      },
      legalBases: {
        title: "Bases légales (RGPD)",
        items: [
          "Article 6.1.f – intérêt légitime pour pouvoir répondre aux demandes que vous initiez via le formulaire.",
          "Article 6.1.a – votre consentement explicite pour l’envoi du formulaire et l’utilisation du captcha de sécurité."
        ]
      },
      recipients: {
        title: "Destinataires et sous-traitants",
        items: [
          "Les messages sont acheminés par le service d’e-mailing Resend uniquement pour transmettre votre demande à l’artiste.",
          "Cloudflare (Turnstile) traite des données techniques pour valider le captcha anti-bot."
        ],
        note: "Ces prestataires peuvent traiter des données hors UE (États-Unis). Des Clauses Contractuelles Types de la Commission européenne sont utilisées par ces services pour encadrer les transferts."
      },
      retention: {
        title: "Durées de conservation",
        items: [
          "Messages reçus : conservés dans la messagerie le temps de traiter et de suivre l’échange, puis archivés au maximum 24 mois sauf obligation légale.",
          "Données techniques du captcha : conservées par Cloudflare pour la durée strictement nécessaire à la vérification."
        ]
      },
      rights: {
        title: "Vos droits RGPD",
        intro: "Vous pouvez à tout moment exercer vos droits (accès, rectification, suppression, limitation, opposition, portabilité) en écrivant à pinoonali@hotmail.be.",
        items: [
          "Droit d’opposition : vous pouvez vous opposer au traitement fondé sur l’intérêt légitime.",
          "Droit de retrait du consentement : pour les traitements basés sur votre consentement.",
          "Droit d’introduire une réclamation auprès de l’Autorité de protection des données (APD) en Belgique."
        ],
        outro: "Une réponse vous sera apportée dans un délai maximal d’un mois (prolongeable de deux mois en cas de demande complexe).",
        authority: "Autorité de protection des données (APD) – Rue de la Presse 35, 1000 Bruxelles – contact@apd-gba.be – https://www.autoriteprotectiondonnees.be"
      },
      cookies: {
        title: "Cookies et traceurs",
        intro: "Ce site ne dépose pas de cookies publicitaires ni d’analyse d’audience. Seuls des traceurs strictement nécessaires peuvent être utilisés :",
        items: [
          "Cookie/jeton Cloudflare Turnstile pour la protection anti-bot.",
          "Stockage local de la langue choisie (localStorage) pour afficher le site dans la langue sélectionnée."
        ]
      },
      social: {
        title: "Réseaux sociaux",
        content: "Les liens vers Instagram et Facebook renvoient vers les pages officielles de l’artiste. Aucune donnée n’est partagée automatiquement : vous ne transmettez des informations à ces plateformes que lorsque vous cliquez sur le lien ou interagissez avec elles."
      }
    },
  },
  en: {
    skipToContent: "Skip to content",
    nav: {
      home: "Home",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
      legal: "Legal & Privacy"
    },
    themeToggle: {
      light: "Light",
      dark: "Dark",
      switchToLight: "Activate light theme",
      switchToDark: "Activate dark theme",
    },
    languageToggle: {
      label: "EN",
      switchToFrench: "Switch site to French",
      switchToEnglish: "Switch site to English",
      switchToDutch: "Switch site to Dutch",
    },
    home: {
      hero: {
        title: "THE HIDDEN FACE OF THE ARTIST",
        content: "No one suspected the artist sleeping within him, but since 2010 Pino Onali has been creating boundlessly. Pigments now burst and overflow from his canvases of increasingly impressive sizes. The result is surprising, and the walls of his studio are no longer enough to display this rage to paint. Pino invites you on this journey and to discover the other side of this multifaceted mirror reflecting the colors of life. A teeming life that draws us from *verde*, *rosso* emotions to a grand wink at the moon.",
        subtitle: "Painter - Artist",
        actions: {
          primary: "VIEW ARTWORK",
        },
      },
      video: {
        content: "Discover a glimpse of Pino Onali's latest exhibition through this short immersive video. A dive into his universe of moons, stars, and moving pigments.",
        muteMessage: "The video starts silently. Activate the sound if you wish.",
        overTitle: "Exhibition",
        title: "« Objective Moon »"
      },
      news: {
        kicker: "Upcoming exhibition",
        title: "Milky Moon",
        subtitle: "A series of works around stars and constellations.",
        meta: "Boulevard de Waterloo 65\n1000 Brussels — January 19 to December 25, 2026",
        description: `
          Here is my beloved Moon again, in a playful variation, smaller, it guides the Milky Way and decides to see everything and above all, hear everything thanks to its black ears covered with resin to make it more receptive.. this will certainly remind you of something that never uttered a single word, but which everyone always understood.
          It is this time declined in more fluorescent shades, and sometimes resumes the style of its ancestor.
          Have a good trip on the Milky Moon.`,
        ctaLabel: "Learn more"
      }
    },
    gallery: {
      title: "Gallery",
      subtitle: "Discover a selection of artworks from the universe of Pino Onali.",
      interess: "I am interested in this artwork",
      soldout: "SOLD OUT",
      zoom: "Zoom",
      filterAll: "All artworks",
      filterAvailable: "Available",
      filterSold: "Sold out"
    },
    aboutPage: {
        hero: {
        title: 'Pino Onali',
        rail: 'ABOUT',
        content: `Between stars, pigments, and bursts of light, Pino Onali composes
                  canvases that oscillate between contemplation and explosion. His
                  painting doesn't seek to tell a linear story: it opens doors, creates atmospheres, allows the gaze to wander.`,
        image: {
          title: "Painter Artist",
          subtitle: "Based in Brussels • Lunar & cosmic inspirations"
        }
      },
      columns: {
        left: {
          title: "Biography",
          content1: `Pino decided to take up painting out of an obligation to find exactly the ideal painting for his interior in 2010; it must be said that nothing matched the \"chocolate\" walls that extended throughout the apartment. Little by little, he discovered a talent that he has continued to reinvent ever since!`,
          content2: `From exhibitions to exhibitions, hotel bars to hotel bars, galleries to galleries, he has continued to produce new tonalitites due to the infinite mixing of colors. He admits, moreover, that even if slightly colorblind, or completely so, this handicap is an enormous strength that pushes him to recreate exceptional tonalitites that many clients have already appropriated over the years. His motto is color, and color is his favorite field.`
        },
        right: {
          title: "Benchmarks",
          locationTitle: "Based in",
          locationContent: "Brussels, Belgium",
          themeTitle: "Recurring themes",
          themeContent: "Moons, constellations, cosmic materials",
          technicTitle: "Techniques",
          technicContent: "Acrylic, polyurethane, oil, mixed media",
          formatTitle: "Formats",
          formatContent: "Large format canvases, modular series"
        }
      },
      panel: {
        panel1: {
          title: "Artistic approach",
          content: `Pino's painting doesn't seek to dominate the space, but to let it
                  breathe. He builds his canvases with successive layers:
                  transparencies, overlays, spontaneous gestures, assumed accidents.`
        },
        panel2: {
          title: "Visual universe",
          content: `Moons, halos, bursts and fragments of light: his canvases evoke
                  imaginary sky maps, interior landscapes traversed
                  by invisible forces.`
        },
        panel3: {
          title: "Techniques & materials",
          content: `Acrylic, oil, inks, sometimes sand or raw pigments... Pino
                  explores how each material reacts, mixes, or resists on the surface of the canvas.`
        }
      },
      quote: "« Painting is not what you see, but what you feel. »"
    },
    contactPage: {
      hero: {
        title: "Contact",
        subtitle: "For any questions, interest in an artwork, or exhibition project, you can contact Pino Onali directly or use the form."
      },
      infos: {
        title: "Contact Information",
        subtitle: "Pino is available for artwork acquisition requests, exhibition projects, or specific commissions.",
        phone: "Phone",
        email: "Email",
        footer: "You can also use the contact form to specify the artwork or type of project you are interested in."
      },
      form: {
        title: "Contact Form",
        subtitle: "Fill out this form to send a message directly to the artist.",
        nameLabel: "NAME",
        nameEx: "Your name",
        emailLabel: "EMAIL",
        emailEx: "you@example.com",
        messageLabel: "MESSAGE",
        messageEx: "Your message...",
        button: "SEND MESSAGE",
        buttonLoading: "Sending...",
        succesMsg: "Thank you, your message has been sent successfully. Pino will reply as soon as possible.",
        errorMsg: "An error occurred. Please try again later.",
        interess: "I am interested in the artwork: ",
        captchaError: "Please validate the captcha before sending your message."
      }
    },
    footer: {
      c1: "© 2025 Pino Onali. All rights reserved.",
      c2: "All artworks and images on this site are the property of the artist.",
      c3: "Site designed and developed by Davit Nersesyan.",
      legalLink: "Legal notice & Privacy policy"
    },
    legalPage: {
      hero: {
        title: "Legal notice & privacy policy",
        subtitle: "Mandatory information under Belgian law and the GDPR for publishing this website.",
        updated: "Last updated: 12/08/2025"
      },
      editor: {
        title: "Site publisher",
        identity: "Website published by Pino Onali, independent visual artist.",
        contact: "Primary contact:",
        location: "Business location: Brussels, Belgium"
      },
      data: {
        title: "Data collected & purposes",
        intro: "Personal data are only processed to answer requests sent through the contact form:",
        items: [
          {
            title: "Contact form",
            content: "name, email address, message content and, where relevant, the artwork you are interested in. These are needed so we can reply."
          },
          {
            title: "Anti-bot security",
            content: "Cloudflare Turnstile checks that the submission is human. Cloudflare may receive technical data (IP address, browser signals)."
          }
        ]
      },
      legalBases: {
        title: "Legal bases (GDPR)",
        items: [
          "Article 6.1.f – legitimate interest to respond to the requests you initiate via the form.",
          "Article 6.1.a – your explicit consent for sending the form and using the security captcha."
        ]
      },
      recipients: {
        title: "Recipients & processors",
        items: [
          "Messages are routed by the email service Resend solely to deliver your request to the artist.",
          "Cloudflare (Turnstile) processes technical data to validate the anti-bot captcha."
        ],
        note: "These providers may process data outside the EU (United States). Standard Contractual Clauses from the European Commission are used by these services to frame such transfers."
      },
      retention: {
        title: "Retention periods",
        items: [
          "Messages received: kept in the mailbox for the time needed to handle and follow up the exchange, then archived for up to 24 months unless a legal obligation requires longer.",
          "Technical data from the captcha: retained by Cloudflare only for the time strictly necessary for verification."
        ]
      },
      rights: {
        title: "Your GDPR rights",
        intro: "You can exercise your rights (access, rectification, erasure, restriction, objection, portability) at any time by writing to pinoonali@hotmail.be.",
        items: [
          "Right to object: you may object to processing based on legitimate interest.",
          "Right to withdraw consent: for processing based on your consent.",
          "Right to lodge a complaint with the Belgian Data Protection Authority."
        ],
        outro: "You will receive an answer within one month (extendable by two months in the event of complex requests).",
        authority: "Data Protection Authority (APD/GBA) – Rue de la Presse 35, 1000 Brussels – contact@apd-gba.be – https://www.autoriteprotectiondonnees.be"
      },
      cookies: {
        title: "Cookies & trackers",
        intro: "This site does not use advertising or analytics cookies. Only strictly necessary tools may be used:",
        items: [
          "Cloudflare Turnstile cookie/token for anti-bot protection.",
          "Local storage of the selected language (localStorage) to show the site in your chosen language."
        ]
      },
      social: {
        title: "Social networks",
        content: "Links to Instagram and Facebook lead to the artist’s official pages. No data is shared automatically: you only transmit data to these platforms when you click or interact with them."
      }
    },
  },
  nl: {
    skipToContent: "Ga naar de inhoud",
    nav: {
      home: "Home",
      gallery: "Galerij",
      about: "Over",
      contact: "Contact",
      legal: "Juridisch & Privacy"
    },
    themeToggle: {
      light: "Licht",
      dark: "Donker",
      switchToLight: "Licht thema activeren",
      switchToDark: "Donker thema activeren",
    },
    languageToggle: {
      label: "NL",
      switchToFrench: "Site naar het Frans schakelen",
      switchToEnglish: "Site naar het Engels schakelen",
      switchToDutch: "Site naar het Nederlands schakelen",
    },
    home: {
      hero: {
        title: "DE VERBORGEN KANT VAN DE KUNSTENAAR",
        content: "Niemand vermoedde de slapende kunstenaar in hem, maar sinds 2010 creeert Pino Onali zonder rem. Pigmenten barsten nu uit en lopen over van zijn steeds indrukwekkendere doeken. Het resultaat verrast, en de muren van zijn atelier volstaan niet langer om deze drang om te schilderen te tonen. Pino nodigt je uit op deze reis en om de andere kant van deze veelvlakspiegel te ontdekken, waar de kleuren van het leven zich weerspiegelen. Een bruisend leven dat ons meeneemt van verde, rosso emoties tot een grote knipoog naar de maan.",
        subtitle: "Schilder - Kunstenaar",
        actions: {
          primary: "BEKIJK DE WERKEN",
        },
      },
      video: {
        content: "Ontdek een glimp van de laatste tentoonstelling van Pino Onali via deze korte meeslepende video. Een duik in zijn universum van manen, sterren en bewegende pigmenten.",
        muteMessage: "De video start zonder geluid. Zet het geluid aan als je dat wilt.",
        overTitle: "Tentoonstelling",
        title: "« Objectief Maan »"
      },
      news: {
        kicker: "Aankomende tentoonstelling",
        title: "Milky Moon",
        subtitle: "Een serie werken rondom sterren en sterrenbeelden.",
        meta: "Boulevard de Waterloo 65\n1000 Brussel — 19 januari tot 25 december 2026",
        description: `
          Hier is mijn geliefde Maan weer, in een speelse variatie, kleiner, zij wijst de Melkweg en besluit alles te zien en vooral, alles te horen dankzij haar zwarte oren bedekt met hars om haar ontvankelijker te maken.. dit zal je zeker herinneren aan iets dat nooit een woord heeft gezegd, maar dat iedereen altijd heeft begrepen.
          Dit keer is ze uitgevoerd in meer fluorescerende tinten, en soms neemt ze de stijl van haar voorouder over.
          Goede reis op de Milky Moon.`,
        ctaLabel: "Meer informatie"
      }
    },
    gallery: {
      title: "Galerij",
      subtitle: "Ontdek een selectie van kunstwerken uit het universum van Pino Onali.",
      interess: "Ik ben geïnteresseerd in dit kunstwerk",
      soldout: "UITVERKOCHT",
      zoom: "Zoom",
      filterAll: "Alle kunstwerken",
      filterAvailable: "Beschikbaar",
      filterSold: "Verkocht"
    },
    aboutPage: {
      hero: {
        title: 'Pino Onali',
        rail: 'OVER ONS',
        content: `Tussen sterren, pigmenten en lichtflitsen door, componeert Pino Onali
                  doeken die schommelen tussen contemplatie en explosie. Zijn
                  schilderwerk probeert geen lineair verhaal te vertellen: het opent deuren, creëert sferen, laat het oog dwalen.`,
        image: {
          title: "Kunstschilder",
          subtitle: "Gebaseerd in Brussel • Lunaire & kosmische inspiraties"
        }
      },
      columns: {
        left: {
          title: "Biografie",
          content1: `Pino besloot te gaan schilderen uit de noodzaak om in 2010 precies het ideale schilderij voor zijn interieur te vinden; het mag duidelijk zijn dat niets paste bij de \"chocolade\" muren die door het hele appartement liepen. Beetje bij beetje ontdekte hij een talent dat hij sindsdien is blijven heruitvinden!`,
          content2: `Van tentoonstellingen naar tentoonstellingen, van hotelbars naar hotelbars, van galeries naar galeries, is hij nieuwe tonaliteiten blijven produceren door de oneindige vermenging van kleuren. Hij geeft trouwens toe dat, zelfs al is hij licht kleurenblind, of volledig, deze handicap een enorme kracht is die hem ertoe aanzet uitzonderlijke tonaliteiten te hercreëren die veel klanten zich in de loop der jaren al hebben toegeëigend. Zijn motto is kleur, en kleur is zijn favoriete domein.`
        },
        right: {
          title: "Referentiepunten",
          locationTitle: "Gebaseerd in",
          locationContent: "Brussel, België",
          themeTitle: "Terugkerende thema's",
          themeContent: "Maan, constellaties, kosmische materialen",
          technicTitle: "Technieken",
          technicContent: "Acryl, polyurethaan, olie, gemengde technieken",
          formatTitle: "Formats",
          formatContent: "Grootformaat doeken, modulaire series"
        }
      },
      panel: {
        panel1: {
          title: "Artistieke benadering",
          content: `Pino's schilderwerk probeert de ruimte niet te domineren, maar het
                  te laten ademen. Hij bouwt zijn doeken op in opeenvolgende lagen:
                  transparanties, overlappende delen, spontane gebaren, bewuste ongelukken.`
        },
        panel2: {
          title: "Visueel universum",
          content: `Maan, halo's, flitsen en fragmenten van licht: zijn doeken roepen
                  denkbeeldige hemelkaarten op, innerlijke landschappen doorkruist
                  door onzichtbare krachten.`
        },
        panel3: {
          title: "Technieken & materialen",
          content: `Acryl, olie, inkten, soms zand of ruwe pigmenten... Pino
                  onderzoekt hoe elk materiaal reageert, mengt of weerstand biedt op het oppervlak van het doek.`
        }
      },
      quote: "« Schilderen is niet wat je ziet, maar wat je voelt. »"
    },
    contactPage: {
      hero: {
        title: "Contact",
        subtitle: "Voor vragen, interesse in een kunstwerk, of tentoonstellingsprojecten kunt u direct contact opnemen met Pino Onali of het formulier gebruiken."
      },
      infos: {
        title: "Contactgegevens",
        subtitle: "Pino is beschikbaar voor verzoeken tot aankoop van kunstwerken, tentoonstellingsprojecten of specifieke opdrachten.",
        phone: "Telefoon",
        email: "E-mail",
        footer: "U kunt ook het contactformulier gebruiken om het kunstwerk of het type project waarin u geïnteresseerd bent te specificeren."
      },
      form: {
        title: "Contactformulier",
        subtitle: "Vul dit formulier in om een bericht rechtstreeks naar de kunstenaar te sturen.",
        nameLabel: "NAAM",
        nameEx: "Uw naam",
        emailLabel: "E-MAILADRES",
        emailEx: "u@voorbeeld.com",
        messageLabel: "BERICHT",
        messageEx: "Uw bericht...",
        button: "BERICHT VERZENDEN",
        buttonLoading: "Verzenden...",
        succesMsg: "Bedankt, uw bericht is succesvol verzonden. Pino zal zo snel mogelijk antwoorden.",
        errorMsg: "Er is een fout opgetreden. Probeer het later opnieuw.",
        interess: "Ik ben geïnteresseerd in het kunstwerk: ",
        captchaError: "Bevestig de captcha voordat u uw bericht verstuurt."
      }
    },
    footer: {
      c1: "© 2025 Pino Onali. Alle rechten voorbehouden.",
      c2: "Alle kunstwerken en afbeeldingen op deze site zijn eigendom van de kunstenaar.",
      c3: "Site ontworpen en ontwikkeld door Davit Nersesyan.",
      legalLink: "Juridische vermeldingen & privacybeleid"
    },
    legalPage: {
      hero: {
        title: "Juridische vermeldingen & privacybeleid",
        subtitle: "Verplichte informatie volgens Belgische wetgeving en de AVG voor het publiceren van deze site.",
        updated: "Laatst bijgewerkt: 08/12/2025"
      },
      editor: {
        title: "Uitgever van de site",
        identity: "Site uitgegeven door Pino Onali, onafhankelijke beeldend kunstenaar.",
        contact: "Hoofdcontact:",
        location: "Zakelijke locatie: Brussel, België"
      },
      data: {
        title: "Verzamelde gegevens & doeleinden",
        intro: "Persoonsgegevens worden uitsluitend verwerkt om te antwoorden op aanvragen die via het contactformulier worden verzonden:",
        items: [
          {
            title: "Contactformulier",
            content: "naam, e-mailadres, bericht en eventueel het kunstwerk dat uw interesse heeft. Deze zijn nodig zodat we kunnen antwoorden."
          },
          {
            title: "Anti-bot beveiliging",
            content: "Cloudflare Turnstile controleert of de inzending van een mens komt. Cloudflare kan technische gegevens ontvangen (IP-adres, browsersignalen)."
          }
        ]
      },
      legalBases: {
        title: "Rechtsgrond (AVG)",
        items: [
          "Artikel 6.1.f – gerechtvaardigd belang om te antwoorden op de aanvragen die u via het formulier indient.",
          "Artikel 6.1.a – uw uitdrukkelijke toestemming voor het verzenden van het formulier en het gebruik van de beveiligingscaptcha."
        ]
      },
      recipients: {
        title: "Ontvangers & verwerkers",
        items: [
          "Berichten worden doorgestuurd via de e-maildienst Resend uitsluitend om uw aanvraag aan de kunstenaar te bezorgen.",
          "Cloudflare (Turnstile) verwerkt technische gegevens om de anti-bot captcha te valideren."
        ],
        note: "Deze leveranciers kunnen gegevens buiten de EU verwerken (Verenigde Staten). Zij maken gebruik van Standaardcontractbepalingen van de Europese Commissie om deze doorgiften te regelen."
      },
      retention: {
        title: "Bewaartermijnen",
        items: [
          "Ontvangen berichten: bewaard in de mailbox zolang nodig is voor de opvolging, daarna maximaal 24 maanden gearchiveerd tenzij een wettelijke plicht langere bewaring vereist.",
          "Technische gegevens van de captcha: door Cloudflare bewaard zolang strikt nodig voor de verificatie."
        ]
      },
      rights: {
        title: "Uw AVG-rechten",
        intro: "U kunt uw rechten (inzage, rectificatie, verwijdering, beperking, bezwaar, overdraagbaarheid) uitoefenen door te schrijven naar pinoonali@hotmail.be.",
        items: [
          "Recht van bezwaar: u kunt bezwaar maken tegen verwerkingen op basis van gerechtvaardigd belang.",
          "Recht om toestemming in te trekken: voor verwerkingen die op uw toestemming steunen.",
          "Recht om een klacht in te dienen bij de Gegevensbeschermingsautoriteit (GBA) in België."
        ],
        outro: "U ontvangt een antwoord binnen één maand (met een mogelijke verlenging van twee maanden bij complexe verzoeken).",
        authority: "Gegevensbeschermingsautoriteit (GBA/APD) – Drukpersstraat 35, 1000 Brussel – contact@apd-gba.be – https://www.gegevensbeschermingsautoriteit.be"
      },
      cookies: {
        title: "Cookies & trackers",
        intro: "Deze site gebruikt geen reclame- of analytische cookies. Alleen strikt noodzakelijke middelen kunnen worden gebruikt:",
        items: [
          "Cloudflare Turnstile cookie/token voor bescherming tegen bots.",
          "Lokale opslag van de gekozen taal (localStorage) om de site in de gewenste taal te tonen."
        ]
      },
      social: {
        title: "Sociale netwerken",
        content: "Links naar Instagram en Facebook verwijzen naar de officiële pagina’s van de kunstenaar. Er wordt niets automatisch gedeeld: u geeft pas gegevens door aan deze platforms wanneer u klikt of ermee interageert."
      }
    },
  },
};

export function getTranslations(language: Language) {
  return translations[language];
}
