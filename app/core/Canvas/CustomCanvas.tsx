import { Canvas } from '@react-three/fiber';
import CameraControls1 from '../OrbitControls/CameraControls1';

const CustomCanvas: React.FC = ({ children }) => {
  return (
    <Canvas>
      <CameraControls1 />

      {children}
    </Canvas>
  );
};

export default CustomCanvas;
