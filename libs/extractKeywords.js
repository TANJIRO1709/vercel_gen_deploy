import nlp from "compromise";
const stopWords = new Set([
   "Post Office Savings Account (SB)",
    "Recurring Deposit (RD)",
    "Public Provident Fund (PPF)",
    "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    "Senior Citizen Savings Scheme (SCSS)",
    "PM-KISAN",
    "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "Soil Health Card (SHC)",
    "Mahila Samman Savings Certificate",
    "Students",
    "Main Workers",
    "Marginal Workers",
    "Retired",
    "Part-time work",
    "Income support",
    "Crop insurance",
    "Soil health improvement",
    "Financial security",
    "Empowerment",
    "Demographics",
    "Age Group <19",
    "Age Group 20-59",
    "Age Group 60+",
    "Post Office Savings Account (SB)",
    "Recurring Deposit (RD)",
    "Public Provident Fund (PPF)",
    "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
    "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    "Senior Citizen Savings Scheme (SCSS)",
    "PM-KISAN",
    "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    "Soil Health Card (SHC)",
    "Mahila Samman Savings Certificate",
    "Financial inclusion",
    "Rural population",
    "Targeted financial services",
    "Educational savings",
    "Life insurance coverage",
    "Health insurance coverage",
    "Agricultural workers",
    "Marginalized communities",
    "Economic upliftment",
    "Financial literacy",
    "Retirement planning",
    "Income generation",
    "Seasonal workers",
    "Agricultural cycles",
    "Self-help groups (SHGs)",
    "Women empowerment",
    "Small-scale entrepreneurs",
    "Urban population",
    "Digital financial services",
    "Government-backed schemes",
    "Economic security",
    "Tax-saving investments",
    "Age-specific schemes",
    "Demographic segmentation",
    "Occupation-based targeting",
    "Loan assistance",
    "Social welfare programs",
    "Employment generation",
    "Investment opportunities",
    "Asset creation",
    "Savings habit formation"
]);

function extractKeywords(sentence) {
  if (typeof sentence !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Assuming `nlp` is from a library like `compromise`
  const doc = nlp(sentence);
  const terms = doc.terms().out("array");
  const keywords = terms.filter((word) => !stopWords.has(word.toLowerCase()));
  
  return keywords;
}
