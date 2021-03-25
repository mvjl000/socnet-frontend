import { useEffect, useState } from 'react';

export const useToggleSearchBar = (isMobile: boolean) => {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(window.innerWidth < 1025);

    const toggleResize = () => window.innerWidth < 1025 ? setIsSearchBarVisible(isMobile ? true : false) : setIsSearchBarVisible(isMobile ? false : true);

  useEffect(() => {
    window.addEventListener('resize', toggleResize);

    return () => window.removeEventListener('resize', toggleResize);
  }, []);
  
  return { isSearchBarVisible };
};