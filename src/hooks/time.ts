import dayjs from "dayjs";
import { useEffect, useState } from "react";

interface UseTimeProps {
  format?: string;
  interval?: number;
}

const useTime = (props: UseTimeProps) => {
  const { format, interval = 1000 } = props;

  const getTime = format ? () => dayjs().format(format) : () => dayjs();

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
