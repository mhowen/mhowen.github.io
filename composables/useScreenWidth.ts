import { useBreakpoints } from '@vueuse/core';
import { useMediaQuery } from '@vueuse/core';

type WidthQuery = number | string;

export default function (query: WidthQuery = '') {
  // if we got a number, return true for min-width greater than that many pixels
  if (typeof query === 'number') {
    return useMediaQuery(`(min-width: ${query}px`)
  }

  // otherwise, base decision on custom breakpoints
  const breakpoints = useBreakpoints({
    min: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  });

  switch (query) {
    case ('' || 'min'):
      return breakpoints.greaterOrEqual('min');
    case 'sm':
      return breakpoints.greaterOrEqual('sm');
    case 'md':
      return breakpoints.greaterOrEqual('md');
    case 'lg':
      return breakpoints.greaterOrEqual('lg');
    case 'xl':
      return breakpoints.greaterOrEqual('xl');
  }
}
