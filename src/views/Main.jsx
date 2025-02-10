import { useState, useEffect, useCallback } from 'react';
import Container1 from "../components/Container1";
import Container2 from "../components/Container2";
import Container3 from "../components/Container3";
import Container4 from "../components/Container4";
import CursorDot from "../components/CursorDot";

function Main() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = window.scrollY / totalHeight;
        setScrollProgress(progress);

        const sections = document.querySelectorAll('.scroll-section');
        const container1Height = window.innerHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition < container1Height * 0.5) {
          setActiveSection(0);
        } else {
          sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - container1Height;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              setActiveSection(index + 1);
            }
          });
        }
        setIsScrolling(false);
      });
    }
    setIsScrolling(true);
  }, [isScrolling]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll('.scroll-section');
    const container1Height = window.innerHeight;
    
    if (index === 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetSection = sections[index - 1];
      const targetPosition = targetSection.offsetTop - container1Height + container1Height;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const transformValue = `scale(${1 - scrollProgress * 1.6}) translateY(${scrollProgress * -200}%)`;
  const opacityValue = 1 - scrollProgress * 0.5;

  return (
    <div className="mainWrapper">
      <div className="scrollbarContainer fade-in-right">
        <div className="scrollBox">
          <div className={`scrollBoxBar ${isScrolling ? 'scrolling' : ''}`}></div>
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`scrollDot ${activeSection === index ? 'active' : ''} ${
                isScrolling ? 'scrolling' : ''
              }`}
              onClick={() => scrollToSection(index)}
              style={{
                transform: `scale(${activeSection === index ? 1.2 : 1})`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            ></div>
          ))}
          <div className={`scrollBoxBar ${isScrolling ? 'scrolling' : ''}`}></div>
        </div>
      </div>
      <CursorDot />
      <div
        className="fixed-container"
        style={{
          transform: transformValue,
          opacity: opacityValue,
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <Container1 />
      </div>
      <div className="scroll-container">
        <div className="scroll-section">
          <Container4 />
        </div>
        <div className="scroll-section">
          <Container3 />
        </div>
        <div className="scroll-section">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

export default Main;