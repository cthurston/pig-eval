import React, { useRef, useEffect } from 'react';

import useOnScreen from '../hooks/useOnScreen';

export default function LoadMore ({ loadMore }) {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '-30px');

  useEffect(() => {
    if (onScreen && loadMore) loadMore();
  }, [onScreen]);

  return <div ref={ref} style={{ width: '100%', height: 60 }} />;
}