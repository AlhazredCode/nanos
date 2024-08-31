import React, { useRef, useEffect } from 'react';

interface AnimadivProps {
  children: React.ReactNode;
}

const Animadiv: React.FC<AnimadivProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('animadiv-animate');
    }
  }, []);

  return (
    <div ref={ref}>
      {children}
      <style jsx global>{`
        .animadiv-animate {
          animation: simpleFadeIn 3s ease; 
        }

        @keyframes simpleFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Animadiv;