import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface UseTimeProps {
  format?: string;
  interval?: number;
}

const useTime = (props?: UseTimeProps) => {
  const { format, interval = 1000 } = props;
  let getTime;

  if (format) {
    getTime = () => dayjs().format(format);
  } else {
    getTime = () => dayjs();
  }

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return time;
};

export default useTime;
