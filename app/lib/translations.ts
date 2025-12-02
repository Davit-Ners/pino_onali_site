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
    home: string;
    gallery: string;
    about: string;
    contact: string;
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
      home: "Accueil",
      gallery: "Galerie",
      about: "À Propos",
      contact: "Contact"
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
        title: "Sous les lunes de Bruxelles",
        subtitle: "Une série d’œuvres autour des astres et constellations.",
        meta: "Bruxelles — 12 > 28 avril 2025",
        description: "Texte de présentation de l’expo…",
        ctaLabel: "En savoir plus"
      }
    },
    gallery: {
        title: "Galerie",
        subtitle: "Découvrez une sélection d’œuvres issues de l’univers de Pino Onali.",
        interess: "Cette œuvre m'intéresse",
        soldout: "SOLD OUT"
    },
    aboutPage: {

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
      home: "Home",
      gallery: "Gallery",
      about: "About",
      contact: "Contact"
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
        kicker: "Prochaine exposition",
        title: "Sous les lunes de Bruxelles",
        subtitle: "Une série d’œuvres autour des astres et constellations.",
        meta: "Bruxelles — 12 > 28 avril 2025",
        description: "Texte de présentation de l’expo…",
        ctaLabel: "En savoir plus"
      }
    },
    gallery: {
      title: "Gallery",
      subtitle: "Discover a selection of artworks from the universe of Pino Onali.",
      interess: "I am interested in this artwork",
      soldout: "SOLD OUT"
    },
    aboutPage: {

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
      home: "Home",
      gallery: "Galerij",
      about: "Over",
      contact: "Contact"
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
        kicker: "Prochaine exposition",
        title: "Sous les lunes de Bruxelles",
        subtitle: "Une série d’œuvres autour des astres et constellations.",
        meta: "Bruxelles — 12 > 28 avril 2025",
        description: "Texte de présentation de l’expo…",
        ctaLabel: "En savoir plus"
      }
    },
    gallery: {
      title: "Galerij",
      subtitle: "Ontdek een selectie van kunstwerken uit het universum van Pino Onali.",
      interess: "Ik ben geïnteresseerd in dit kunstwerk",
      soldout: "UITVERKOCHT"
    },
    aboutPage: {
      
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
