import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Simulates network latency so loading skeletons can be shown.
 * Returns [isLoading, reload].
 */
export function useFakeLoading(duration = 600) {
  const [isLoading, setIsLoading] = useState(true);
  const timer = useRef(null);

  const start = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setIsLoading(false), duration);
  }, [duration]);

  useEffect(() => {
    start();
    return () => clearTimeout(timer.current);
  }, [start]);

  const reload = useCallback(() => {
    setIsLoading(true);
    start();
  }, [start]);

  return [isLoading, reload];
}
