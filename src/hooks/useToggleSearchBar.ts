import { useEffect, useState } from 'react';

export const useToggleSearchBar = (isMobile: boolean) => {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(isMobile);

    const toggleResize = () => window.innerWidth < 1024 ? setIsSearchBarVisible(isMobile ? true : false) : setIsSearchBarVisible(isMobile ? false : true);

  useEffect(() => {
    toggleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', toggleResize);

    return () => window.removeEventListener('resize', toggleResize);
  }, []);
  
  return { isSearchBarVisible };
};