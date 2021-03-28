import { useCallback, useEffect, useState } from 'react';

export const useToggleSearchBar = (isMobile: boolean) => {
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(isMobile);

    const toggleResize = useCallback(() => window.innerWidth < 1024 ? setIsSearchBarVisible(isMobile ? true : false) : setIsSearchBarVisible(isMobile ? false : true), [isMobile]);

  useEffect(() => {
    toggleResize();
  }, [toggleResize]);

  useEffect(() => {
    window.addEventListener('resize', toggleResize);

    return () => window.removeEventListener('resize', toggleResize);
  }, [toggleResize]);
  
  return { isSearchBarVisible };
};