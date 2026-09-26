/*
  NUR DIESE DATEI BEARBEITEN, WENN DU PROJEKTE ÄNDERN WILLST.
  Du kannst sie direkt auf GitHub im Browser bearbeiten (Stift-Symbol -> Edit -> Commit).

  FELDER PRO PROJEKT
  -------------------
  slug          eindeutiger Teil für die URL, z.B. "sunexpress-737-800"
                -> nur Kleinbuchstaben, Zahlen und Bindestriche, KEINE Leerzeichen
  title         Name des Projekts
  description   Kurzbeschreibung (erscheint auf der Karte, 1-2 Sätze)
  longDescription  Ausführliche Beschreibung (erscheint auf der Projektseite).
                    Optional - wenn leer, wird "description" verwendet.
  category      z.B. "Livery", "Scenery", "Tool", "Software"
  icon          Ein Emoji als Icon, z.B. "🎨"
  image         URL zu einem großen Titelbild (optional).
                Leer lassen ("") für einen automatischen Farbverlauf mit Icon.
  gallery       Liste von Bild-URLs für die Galerie auf der Projektseite (optional, [] wenn keine).
  version       Versionsnummer als Text, z.B. "1.2.0" (optional, "" wenn keine).
  updated       Datum der letzten Aktualisierung im Format "YYYY-MM-DD" (optional).
  featured      true/false - true = wird oben als "Featured Project" gezeigt.
                Nur EIN Projekt sollte featured: true haben.
  link          Externe Projektseite/Repo (optional, "" wenn keine).
  download      Direkter Download-Link, z.B. zu einer .zip-Datei (optional, "" wenn keiner).

  Mindestens "link" ODER "download" sollte ausgefüllt sein, sonst gibt es
  auf der Projektseite keinen Aktions-Button.
*/

const siteInfo = {
  discordUsername: "j4l5anxexexexe",
  // Optional: echter Einladungslink, z.B. "https://discord.gg/abc123".
  // Leer lassen, wenn Besucher stattdessen den Namen kopieren sollen.
  discordInvite: ""
};

const projects = [
  {
    slug: "sunexpress-737-800",
    title: "SunExpress 737-800",
    description: "Custom SunExpress Livery für die Boeing 737-800 in Aerofly FS 4.",
    longDescription: "Handgefertigte SunExpress-Lackierung für die Boeing 737-800. Enthält hochauflösende Texturen, korrekte Registrierung und Feinschliff an Details wie Triebwerken und Fahrwerk.",
    category: "Livery",
    icon: "🎨",
    image: "",
    gallery: [],
    version: "1.2.0",
    updated: "2026-09-18",
    featured: true,
    link: "https://example.com",
    download: "https://example.com/downloads/sunexpress-737-800.zip"
  },
  {
    slug: "antalya-airport",
    title: "Antalya Airport",
    description: "Eigenes Antalya-Flughafen- und Umgebungs-Projekt.",
    longDescription: "Detailliertes Antalya-Airport-Scenery-Projekt mit angepasstem Terminal-Layout, Vorfeldmarkierungen und umliegender Landschaft für ein realistischeres Anflugerlebnis.",
    category: "Scenery",
    icon: "🗺️",
    image: "",
    gallery: [],
    version: "0.9.0",
    updated: "2026-08-30",
    featured: false,
    link: "https://example.com",
    download: ""
  },
  {
    slug: "virtual-first-officer",
    title: "Virtual First Officer",
    description: "Virtueller FO für Checklisten und Cockpit-Interaktion.",
    longDescription: "Konzept für einen virtuellen First Officer, der Checklisten vorliest, auf Cockpit-Interaktionen reagiert und den Workflow im Cockpit unterstützt.",
    category: "Tool",
    icon: "👨‍✈️",
    image: "",
    gallery: [],
    version: "0.4.0-beta",
    updated: "2026-07-12",
    featured: false,
    link: "https://example.com",
    download: ""
  },
  {
    slug: "aerotrack",
    title: "AeroTrack",
    description: "Flugverfolgung und Flugbuch-Software für Aerofly FS 4.",
    longDescription: "AeroTrack zeichnet deine Flüge auf, führt ein digitales Flugbuch und zeigt Statistiken wie Flugzeit, Strecken und häufig genutzte Flugzeuge.",
    category: "Software",
    icon: "📊",
    image: "",
    gallery: [],
    version: "2.0.1",
    updated: "2026-09-05",
    featured: false,
    link: "https://example.com",
    download: "https://example.com/downloads/aerotrack.zip"
  },
  {
    slug: "aerofly-utilities",
    title: "Aerofly Utilities",
    description: "Kleine Tools und Experimente rund um Aerofly FS 4.",
    longDescription: "Eine Sammlung kleinerer Hilfsprogramme und Experimente, die das Arbeiten mit Aerofly FS 4 erleichtern - von Datei-Konvertern bis zu kleinen Skripten.",
    category: "Tools",
    icon: "⚙️",
    image: "",
    gallery: [],
    version: "1.0.0",
    updated: "2026-06-21",
    featured: false,
    link: "https://example.com",
    download: ""
  }
];
