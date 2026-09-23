export const debateFormats = [
  {
    id: "bp",
    title: "British Parliamentary (BP)",
    description: "The official format of the World Universities Debating Championship (WUDC). Known for its complexity and deep analytical requirements.",
    details: [
      { subtitle: "Teams", content: "Four teams of two speakers. Two teams on the Government side (Opening & Closing) and two on the Opposition side (Opening & Closing)." },
      { subtitle: "Speaking Time", content: "7 minutes per speaker." },
      { subtitle: "Points of Information (POIs)", content: "Allowed between the 1st and 6th minute of each speech. Speakers may stand and briefly interject a point or question." },
      { subtitle: "Key Features", content: "Requires 'extensions' from the closing teams—bringing new, non-derivative material to the debate while remaining consistent with their opening half." }
    ]
  },
  {
    id: "ap",
    title: "Asian Parliamentary (AP)",
    description: "A fast-paced 3v3 format widely popular across Asia, balancing solid argumentation with dynamic engagement.",
    details: [
      { subtitle: "Teams", content: "Two teams of three speakers: Government (Prime Minister, Deputy, Whip) and Opposition (Leader of Opposition, Deputy, Whip)." },
      { subtitle: "Speaking Time", content: "7 minutes for substantive speeches, 4 minutes for reply speeches." },
      { subtitle: "Reply Speeches", content: "Given by either the 1st or 2nd speaker of each team, summarizing the debate from a biased perspective. Opposition gives their reply first." },
      { subtitle: "Points of Information (POIs)", content: "Allowed during substantive speeches between the 1st and 6th minutes. Not allowed during reply speeches." }
    ]
  },
  {
    id: "wsdc",
    title: "World Schools Debating Championship (WSDC)",
    description: "The global standard for high school debating, combining rigorous logic with persuasive rhetorical style.",
    details: [
      { subtitle: "Teams", content: "Two teams of three speakers: Proposition and Opposition." },
      { subtitle: "Speaking Time", content: "8 minutes for substantive speeches, 4 minutes for reply speeches." },
      { subtitle: "Reply Speeches", content: "Given by the 1st or 2nd speaker. Opposition reply goes first, followed by Proposition reply." },
      { subtitle: "Points of Information (POIs)", content: "Allowed between the 1st and 7th minute of the 8-minute substantive speeches." }
    ]
  }
];
