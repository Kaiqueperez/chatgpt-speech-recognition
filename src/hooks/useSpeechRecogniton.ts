import { useEffect, useState } from 'react';

export const useSpeechRecogniton = () => {
  const [recognitionResult, setRecognitionResult] = useState('');
  const [isListening, setIsListening] = useState(false);

  const hasSpeechRecogniton = 'webkitSpeechRecognition' in window;
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = 'pt-BR';

  console.log(recognitionResult, 'useSpeech');

  const startRecording = () => {
    setIsListening(true);
    recognition.start();
  };
  const stopRecording = () => {
    setIsListening(false);
    recognition.stop();
  };

  useEffect(() => {
    if (!hasSpeechRecogniton) return;
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      setRecognitionResult(event.results[0][0].transcript);
    };
  }, [startRecording]);

  return {
    startRecording,
    stopRecording,
    recognitionResult,
    isListening,
    hasSpeechRecogniton
  };
};
