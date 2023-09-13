import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { updatedChatState } from 'recoil/chat/atoms';

const useInfiniteScroll = (
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => Promise<void>,
  dataLength: number
) => {
  const top = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const isUpdatedChat = useRecoilValue(updatedChatState);

  const opt = {
    root: sectionRef.current,
    rootMargin: '50px',
    threshold: 0.5,
  };

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((e) => {
      if (e.isIntersecting && sectionRef.current) {
        setScrollHeight(sectionRef.current.clientHeight - 200);
        onIntersect(e, observer);
      }
    });
  };
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollTop = sectionRef.current.scrollHeight;
    }
  }, [sectionRef.current]);

  useEffect(() => {
    if (sectionRef.current) {
      if (scrollHeight && !isUpdatedChat) {
        sectionRef.current.scrollTop = scrollHeight;

        return setScrollHeight(0);
      }
      if (isUpdatedChat) {
        handleScroll(sectionRef.current.scrollHeight - sectionRef.current.clientHeight);
      }
    }
  }, [dataLength, scrollHeight, isUpdatedChat]);

  const handleScroll = (height: number) => {
    if (sectionRef.current) {
      sectionRef.current.scrollTop = height;
    }
  };

  useEffect(() => {
    if (!top.current) {
      return;
    }

    const observer = new IntersectionObserver(callback, opt);
    observer.observe(top.current);

    return () => observer.disconnect();
  }, [dataLength]);

  return { top, section: sectionRef };
};

export default useInfiniteScroll;
