import React, { useState } from 'react';

const calculateOpacity = (scrollPos) => {
  if (!scrollPos) return 0;
  if (scrollPos > 200) return 1;
  return scrollPos / 200;
}

const useOpacityFromScroll = () => {
  const [scrollPos, setScroll] = useState(0);

  const handleScroll = (event) => {
    const scrollPos = event.target.scrollTop;
    setScroll(scrollPos);
  }

  return { opacity: calculateOpacity(scrollPos), handleScroll };
}

export default useOpacityFromScroll;