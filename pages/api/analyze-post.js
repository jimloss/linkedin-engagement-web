export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const text = req.query.text || "";

  let strategicValueTier = "normal";
  let goldReason = "";

  if (
    text.toLowerCase().includes("hiring") &&
    text.toLowerCase().includes("operations")
  ) {
    strategicValueTier = "gold";
    goldReason = "Operations + hiring";
  }

  res.status(200).json({
    input: text,
    hiringSignal: text.toLowerCase().includes("hiring"),
    strategicValueTier,
    goldReason,
  });
}
