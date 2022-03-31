import classes from './Visualizer.module.scss';
import { useEffect, useRef } from 'react';
import { State } from '../Wrapper/types';
import drawVisualizer from './draw';
import usePrevious from '@hooks/usePrevious';

interface Props {
  wrapperState: State;
}

const Visualizer: React.FC<Props> = ({ wrapperState }) => {
  const audioPlayer = useRef<HTMLAudioElement>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const audioAnalyzerRef = useRef(null);
  const dataArrayRef = useRef(null);

  const animRef = useRef<any>();

  // -------------------------------------------------------------------------
  // Effect - Update slider while playing song each second
  // -------------------------------------------------------------------------

  const createArr = (val: number) => [...Array.apply(null, Array(256)).map((v) => val)];

  const whilePlaying = () => {
    audioAnalyzerRef.current.getByteFrequencyData(dataArrayRef.current);

    drawVisualizer(dataArrayRef.current, canvasRef.current);

    animRef.current = requestAnimationFrame(whilePlaying);

    if (audioPlayer.current.paused) {
      return setTimeout(() => cancelAnimationFrame(animRef.current), 600);
    }
  };

  useEffect(() => {
    audioPlayer.current = document.querySelector('#exalos-audio-player');

    let audioCtx = new AudioContext();
    // audioContextRef.current = audioCtx;

    const analyzer = audioCtx.createAnalyser();
    analyzer.fftSize = 512; // 128

    audioAnalyzerRef.current = analyzer;

    const source = audioCtx.createMediaElementSource(audioPlayer.current);

    source.connect(analyzer);
    source.connect(audioCtx.destination);

    let finalData = new Uint8Array(analyzer.frequencyBinCount);

    dataArrayRef.current = finalData;

    // Draw 1st time
    drawVisualizer(dataArrayRef.current, canvasRef.current);
  }, []);

  useEffect(() => {
    if (wrapperState.isPlaying || !audioPlayer.current.paused)
      animRef.current = requestAnimationFrame(whilePlaying);
  }, [wrapperState.isPlaying, audioPlayer?.current?.readyState]);

  return (
    <div className={classes.visualizer}>
      <canvas ref={canvasRef} className={classes.canvas} height="360" width="360"></canvas>
    </div>
  );
};

export default Visualizer;
