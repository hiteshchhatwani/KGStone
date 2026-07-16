export const siteConfig = {
  name: "KG Stone Hospital",
  shortName: "KG Stone",
  tagline: "Advanced Kidney Stone Care, Closer to Home",
  description:
    "KG Stone Hospital is Ajmer's dedicated kidney stone treatment centre, offering laser stone surgery, PCNL, URS, RIRS and ESWL under one roof with a 98% success rate and same-day discharge for most procedures.",
  url: "https://www.kgstonehospital.in",
  founded: 2011,
  yearsOfExperience: 15,
  logoInitials: "KG",
};

export const contactInfo = {
  phone: "+91 98765 43210",
  phoneDisplay: "+91-98765-43210",
  phoneHref: "tel:+919876543210",
  emergencyPhone: "+91 98765 43211",
  emergencyPhoneHref: "tel:+919876543211",
  whatsapp: "+91 98765 43210",
  whatsappHref: "https://wa.me/919876543210",
  whatsappMessage:
    "Hello KG Stone Hospital, I would like to enquire about kidney stone treatment.",
  email: "care@kgstonehospital.in",
  appointmentEmail: "appointments@kgstonehospital.in",
  address: {
    line1: "204, Jaipur Road, Vaishali Nagar",
    line2: "Ajmer, Rajasthan 305004",
    full: "204, Jaipur Road, Vaishali Nagar, Ajmer, Rajasthan 305004, India",
    mapsQuery: "Jaipur+Road+Vaishali+Nagar+Ajmer+Rajasthan+305004",
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Jaipur+Road,+Vaishali+Nagar,+Ajmer,+Rajasthan+305004&output=embed",
    lat: 26.4691,
    lng: 74.6392,
  },
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 8:00 PM" },
    { days: "Sunday", time: "10:00 AM – 2:00 PM" },
  ],
  emergencyNote: "Emergency stone pain & urology emergencies attended 24×7",
  social: {
    facebook: "https://facebook.com/kgstonehospital",
    instagram: "https://instagram.com/kgstonehospital",
    youtube: "https://youtube.com/@kgstonehospital",
    twitter: "https://twitter.com/kgstonehospital",
  },
} as const;

export const legalNote =
  "Business details such as phone number, address, medical registration numbers and photographs on this site are placeholders for a demo build. Replace them with KG Stone Hospital's verified details, the treating doctor's real medical council registration number, and licensed photography before this site is taken live.";
