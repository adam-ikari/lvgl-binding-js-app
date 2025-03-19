import { useState, useEffect } from 'react';

const useTime = (interval = 1000) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return time;
};

export default useTime;