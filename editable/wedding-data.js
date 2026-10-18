/**
 * wedding-data.js — Customer-facing editable data layer for wax-seal-royale
 * Sarfaraz & Zaara — Nikah & Valima Ceremony
 */

window.WEDDING_DATA = {
  couple: {
    groom: "SARFARAZ",
    groomParents: "Mr. & Mrs. Mohammed Siraj A. Sattar Boghani",
    bride: "ZAARA",
    brideParents: "Mr. & Mrs. Haji Mohammed Arif Ahmed Kaladiya",
    subtitle: "Two Souls One destiny A Lifetime written by Allah",
  },

  bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  quranVerse: "“AND WE CREATED YOU IN PAIRS”",
  quranSurah: "— SURAH AN-NABA, 78:8 —",
  familyHeader: "TOGETHER WITH THEIR FAMILIES",

  wedding: {
    dateLabel: "26.12.26 · 04.01.27",
    dateISO: "2026-12-26T18:00:00+11:00", // Nikah Ceremony start (Sydney time)
    ceremonyTitle: "NIKAH & VALIMA CEREMONY",
    invitationNote: "As they begin their beautiful journey together,<br />your gracious presence and duas<br />will make their special occasion even more blessed.",
  },

  schedule: [
    {
      date: "26 DEC 2026",
      time: "6:00 PM",
      title: "Nikah Ceremony",
      location: "Sydney, NSW, Australia",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sydney+NSW+Australia"
    },
    {
      date: "04 JAN 2027",
      time: "7:00 PM",
      title: "Valima Reception",
      location: "Padela Function Hall, Parbhani, Maharashtra, India",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Padela+Function+Hall+Parbhani+Maharashtra+India"
    }
  ],

  venue: {
    nikah: {
      name: "Nikah Ceremony",
      date: "Saturday, 26th December 2026",
      time: "6:00 PM",
      city: "Sydney",
      address: "Sydney, NSW, Australia",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sydney+NSW+Australia",
      calUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sarfaraz%20%26%20Zaara%20%E2%80%94%20Nikah%20Ceremony&dates=20261226T070000Z/20261226T120000Z&details=Nikah%20Ceremony%20of%20Sarfaraz%20%26%20Zaara%20in%20Sydney%2C%20NSW%2C%20Australia.&location=Sydney%2C%20NSW%2C%20Australia"
    },
    valima: {
      name: "Valima Reception",
      date: "Monday, 4th January 2027",
      time: "7:00 PM",
      hall: "Padela Function Hall",
      address: "Padela Function Hall, Parbhani, Maharashtra, India",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Padela+Function+Hall+Parbhani+Maharashtra+India",
      calUrl: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Sarfaraz%20%26%20Zaara%20%E2%80%94%20Valima%20Reception&dates=20270104T133000Z/20270104T183000Z&details=Valima%20Reception%20of%20Sarfaraz%20%26%20Zaara%20at%20Padela%20Function%20Hall%2C%20Parbhani%2C%20Maharashtra%2C%20India.&location=Padela%20Function%20Hall%2C%20Parbhani%2C%20Maharashtra%2C%20India"
    },
    // Backwards compatibility fallbacks:
    name: "Sydney (Australia) & Parbhani (India)",
    address: "Nikah: Sydney, Australia · Valima: Parbhani, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Padela+Function+Hall+Parbhani+Maharashtra+India"
  },

  details: {
    dua: "May Allah bless their union with<br />love, mercy, happiness, and barakah.",
    family: "The Boghani & Kaladiya Families",
    giftPreference: "Your presence is our most precious gift.",
  },

  media: {
    overlayImage: "./editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png",
    sealVideo: "./editable/assets/1782224012851.mp4",
    heroVideo: "./editable/assets/Swans2.mov",
    audio: "./editable/assets/Einaudi_ Divenire (1) (1).mp3",
  },
};
