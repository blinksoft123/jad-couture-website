/**
 * JAD COUTURE — Configuration & Données Officielles
 * Institut de Formation Professionnelle Bilingue en Mode
 * Agrément MINEFOP : Arrêté N° 000789/MINEFOP/SG/DFOP/SDGSF/CSACD/CBAC
 * Diplômes préparés : DQP & AQP
 */

export const JAD_DATA = {
  institution: {
    name: "JAD COUTURE",
    fullName: "Institut de Formation Professionnelle Bilingue JAD COUTURE",
    tagline: "Institut de Formation Professionnelle Bilingue en Mode",
    punchline: "Apprendre. Créer. Transformer son talent en métier.",
    editorialHeadline: "LA MODE S'APPREND. LE STYLE SE CULTIVE. LE SAVOIR-FAIRE SE TRANSMET.",
    accreditation: "Arrêté N° 000789/MINEFOP/SG/DFOP/SDGSF/CSACD/CBAC",
    diplomas: "DQP (Diplôme de Qualification Professionnelle) & AQP (Attestation)",
    shortDescription: "JAD COUTURE est une institution d'excellence bilingue agréée par le MINEFOP, dédiée au stylisme-modélisme, à la couture professionnelle et à la broderie d'art. Un creuset où la haute technique sartoriale rencontre l'élégance africaine contemporaine.",
    city: "Dschang, Cameroun"
  },

  contact: {
    phoneDisplay: "+237 655 00 64 50 / 653 99 31 35",
    phone1: "+237655006450",
    phone2: "+237653993135",
    whatsapp: "+237655006450",
    whatsappDefaultMessage: "Bonjour JAD COUTURE, je souhaite obtenir des informations sur les modalités d'inscription aux formations certifiantes (DQP / AQP).",
    email: "contact@jadcouture.com [À confirmer]",
    address: "Dschang, face boulangerie EMAC — Région de l'Ouest, Cameroun",
    openingHours: "Lundi au Samedi : 08h00 — 18h00",
    socials: {
      instagram: "https://instagram.com/jadcouture",
      facebook: "https://facebook.com/jadcouture",
      whatsapp: "https://wa.me/237655006450"
    }
  },

  heroVideo: "src/assets/video/jad-hero-video.mp4",

  heroScenes: [
    {
      id: "scene-1",
      title: "La Collection Royale",
      subtitle: "Haute confection en velours et broderies traditionnelles Ndop",
      image: "src/assets/images/hero-royal-collection.jpg",
      caption: "Pièces d'apparat au tombé architectural et ornements de cauris"
    },
    {
      id: "scene-2",
      title: "L'Atelier & La Direction",
      subtitle: "Transmission du geste par des maîtres couturiers récompensés",
      image: "src/assets/images/hero-director-creations.jpg",
      caption: "Lauréat Festival Kouna Fashion Style • Pédagogie active & passion"
    },
    {
      id: "scene-3",
      title: "Consécration & Diplômes",
      subtitle: "La joie du succès couronné par les parchemins CFP JAD Couture",
      image: "src/assets/images/hero-celebration-diplome.jpg",
      caption: "Remise solennelle du diplôme devant les familles et professionnels"
    },
    {
      id: "scene-4",
      title: "La Promotion d'Atelier",
      subtitle: "Une communauté créative unie par le culte de l'excellence",
      image: "src/assets/images/hero-promotion-atelier.jpg",
      caption: "Des dizaines d'apprenantes formées aux métiers d'avenir de la mode"
    }
  ],

  formations: [
    {
      id: "couture-professionnelle",
      number: "01",
      title: "Couture Professionnelle",
      diploma: "Préparation DQP / AQP MINEFOP",
      category: "Coupe, Patronage & Confection",
      shortDesc: "Apprentissage complet des techniques de coupe à plat, patronage, assemblage machine et finitions de haute précision permettant d'acquérir une véritable autonomie professionnelle.",
      image: "src/assets/images/formation-couture-real.jpg",
      duration: "Cursus complet certifiant [Consulter l'institut pour les sessions]",
      public: "Débutants passionnés, créateurs autodidactes, professionnels en reconversion",
      competences: [
        "Prise de mesures morphologiques de haute précision",
        "Tracé de patrons de base et transformations de modèles complexes",
        "Coupe rationnelle des étoffes fluides, structurées et nobles",
        "Assemblage, thermocollage et surpiqûres de qualité tailleur",
        "Confection de robes de soirée, jupes sirènes et ensembles contemporains"
      ],
      modalites: "Formation 100% pratique en atelier équipé de machines industrielles et semi-industrielles.",
      prerequis: "Aucun prérequis technique nécessaire. Rigueur, créativité et motivation."
    },
    {
      id: "broderie-professionnelle",
      number: "02",
      title: "Broderie Professionnelle",
      diploma: "Spécialité Certifiante",
      category: "Art Textile, Perlage & Ornementation",
      shortDesc: "Formation pratique aux techniques de broderie manuelle et machine, conception de motifs ornementaux, pose de perles, canetille et fils dorés pour anoblir les tenues de cérémonie.",
      image: "src/assets/images/formation-broderie-real.jpg",
      duration: "Programme intensif pratique [Sessions modulables]",
      public: "Artisans couturiers, brodeurs en devenir, créateurs souhaitant valoriser leurs pièces",
      competences: [
        "Maîtrise des points traditionnels et modernes de broderie",
        "Ornementation aux perles de rocaille, sequins et cauris d'apparat",
        "Broderie au fil doré et canetille sur velours précieux et basin",
        "Création de motifs d'inspiration patrimoniale et contemporaine",
        "Finitions de haute joaillerie textile pour robes de prestige"
      ],
      modalites: "Pratique intensive sur tambours et métiers de broderie, fournitures de qualité.",
      prerequis: "Patience, minutie et intérêt affirmé pour le détail textile."
    },
    {
      id: "mode-stylisme",
      number: "03",
      title: "Stylisme Modélisme",
      diploma: "Spécialité Certifiante",
      category: "Conception, Figurines & Direction Artistique",
      shortDesc: "Développer la créativité, l'imaginaire stylistique, le croquis de mode, l'harmonie des matières et des volumes, tout en forgeant une signature esthétique personnelle forte.",
      image: "src/assets/images/formation-stylisme-real.jpg",
      duration: "Cursus complet créatif [Consulter l'institut pour les sessions]",
      public: "Futurs stylistes, créateurs de marques vestimentaires, passionnés de mode",
      competences: [
        "Dessin de figurines de mode et planches de collection expressives",
        "Harmonie des couleurs, moodboards de tendances et storytelling",
        "Modélisme et transposition du croquis en patron tridimensionnel",
        "Conception d'accessoires de mode assortis (coiffes, fascinateurs, pochettes)",
        "Création de collections capsules prêtes pour le défilé"
      ],
      modalites: "Ateliers de création, retours individualisés, prototypage sur mannequin.",
      prerequis: "Sensibilité artistique et goût du raffinement vestimentaire."
    },
    {
      id: "perfectionnement",
      number: "04",
      title: "Perfectionnement & Masterclass",
      diploma: "Module de Haute Spécialisation",
      category: "Excellence Sartoriale & Tenues d'Apparat",
      shortDesc: "Programmes avancés destinés aux personnes exerçant déjà la couture souhaitant élever leurs finitions, maîtriser les tenues traditionnelles royales et hisser leur atelier au standard haute couture.",
      image: "src/assets/images/formation-perfectionnement-real.jpg",
      duration: "Modules courts et intensifs [Sur mesure]",
      public: "Couturiers confirmés, chefs d'ateliers, maîtres artisans",
      competences: [
        "Confection de tenues royales et d'apparat en velours lourd",
        "Montage de vestes tailleur, cols officiels et doublures de soie",
        "Techniques d'incrustation et de broderie en relief haute couture",
        "Gestion technique des délais et standards d'un atelier sur-mesure",
        "Perfectionnement de l'aplomb et des retouches morphologiques"
      ],
      modalites: "Immersion avancée aux côtés du directeur technique sur pièces maîtresses.",
      prerequis: "Expérience pratique confirmée en coupe et couture machine."
    }
  ],

  creativeProcess: [
    { step: "01", name: "Idée & Inspiration", desc: "Étude des traditions textiles camerounaises et des silhouettes internationales." },
    { step: "02", name: "Croquis de Mode", desc: "Tracé graphique de la silhouette, recherche de proportions et d'harmonie." },
    { step: "03", name: "Choix des Matières", desc: "Velours de soie, dentelles brodées, basins de prestige, perles et cauris." },
    { step: "04", name: "Patronage & Coupe", desc: "Rigueur millimétrée du traçage à plat et coupe experte aux ciseaux tailleur." },
    { step: "05", name: "Couture & Montage", desc: "Assemblage précis sur machines industrielles, entoilage et bâti minutieux." },
    { step: "06", name: "Broderie d'Ornement", desc: "Point par point : pose des perles, paillettes, fils d'or et motifs royaux." },
    { step: "07", name: "Finitions d'Excellence", desc: "Ourlets invisibles, pose des doublures de luxe et repassage sous pression." },
    { step: "08", name: "Création Finale", desc: "La silhouette prend vie : prête pour les cérémonies, galas et défilés." }
  ],

  creations: [
    {
      id: "creation-1",
      title: "Parure Royale Ndop & Velours",
      category: "ceremonies",
      categoryLabel: "Cérémonies & Apparat",
      image: "src/assets/images/hero-royal-collection.jpg",
      year: "Collection Prestige",
      description: "Ensemble royal en velours bleu saphir rehaussé de motifs Ndop perlés, coiffe royale et bouclier de cauris 001."
    },
    {
      id: "creation-2",
      title: "Robe de Cérémonie Chieftain & Épouse",
      category: "ceremonies",
      categoryLabel: "Cérémonies & Apparat",
      image: "src/assets/images/creation-mariage-royal.jpg",
      year: "Haute Cérémonie",
      description: "Couple d'apparat en velours bordeaux impérial, broderies de cauris, pompons d'or et coiffe traditionnelle à plumes."
    },
    {
      id: "creation-3",
      title: "Robe Sirène Émeraude & Plastron Perlé",
      category: "haute-couture",
      categoryLabel: "Haute Couture",
      image: "src/assets/images/formation-stylisme-real.jpg",
      year: "Création Atelier",
      description: "Coupe sirène sculpturale en dentelle vert émeraude avec plastron perlé orange soleil et fascinateur assorti."
    },
    {
      id: "creation-4",
      title: "Tenue d'Apparat Velours Bordeaux aux Lions",
      category: "haute-couture",
      categoryLabel: "Haute Couture",
      image: "src/assets/images/formation-perfectionnement-real.jpg",
      year: "Sartorial Royal",
      description: "Tunique majestueuse en velours brodé de lions dorés, collier royal et canne sertie de perles et cauris."
    },
    {
      id: "creation-5",
      title: "Robe Bustier Bicolore & Traîne Wax",
      category: "apprenants",
      categoryLabel: "Créations des Apprenants",
      image: "src/assets/images/creation-rouge-wax.jpg",
      year: "Promotion Atelier",
      description: "Confection haute précision réalisée par les apprenantes combinant bustier rouge corail et motifs géométriques."
    },
    {
      id: "creation-6",
      title: "L'Ensemble des Diplômées CFP JAD",
      category: "apprenants",
      categoryLabel: "Créations des Apprenants",
      image: "src/assets/images/editorial-atelier-promotion.jpg",
      year: "Session de Sortie",
      description: "Collection collective de sortie mettant en valeur la maîtrise de la coupe sirène et des coiffes personnalisées."
    }
  ],

  certifications: {
    title: "AGRÉMENT MINEFOP & DIPLÔMES D'ÉTAT",
    subtitle: "Reconnaissance officielle de vos compétences professionnelles",
    description: "L'Institut de Formation Professionnelle Bilingue JAD COUTURE est officiellement agréé par le Ministère de l'Emploi et de la Formation Professionnelle du Cameroun (Arrêté N° 000789/MINEFOP). Nos apprenants préparent les examens nationaux sanctionnés par des diplômes reconnus sur le marché de l'emploi.",
    image: "src/assets/images/hero-celebration-diplome.jpg",
    studentCard: "src/assets/images/agrement-minefop-carte.jpg",
    items: [
      {
        title: "DQP — Diplôme de Qualification Professionnelle",
        desc: "Diplôme national délivré sous la tutelle du MINEFOP attestant d'une qualification de haut niveau dans les métiers de la mode."
      },
      {
        title: "AQP — Attestation de Qualification Professionnelle",
        desc: "Sanctionne la validation des modules pratiques et techniques pour une insertion rapide sur le marché du travail."
      },
      {
        title: "Arrêté Officiel N° 000789 / MINEFOP",
        desc: "Cadre légal garantissant la conformité pédagogique, la qualité des infrastructures et la valeur de la formation."
      },
      {
        title: "Cérémonie Solennelle & Présentation au Public",
        desc: "Chaque promotion expose ses réalisations devant un jury d'experts, les familles et les professionnels du secteur."
      }
    ]
  }
};
