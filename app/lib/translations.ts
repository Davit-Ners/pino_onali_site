export type Language = "fr" | "en" | "nl";

interface ContactItem {
  label: string;
  description: string;
  href: string;
}

interface TimelineItem {
  title: string;
  description: string;
}

interface Translations {
  skipToContent: string;
  nav: {
    about: string;
    tunning: string;
    sections: Array<{
      id: string;
      label: string;
    }>;
    cta: string;
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
    }
  };
  gallery: {
    title: string;
    subtitle: string;
    interess: string;
    soldout: string;
  };
  aboutPage: {
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
    }
  };
  footer: {
    location: string;
    copy: string;
  };
};

export const defaultLanguage: Language = "fr";

export const translations: Record<Language, Translations> = {
  fr: {
    skipToContent: "Aller au contenu",
    nav: {
      about: "À Propos",
      tunning: "Accordage Piano",
      sections: [
        { id: 'disciplines', label: 'Cours' },
        { id: 'tarifs', label: 'Tarifs' },
        { id: 'avis', label: 'Avis' },
        { id: 'contact', label: 'Contact' },
      ],
      cta: "Cours d'essai"
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
      }
    },
    gallery: {
        title: "Galerie",
        subtitle: "Découvrez une sélection d’œuvres issues de l’univers de Pino Onali.",
        interess: "Cette œuvre m'intéresse",
        soldout: "SOLD OUT"
    },
    aboutPage: {
      kicker: "À propos, Arthur Boutellis",
      title: {
        t1: "Un prof ",
        t2: "passionné ",
        t3: "& exigeant, orienté ",
        t4: "résultats"
      },
      points: {
        p1: "Programmes personnalisés (débutant → avancé)",
        p2: "Support audio/vidéo & fiches PDF",
        p3: "Préparation concerts, auditions & enregistrements"
      },
      lead: "10+ ans de scène et studio, musicien dans plusieurs groupes dont le groupe DJYN. Une pédagogie moderne, concrète, et des objectifs mesurables pour progresser chaque semaine — en studio, à domicile ou en visio.",
      bio: {
        intro: "Formé sur le terrain et en académie, j’accompagne des élèves de tous âges. Mon approche : partir de votre musique, structurer vos objectifs, et construire des automatismes techniques qui libèrent la créativité.",
        title: "Parcours & philosophie",
        cards: [
          {
            title: "De la scène à la salle de cours",
            text: "Expérience live (groupes, premières parties, studio). Ce vécu nourrit une pédagogie concrète : travail du son, présence scénique, gestion du trac.",
          },
          {
            title: "Méthode progressive & mesurable",
            text: "Roadmap par trimestre : morceaux cibles, techniques, mini-projets. Chaque cours se conclut par des points d’action et un support (PDF/vidéo).",
          },
          {
            title: "Styles & transversalité",
            text: "Rock/metal, pop, funk, musiques actuelles. Harmonies, rythme, oreille : on relie la théorie à la pratique, tout de suite.",
          },
        ],
        values: {
          strong: {
            s1: "Bienveillance ",
            s2: "Clarté ",
            s3: "Efficacité ",
          },
          text: {
            t1: "sans complaisance",
            t2: "des objectifs",
            t3: "& envie",
          }
        }
      },
      certifications: {
        title: "Diplômes & certifications",
        items: [
          { title: "Certificat Pédagogique", org: "Conservatoire XYZ", year: "2018" },
          { title: "Formation MAO & Enregistrement", org: "Studio ABC", year: "2019" },
          { title: "Premiers secours & voix", org: "Formation Santé Artistes", year: "2021" },
        ]
      },
      contact: {
        title: "Discutons de vos objectifs",
        sub: "Décrivez votre niveau et ce que vous voulez jouer. Je vous propose un plan simple dès le premier cours.",
        cta: "Réserver un cours d’essai"
      },
      pedagogy: {
        title: "Pédagogie & méthode",
        items: [
          { title: "Plan perso", desc: "Objectifs trimestriels, morceaux cibles, techniques clés." },
          { title: "Supports clairs", desc: "PDF, backing tracks, vidéos récap, tout centralisé." },
          { title: "Rituels efficaces", desc: "Structuration de la pratique (20–30 min/jour)." },
          { title: "Mise en pratique", desc: "Mini-concert, enregistrement, défi mensuel." },
          { title: "Feedback précis", desc: "Critères simples : rythme, justesse, son, intention." },
          { title: "Suivi", desc: "Bilan mensuel + conseils de progression." },
        ]
      },
      studio: {
        title: "Studio & formats de cours",
        gallery: [
          {
            alt: "Coin guitare & amplis du studio",
            img: "/gallery/studio-1.jpg",
            caption: "Guitare/Basse — sons modernes, travail du groove"
          },
          {
            alt: "Clavier et setup enregistrement",
            img: "/gallery/studio-2.png",
            caption: "Piano/Clavier — harmonie pop/rock"
          },
          {
            alt: "Micro de chant et cabine",
            img: "/gallery/studio-3.jpg",
            caption: "Chant — respiration, justesse, présence"
          }
        ],
        format: [
          {
            title: "En studio",
            text: "Matériel pro, écoute de qualité, captations possibles pour suivre vos progrès."
          },
          {
            title: "À domicile",
            text: "Confort maximal. Même méthode, supports & suivi identiques."
          },
          {
            title: "En visio",
            text: "Setup optimisé (cam + son). Partage d’écran, fichiers et exercices en direct."
          }
        ]
      }
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
        interess: "Je suis intéressé(e) par l’œuvre : "
      }
    },
    footer: {
      location: "Bruxelles & en ligne",
      copy: "Tous droits réservés."
    },
  },
  en: {
    skipToContent: "Skip to content",
    nav: {
      about: "About",
      tunning: "Piano Tuning",
      sections: [
        { id: 'disciplines', label: 'Lessons' },
        { id: 'tarifs', label: 'Pricing' },
        { id: 'avis', label: 'Testamonials' },
        { id: 'contact', label: 'Contact' },
      ],
      cta: "Trial"
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
      }
    },
    gallery: {
      title: "Gallery",
      subtitle: "Discover a selection of artworks from the universe of Pino Onali.",
      interess: "I am interested in this artwork",
      soldout: "SOLD OUT"
    },
    aboutPage: {
      kicker: "About, Arthur Boutellis",
      title: {
        t1: "A ",
        t2: "passionate ",
        t3: "& demanding teacher, focused on ",
        t4: "results"
      },
      points: {
        p1: "Personalized programs (beginner → advanced)",
        p2: "Audio/video materials & PDF sheets",
        p3: "Concert, audition & recording preparation"
      },
      lead: "10+ years of live and studio experience, musician in several bands including DJYN. A modern and practical teaching approach, with measurable goals to make progress every week — whether in the studio, at home, or online.",
      bio: {
        intro: "Trained both on stage and in academies, I teach students of all ages. My approach: start from your music, structure your goals, and build technical habits that free your creativity.",
        title: "Background & Philosophy",
        cards: [
          {
            title: "From the stage to the classroom",
            text: "Live experience (bands, opening acts, studio). This background fuels a hands-on teaching method: tone work, stage presence, and managing stage fright.",
          },
          {
            title: "Progressive & measurable method",
            text: "Quarterly roadmap: target songs, techniques, mini-projects. Each lesson ends with clear action points and a dedicated support (PDF/video).",
          },
          {
            title: "Styles & versatility",
            text: "Rock/metal, pop, funk, contemporary music. Harmony, rhythm, ear training: theory and practice are always connected.",
          },
        ],
        values: {
          strong: {
            s1: "Kindness ",
            s2: "Clarity ",
            s3: "Efficiency ",
          },
          text: {
            t1: "without complacency",
            t2: "of goals",
            t3: "& motivation",
          }
        }
      },
      certifications: {
        title: "Degrees & Certifications",
        items: [
          { title: "Pedagogy Certificate", org: "Conservatory XYZ", year: "2018" },
          { title: "Music Production & Recording Training", org: "Studio ABC", year: "2019" },
          { title: "First Aid & Voice Care", org: "Artists Health Training", year: "2021" },
        ]
      },
      contact: {
        title: "Let’s talk about your goals",
        sub: "Tell me your level and what you want to play. I’ll propose a simple plan from the very first lesson.",
        cta: "Book a trial lesson"
      },
      pedagogy: {
        title: "Pedagogy & Method",
        items: [
          { title: "Personal plan", desc: "Quarterly goals, target songs, key techniques." },
          { title: "Clear materials", desc: "PDFs, backing tracks, recap videos — all in one place." },
          { title: "Effective routines", desc: "Structured practice (20–30 min/day)." },
          { title: "Hands-on practice", desc: "Mini-concert, recording, monthly challenge." },
          { title: "Precise feedback", desc: "Simple criteria: rhythm, pitch, tone, intent." },
          { title: "Progress tracking", desc: "Monthly review + progress tips." },
        ]
      },
      studio: {
        title: "Studio & lesson formats",
        gallery: [
          {
            alt: "Guitar and amp corner of the studio",
            img: "/gallery/studio-1.jpg",
            caption: "Guitar/Bass — modern tones, groove work"
          },
          {
            alt: "Keyboard and recording setup",
            img: "/gallery/studio-2.png",
            caption: "Piano/Keys — pop/rock harmony, accompaniment"
          },
          {
            alt: "Vocal mic and booth",
            img: "/gallery/studio-3.jpg",
            caption: "Vocals — breathing, pitch, presence"
          }
        ],
        format: [
          {
            title: "In studio",
            text: "Pro gear, high-quality monitoring, optional recordings to track your progress."
          },
          {
            title: "At home",
            text: "Maximum comfort. Same method, materials, and follow-up."
          },
          {
            title: "Online",
            text: "Optimized setup (camera + audio). Screen sharing, files, and exercises in real time."
          }
        ]
      }
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
        interess: "I am interested in the artwork: "
      }
    },
    footer: {
      location: "Brussels & online",
      copy: "All rights reserved."
    },
  },
  nl: {
    skipToContent: "Ga naar de inhoud",
    nav: {
      about: "Over",
      tunning: "Piano stemmen",
      sections: [
        { id: 'disciplines', label: 'Lessen' },
        { id: 'tarifs', label: 'Prijzen' },
        { id: 'avis', label: 'Beoordelingen' },
        { id: 'contact', label: 'Contact' },
      ],
      cta: "Proefles"
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
      }
    },
    gallery: {
      title: "Galerij",
      subtitle: "Ontdek een selectie van kunstwerken uit het universum van Pino Onali.",
      interess: "Ik ben geïnteresseerd in dit kunstwerk",
      soldout: "UITVERKOCHT"
    },
    aboutPage: {
      kicker: "Over, Arthur Boutellis",
      title: {
        t1: "Een ",
        t2: "gepassioneerde ",
        t3: "& veeleisende docent, gericht op ",
        t4: "resultaat"
      },
      points: {
        p1: "Persoonlijke programma's (beginner tot gevorderd)",
        p2: "Audio/video materiaal & PDF-fiches",
        p3: "Voorbereiding voor concerten, audities en opnames"
      },
      lead: "10+ jaar podium- en studio-ervaring, muzikant in verschillende bands waaronder DJYN. Een moderne en concrete aanpak met meetbare doelen om elke week vooruit te gaan - in de studio, thuis of online.",
      bio: {
        intro: "Opgeleid op het podium en in academies, ik begeleid leerlingen van alle leeftijden. Mijn aanpak: vertrekken vanuit jouw muziek, doelen structureren en technische automatismen bouwen die creativiteit vrijmaken.",
        title: "Achtergrond & filosofie",
        cards: [
          {
            title: "Van podium naar klaslokaal",
            text: "Live-ervaring (bands, voorprogramma's, studio). Die praktijk voedt een hands-on pedagogie: klank, presence, omgaan met podiumvrees.",
          },
          {
            title: "Progressieve & meetbare methode",
            text: "Roadmap per trimester: doelliedjes, technieken, mini-projecten. Elke les eindigt met duidelijke actiepunten en een support (PDF/video).",
          },
          {
            title: "Stijlen & veelzijdigheid",
            text: "Rock/metal, pop, funk, hedendaagse muziek. Harmonie, ritme, gehoor: theorie en praktijk zijn meteen verbonden.",
          },
        ],
        values: {
          strong: {
            s1: "Welwillendheid ",
            s2: "Duidelijkheid ",
            s3: "Doeltreffendheid ",
          },
          text: {
            t1: "zonder toegevingen",
            t2: "van doelen",
            t3: "& motivatie",
          }
        }
      },
      certifications: {
        title: "Diploma's & certificeringen",
        items: [
          { title: "Pedagogisch certificaat", org: "Conservatorium XYZ", year: "2018" },
          { title: "Opleiding muziekproductie & opname", org: "Studio ABC", year: "2019" },
          { title: "EHBO & stemzorg", org: "Training Gezondheid Artiesten", year: "2021" },
        ]
      },
      contact: {
        title: "Laten we je doelen bespreken",
        sub: "Beschrijf je niveau en wat je wil spelen. Ik stel vanaf de eerste les een eenvoudig plan voor.",
        cta: "Boek een proefles"
      },
      pedagogy: {
        title: "Pedagogie & methode",
        items: [
          { title: "Persoonlijk plan", desc: "Doelen per trimester, doelliedjes, kerntechnieken." },
          { title: "Duidelijk materiaal", desc: "PDF's, backing tracks, recap-videos - alles op een plek." },
          { title: "Effectieve routines", desc: "Gestructureerde oefening (20-30 min/dag)." },
          { title: "Directe praktijk", desc: "Mini-concert, opname, maandelijkse uitdaging." },
          { title: "Precieze feedback", desc: "Eenvoudige criteria: ritme, toonhoogte, klank, intentie." },
          { title: "Opvolging", desc: "Maandelijkse review + tips voor vooruitgang." },
        ]
      },
      studio: {
        title: "Studio & lesformats",
        gallery: [
          {
            alt: "Gitaar- en versterkerhoek van de studio",
            img: "/gallery/studio-1.jpg",
            caption: "Gitaar/Bas - moderne sounds, groovewerk"
          },
          {
            alt: "Toetsenbord en opnameopstelling",
            img: "/gallery/studio-2.png",
            caption: "Piano/Keys - pop/rock harmonie, begeleiding"
          },
          {
            alt: "Zangmicrofoon en cabine",
            img: "/gallery/studio-3.jpg",
            caption: "Zang - ademhaling, zuiverheid, presence"
          }
        ],
        format: [
          {
            title: "In de studio",
            text: "Pro gear, kwaliteitsmonitoring, optionele opnames om je vooruitgang te volgen."
          },
          {
            title: "Thuis",
            text: "Maximaal comfort. Dezelfde methode, materiaal en opvolging."
          },
          {
            title: "Online",
            text: "Geoptimaliseerde setup (camera + audio). Schermdeling, bestanden en oefeningen in real time."
          }
        ]
      }
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
        interess: "Ik ben geïnteresseerd in het kunstwerk: "
      }
    },
    footer: {
      location: "Brussel & online",
      copy: "Alle rechten voorbehouden."
    },
  },
};

export function getTranslations(language: Language) {
  return translations[language];
}
