export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { text } = req.query;

  const lowerText = text.toLowerCase();

  let hiringSignal = lowerText.includes("hiring");

  let strategicValueTier = "normal";
  let goldReason = "";

  if (
    (lowerText.includes("operations") && lowerText.includes("hiring")) ||
    (lowerText.includes("franchise") && lowerText.includes("hiring")) ||
    (lowerText.includes("home services") && lowerText.includes("hiring"))
  ) {
    strategicValueTier = "gold";
    goldReason = "Keyword + hiring match";
  }

  res.status(200).json({
    input: text,
    hiringSignal,
    strategicValueTier,
    goldReason,
  });
}