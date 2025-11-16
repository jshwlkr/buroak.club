const now = new Date();
const timeZone = "UTC";
const buildTime = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone,
}).format(now);

export default {
    title: "BurOak.Club",
    description: "A webring for Ann Arbor, Ypsilanti, and other parts near or far.",
    url: "https://buroak.club",
    timestamp: {
        raw: now.toISOString(),
        formatted: `${buildTime} ${timeZone}`,
    },
    env: process.env.ELEVENTY_RUN_MODE,
};