
'use client';
import React, { useRef, useEffect, useState } from 'react';

interface AnimadivProps {
  children: React.ReactNode;
  variant?: 'fadeIn' | 'slideInTop' | 'slideInBottom' | 'slideInLeft' | 'slideInRight';
  duration?: number;
  delay?: number; // Nueva prop para el retraso
}

let animadivIndex = 0; // Índice global para cada instancia de Animadiv

const Animadiv: React.FC<AnimadivProps> = ({ children, variant = 'fadeIn', duration = 3, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [index] = useState(() => animadivIndex++); // Índice único para esta instancia

  useEffect(() => {
    if (ref.current) {
      setTimeout(() => { // Retrasar la animación
        ref.current?.classList.add('animadiv-animate', `animadiv-${variant}`);
      }, delay * 1000 * index); // Calcular el retraso según el índice
    }
  }, [variant, delay, index]);

  return (
    <div ref={ref}>
      {children}
      <style jsx global>{`
        .animadiv-animate {
          animation-duration: ${duration}s;
          animation-timing-function: ease;
          opacity: 0;
          animation-fill-mode: forwards;
        }

          .animadiv-fadeIn {
          animation-name: simpleFadeIn;
        }

        .animadiv-slideInTop {
          animation-name: slideInFromTop;
        }

        .animadiv-slideInBottom {
          animation-name: slideInFromBottom;
        }

        .animadiv-slideInLeft {
          animation-name: slideInFromLeft;
        }

        .animadiv-slideInRight {
          animation-name: slideInFromRight;
        }

         @keyframes simpleFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slideInFromTop {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Animadiv;