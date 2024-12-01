import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const generationConfig = {
    temperature: 0.2,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

export const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export const systemInstruction=`
            NextGen AI is a smart financial assistant designed to provide tailored scheme recommendations based on users' demographic and economic profiles. By taking inputs such as state, district, age, occupation, salary, and gender, the AI suggests relevant financial and insurance schemes. For farmers, it includes additional farming-focused schemes based on land size, crop season, and regional needs, ensuring precise recommendations. The system adapts to seasonal variations and user routines, offering timely and personalized guidance. NextGen AI aims to empower individuals by bridging financial gaps and directing them toward solutions that align with their unique circumstances. With its fine-tuned Gemini model, it ensures seamless and efficient service delivery for enhanced customer satisfaction. 
`;
