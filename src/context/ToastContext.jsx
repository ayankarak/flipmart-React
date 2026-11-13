import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";

import ToastContainer from "../components/common/ToastContainer";

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext(null);

const MAX_TOASTS = 4;
const DEFAULT_DURATION = 3000;

/**
 * Provides toast notifications to the whole app.
 *
 *   const toast = useToast();
 *   toast.success("Added to cart", { action: { label: "View cart", to: "/cart" } });
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef(new Map());
  const counter = useRef(0);

  const dismiss = useCallback((id) => {
    clearTimeout(timers.current.get(id));
    timers.current.delete(id);
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const show = useCallback(
    (type, message, options = {}) => {
      const id = ++counter.current;
      const duration = options.duration ?? DEFAULT_DURATION;

      setToasts((prev) => {
        const next = [...prev, { id, type, message, action: options.action }];
        // Drop the oldest toasts when too many are on screen.
        return next.slice(-MAX_TOASTS);
      });

      if (duration > 0) {
        timers.current.set(
          id,
          setTimeout(() => dismiss(id), duration)
        );
      }
      return id;
    },
    [dismiss]
  );

  // Clear pending timers when the provider unmounts.
  useEffect(() => {
    const activeTimers = timers.current;
    return () => {
      activeTimers.forEach((timer) => clearTimeout(timer));
      activeTimers.clear();
    };
  }, []);

  const api = useMemo(
    () => ({
      success: (message, options) => show("success", message, options),
      error: (message, options) => show("error", message, options),
      info: (message, options) => show("info", message, options),
      dismiss,
    }),
    [show, dismiss]
  );

  return (
    <ToastContext.Provider value={api}>
      {children}
      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}
