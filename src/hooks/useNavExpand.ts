import { useEffect, useState } from 'react';

export const useNavExpand = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const changeNav = () => {
    window.scrollY > 100 ? setIsNavExpanded(false) : setIsNavExpanded(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);

    return () => window.removeEventListener('scroll', changeNav);
  }, []);

  return { isNavExpanded };
};
