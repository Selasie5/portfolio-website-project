// components/CustomCursor.tsx
"use client"
import { useEffect } from 'react';
import styles from './styles/CustomCursor.module.css';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursorSmall = document.querySelector(`.${styles.small}`) as HTMLElement;
    const cursorBig = document.querySelector(`.${styles.big}`) as HTMLElement;

    const positionElement = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursorSmall.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    window.addEventListener('mousemove', positionElement);

    return () => {
      window.removeEventListener('mousemove', positionElement);
    };
  }, []);

  return (
    <>
      <div className={`sm:hidden md:block ${styles.small}`}></div>
      <div className={`sm:hidden md:block ${styles.big}`}></div>
    </>
  );
};

export default CustomCursor;
