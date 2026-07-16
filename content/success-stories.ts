export type SuccessStory = {
  slug: string;
  name: string;
  age: number;
  city: string;
  treatment: string;
  stoneSize: string;
  title: string;
  summary: string;
  story: string[];
};

export const successStories: SuccessStory[] = [
  {
    slug: "mahesh-staghorn-pcnl",
    name: "Mahesh Chandra Vyas",
    age: 54,
    city: "Ajmer",
    treatment: "PCNL",
    stoneSize: "2.8 cm staghorn stone",
    title: "Clearing a staghorn stone in a single PCNL session",
    summary:
      "A 2.8 cm staghorn stone that had gone undiagnosed for years, cleared in one PCNL procedure with a two-night stay.",
    story: [
      "Mahesh had lived with dull, recurring back pain for nearly three years, treating it as ordinary muscle strain. A routine ultrasound during an unrelated check-up revealed a large staghorn stone filling much of his left kidney's collecting system.",
      "At consultation, Dr. Sharma reviewed his CT scan and recommended PCNL as the most efficient way to clear a stone of this size and shape in a single sitting, rather than multiple rounds of laser treatment.",
      "The procedure took just under two hours. Mahesh was monitored for two nights and discharged with clear instructions on drinking fluids and a follow-up scan schedule. Six weeks later, imaging confirmed complete stone clearance.",
      "\"I'd been living with that pain for years thinking it was normal,\" Mahesh says. \"I didn't expect to be back to my daily walk within two weeks of a stone that size.\"",
    ],
  },
  {
    slug: "sunita-rirs-awkward-calyx",
    name: "Sunita Rathore",
    age: 41,
    city: "Beawar",
    treatment: "RIRS",
    stoneSize: "1.6 cm lower-pole kidney stone",
    title: "Avoiding open surgery with flexible-scope RIRS",
    summary:
      "A stone lodged in a hard-to-reach lower kidney calyx was cleared without any incision using RIRS after two other consultations recommended open surgery.",
    story: [
      "Sunita's stone sat in the lower pole of her kidney — a position that's notoriously difficult to access and clear efficiently, and two prior consultations elsewhere had suggested open surgery as the only reliable option.",
      "At KG Stone Hospital, Dr. Sharma proposed RIRS using a flexible ureteroscope, explaining that the scope's ability to bend into the lower pole made it a realistic non-surgical option despite the stone's position.",
      "The procedure was completed in just over an hour with no external incision. A temporary stent supported healing for twelve days, after which Sunita returned for a simple outpatient removal.",
      "\"I was ready for a big surgery and a long recovery,\" she says. \"Instead I was home the same evening and back to my routine within a week.\"",
    ],
  },
  {
    slug: "om-prakash-elderly-pcnl",
    name: "Om Prakash Soni",
    age: 68,
    city: "Nasirabad",
    treatment: "PCNL",
    stoneSize: "2.2 cm kidney stone",
    title: "Safe stone surgery at 68, with close monitoring",
    summary:
      "A senior patient with controlled diabetes underwent PCNL with careful pre-operative planning and close post-operative monitoring, with a full, uneventful recovery.",
    story: [
      "At 68 and managing controlled type-2 diabetes, Om Prakash was understandably anxious about undergoing any surgical procedure. His 2.2 cm kidney stone was large enough that ESWL alone was unlikely to clear it fully.",
      "The team ran a full pre-operative work-up, coordinated blood sugar management around the procedure date, and talked him and his family through what to expect at each stage.",
      "PCNL cleared the stone completely in one session. He remained under observation for two nights with regular monitoring, and was discharged with a clear medication and follow-up plan.",
      "\"They didn't rush me into anything,\" he says. \"Every question I had was answered before I even had to ask it twice.\"",
    ],
  },
  {
    slug: "priyanka-conservative-rirs",
    name: "Priyanka Kumawat",
    age: 33,
    city: "Ajmer",
    treatment: "RIRS",
    stoneSize: "1.1 cm kidney stone",
    title: "The right-sized procedure, not the biggest one",
    summary:
      "A patient initially told she needed PCNL for a 1.1 cm stone received a second opinion recommending RIRS instead — a less invasive procedure with equally strong clearance outcomes for that stone size.",
    story: [
      "Priyanka came to KG Stone Hospital for a second opinion after being told elsewhere that her 1.1 cm kidney stone would require PCNL. Reviewing her imaging, Dr. Sharma explained that a stone of that size and position was well within the range where RIRS achieves comparable clearance with a smaller footprint.",
      "RIRS was performed on an outpatient basis. She went home the same evening with a temporary stent, which was removed after ten days in a short clinic visit.",
      "Follow-up imaging four weeks later confirmed the kidney was completely stone-free.",
      "\"I appreciated that they explained why a smaller procedure would work just as well, instead of defaulting to the bigger one,\" Priyanka says.",
    ],
  },
];

export function getSuccessStoryBySlug(slug: string) {
  return successStories.find((s) => s.slug === slug);
}
