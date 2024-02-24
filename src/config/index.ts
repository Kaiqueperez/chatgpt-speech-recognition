import OpenAI from 'openai'

export const chatgpt = new OpenAI({
  apiKey: process.env.REACT_APP_API_KEY,
  dangerouslyAllowBrowser: true,
})
