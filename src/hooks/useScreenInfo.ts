import { useEffect, useState } from 'react';

export const useScreenInfo = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [isDesktopMode, setIsDesktopMode] = useState(window.innerWidth > 1299);

  const changeNav = () => {
    window.scrollY > 100 ? setIsNavExpanded(false) : setIsNavExpanded(true);
  };

  const toggleMode = () => {
    window.innerWidth > 1299 ? setIsDesktopMode(true) : setIsDesktopMode(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', toggleMode);

    return () => window.removeEventListener('resize', toggleMode);
  }, []);

  return { isNavExpanded, isDesktopMode };
};
