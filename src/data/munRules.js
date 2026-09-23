export const munRules = [
  {
    id: "gsl",
    title: "General Speaker's List (GSL)",
    description: "The default state of the committee where delegates give broad speeches about their country's stance on the agenda.",
    details: [
      { subtitle: "Function", content: "Used to establish country positions and broad policy goals. If no motions pass, the committee defaults back to the GSL." },
      { subtitle: "Time Limit", content: "Usually set to 60 or 90 seconds. A motion is required to change the speaking time." },
      { subtitle: "Yields", content: "If a delegate finishes before their time is up, they must yield the remaining time. Standard yields are: to the Chair (time is absorbed), to another delegate (they speak immediately), or to questions (the floor asks the speaker questions for the remaining time)." }
    ]
  },
  {
    id: "mod-caucus",
    title: "Moderated Caucus",
    description: "A temporary suspension of the GSL to discuss a specific sub-topic related to the agenda.",
    details: [
      { subtitle: "How to Motion", content: "Requires specifying: Total time, speaking time, and the specific topic. (e.g., 'Motion for a 10-minute Moderated Caucus, 60 seconds speaking time, to discuss border security.')" },
      { subtitle: "Speaking", content: "Delegates raise their placards to be called upon by the Chair. No yields are permitted during a Moderated Caucus." }
    ]
  },
  {
    id: "unmod-caucus",
    title: "Unmoderated Caucus",
    description: "Informal debate where delegates can leave their seats, mingle, and draft resolutions or working papers.",
    details: [
      { subtitle: "How to Motion", content: "Requires specifying only the total time. (e.g., 'Motion for a 15-minute Unmoderated Caucus.')" },
      { subtitle: "Function", content: "This is when the actual writing of resolutions occurs and blocs (alliances) are formed. Highly recommended before submitting a draft resolution." }
    ]
  },
  {
    id: "points",
    title: "Points of Procedure",
    description: "Rules used by delegates to ask questions or address issues during the committee session.",
    details: [
      { subtitle: "Point of Personal Privilege", content: "Used for personal discomfort (e.g., 'Can the speaker be louder?', 'Can we turn down the AC?'). May interrupt a speaker." },
      { subtitle: "Point of Parliamentary Inquiry", content: "A question directed to the Chair regarding the rules of procedure (e.g., 'What are we voting on right now?'). Cannot interrupt a speaker." },
      { subtitle: "Point of Order", content: "Used to point out a procedural error made by the Chair or committee. Cannot interrupt a speaker (in UNA-USA)." },
      { subtitle: "Point of Information", content: "A question directed to a speaker who has yielded their time to questions." }
    ]
  }
];
