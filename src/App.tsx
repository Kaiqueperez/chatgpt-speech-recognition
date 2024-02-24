import './App.css'
import ButtonFields from './components/ButtonFields'
import { useChatGpt } from './hooks/useChatGpt'
import { useSpeechRecogniton } from './hooks/useSpeechRecogniton'

function App() {
  const { startRecording, stopRecording, recognitionResult, isListening, hasSpeechRecogniton } = useSpeechRecogniton()
  const { chatGptResponse, fetchGptCompletions, isLoading } = useChatGpt(recognitionResult)

  return !hasSpeechRecogniton ? (
    <span>Seu navegadro não suporta o recurso de gravação de voz </span>
  ) : (
    <div className="App">
      <section className="App-header">
        <textarea cols={50} rows={20} name="gpt-input" id="gpt-input" onChange={() => undefined} value={recognitionResult} />
        <ButtonFields startRecording={startRecording} stopRecording={stopRecording} fetchGptCompletions={fetchGptCompletions} />
        <span>{isListening ? 'Gravação iniciada' : 'Clique em START para começar a gravar'}</span>

        <div className="gpt-messages-wrapper">
          {chatGptResponse.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
          <p>{isLoading ? 'Loading response...' : ''}</p>
        </div>
      </section>
    </div>
  )
}

export default App
