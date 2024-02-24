import { render } from '@testing-library/react'
import App from './App'
jest.mock('./hooks/useSpeechRecogniton', () => ({
  useSpeechRecogniton: () => ({
    startRecording: jest.fn(),
    stopRecording: jest.fn(),
    recognitionResult: '',
    isListening: false,
    hasSpeechRecogniton: true,
  }),
}))

test('renders app with voice recording support', () => {
  const { getByText, queryByText } = render(<App />)

  expect(queryByText('Seu navegador não suporta o recurso de gravação de voz')).toBeNull()

  expect(getByText('Clique em START para começar a gravar')).toBeInTheDocument()
})
