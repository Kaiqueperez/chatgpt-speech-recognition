import { useState } from 'react'
import { chatgpt } from '../config'

export const useChatGpt = (userSpeechContent: string) => {
  const [chatGptResponse, setChatGptResponse] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleIsLoading = () => setIsLoading(prev => !prev)

  const fetchGptCompletions = async () => {

    handleIsLoading()

    const stream = await chatgpt.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userSpeechContent }],
      temperature: 0.8,
    })

    const gptResponse = stream.choices[0].message.content

    if (gptResponse) {
      setChatGptResponse([...chatGptResponse, gptResponse])
      handleIsLoading()
    }
  }

  return {
    fetchGptCompletions,
    chatGptResponse,
    isLoading
  }
}
