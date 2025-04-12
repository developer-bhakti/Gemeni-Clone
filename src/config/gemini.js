import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyDQbUpwKuWnZgTyLeQxSWuPghWepZ1-W9Q",
});

const runChat = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text;
};

export default runChat;
