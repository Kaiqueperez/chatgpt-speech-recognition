import { fireEvent, render, screen } from '@testing-library/react'
import ButtonFields from '.'

const fnMocks = {
  buttonStart: {
    startRecord: jest.fn(),
    text: 'button-start',
  },
  buttonStop: {
    stopRecord: jest.fn(),
    text: 'button-stop',
  },
  buttonGpt: {
    gptResponse: jest.fn(),
    text: 'button-gpt',
  },
}

test('renders button component', () => {
  const { baseElement } = render(
    <ButtonFields startRecording={fnMocks.buttonStart.startRecord} stopRecording={fnMocks.buttonStop.stopRecord} fetchGptCompletions={fnMocks.buttonGpt.gptResponse} />
  )

  expect(baseElement).toBeInTheDocument()

  fireEvent.click(screen.getByTestId('button-start'))

  expect(fnMocks.buttonStart.startRecord).toBeCalledTimes(1)

  fireEvent.click(screen.getByTestId('button-stop'))

  expect(fnMocks.buttonStop.stopRecord).toBeCalledTimes(1)

  fireEvent.click(screen.getByTestId('button-gpt'))

  expect(fnMocks.buttonGpt.gptResponse).toBeCalledTimes(1)
})
