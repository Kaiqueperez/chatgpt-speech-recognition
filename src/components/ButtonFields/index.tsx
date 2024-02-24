import { Button } from '../Button'
import './styles.css'

type ButtonFieldsProps = {
  startRecording: () => void
  stopRecording: () => void
  fetchGptCompletions: () => Promise<void>
}

const ButtonFields = ({ fetchGptCompletions, startRecording, stopRecording }: ButtonFieldsProps) => {
  return (
    <div className="button-wrapper">
      <Button data-testid="button-start" onClick={startRecording} text="Start" buttonstyle="start" />
      <Button data-testid="button-stop" onClick={stopRecording} text="Stop" buttonstyle="stop" />
      <Button data-testid="button-gpt" onClick={() => fetchGptCompletions()} text="Send" buttonstyle="gpt" />
    </div>
  )
}

export default ButtonFields
