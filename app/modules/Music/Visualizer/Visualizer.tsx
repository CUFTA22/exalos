import { useEffect, useRef } from 'react';

interface Props {
  audioElement: HTMLAudioElement;
}

const Visualizer: React.FC<Props> = ({ audioElement }) => {
  const audioContextRef = useRef<AudioContext>();

  useEffect(() => {
    audioContextRef.current = new window.AudioContext();

    const analyzer = audioContextRef.current.createAnalyser();
    const source = audioContextRef.current.createMediaElementSource(audioElement);

    source.connect(analyzer);
    source.connect(audioContextRef.current.destination);

    analyzer.fftSize = 64;
    const bufferLength = analyzer.frequencyBinCount;
  }, []);

  return <div></div>;
};

export default Visualizer;
