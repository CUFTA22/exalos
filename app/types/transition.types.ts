export interface NProgressProps {
  trickleSpeed: number;
}

export interface NProgressOutput {
  start: () => void;
  done: () => void;
}

export interface ProgressBarProps {
  color?: string;
  startPosition?: number;
  stopDelayMs?: number;
  height?: number;
  showOnShallow?: boolean;
  options?: object;
}
