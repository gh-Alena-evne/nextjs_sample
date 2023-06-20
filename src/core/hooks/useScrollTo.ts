import { useContext } from 'react';
import { ScrollContext } from '../providers/scrollContext';

export const useScrollTo = (): {
  scrollTop: (to: number) => void;
  scrollToBottom: () => void;
} => {
  const { scrollTop, scrollToBottom } = useContext(ScrollContext);

  return { scrollTop, scrollToBottom };
};
