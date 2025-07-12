const axios = require("axios");

async function ask(question) {
  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    },
    {
      headers: {
        Authorization: `Bearer YOUR_API_KEY`,
      },
    }
  );

  console.log("Bot:", res.data.choices[0].message.content.trim());
}

ask("What's a fun fact about space?"); 
