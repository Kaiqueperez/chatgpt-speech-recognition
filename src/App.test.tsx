// import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';

// jest.mock('./hooks/useSpeechRecogniton', () => ({
//   useSpeechRecogniton: () => ({
//     startRecording: jest.fn(),
//     stopRecording: jest.fn(),
//     recognitionResult: '',
//     isListening: false,
//     hasSpeechRecogniton: true,
//   }),
// }));

// const fnMocks = {
//   buttonStart: {
//     starRecord: jest.fn(),
//     text: 'button-start',
//   },
//   buttonStop: {
//     stopRecord: jest.fn(),
//     text: 'button-stop',
//   },
//   buttonGpt: {
//     gptResponse: jest.fn(),
//     text: 'button-gpt',
//   },
// };

// test('renders app with voice recording support', () => {
//   const { getByText, queryByText, baseElement } = render(<App />);

//   expect(queryByText('Seu navegador não suporta o recurso de gravação de voz')).toBeNull();

//   expect(getByText('Clique em START para começar a gravar')).toBeInTheDocument();

//   expect(screen.getByTestId(fnMocks.buttonStart.text)).toBeInTheDocument();

//   fireEvent.click(screen.getByTestId(fnMocks.buttonStart.text))

//   expect(fnMocks.buttonStart.starRecord).toBeCalledTimes(1);
// });

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
	const { getByText, queryByText, baseElement } = render(<App />)

	expect(queryByText('Seu navegador não suporta o recurso de gravação de voz')).toBeNull()

	expect(getByText('Clique em START para começar a gravar')).toBeInTheDocument()
})
