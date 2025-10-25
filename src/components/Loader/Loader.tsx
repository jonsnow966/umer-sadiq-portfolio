// components/Loader.tsx
import { useEffect} from 'react';

interface LoaderProps {
  onFinish: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 2 seconds fake delay

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated SVG or Spinner */}
        <div className="relative w-16 h-16">
          {/* <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div> */}
          <img src='favicon.png' className='absolute inset-0 
          rounded-full animate-spin'></img>
        </div>

        <p className="text-md text-gray font-medium text-muted-foreground animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;