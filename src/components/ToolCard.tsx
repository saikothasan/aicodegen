import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Tool3D } from './3d/Tool3D';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
}

function ToolCard({ title, description, icon }: ToolCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-white/10 p-6 backdrop-blur-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      
      <div className="relative z-10 h-full">
        <div className="h-48">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Tool3D />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        
        <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
        
        <button className="mt-4 rounded-lg bg-white/10 px-4 py-2 text-white transition-colors hover:bg-white/20">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}

export default ToolCard;