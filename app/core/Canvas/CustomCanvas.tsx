import { Canvas } from '@react-three/fiber';
import CameraControls1 from '../OrbitControls/CameraControls1';

interface Props {
  axesHelper?: boolean;
  controls?: boolean;
}

const CustomCanvas: React.FC<Props> = ({ children, axesHelper = false, controls = true }) => {
  return (
    <Canvas>
      {controls && <CameraControls1 />}

      {axesHelper && <axesHelper args={[10]} />}

      {children}
    </Canvas>
  );
};

export default CustomCanvas;
