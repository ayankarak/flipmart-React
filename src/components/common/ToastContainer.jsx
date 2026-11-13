import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, CircleAlert, Info, X } from "lucide-react";

const styles = {
  success: { icon: CheckCircle2, accent: "text-green-600", bar: "bg-green-500" },
  error: { icon: CircleAlert, accent: "text-red-600", bar: "bg-red-500" },
  info: { icon: Info, accent: "text-blue-600", bar: "bg-blue-500" },
};

function ToastContainer({ toasts, onDismiss }) {
  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed bottom-4 left-1/2 z-[100] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 flex-col gap-2 sm:left-auto sm:right-4 sm:translate-x-0"
    >
      <AnimatePresence initial={false}>
        {toasts.map((toast) => {
          const { icon: Icon, accent, bar } = styles[toast.type] ?? styles.info;

          return (
            <motion.div
              key={toast.id}
              layout
              role={toast.type === "error" ? "alert" : "status"}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="pointer-events-auto relative flex items-start gap-3 overflow-hidden rounded-md bg-white py-3 pl-4 pr-2 shadow-lg ring-1 ring-black/5"
            >
              <span className={`absolute inset-y-0 left-0 w-1 ${bar}`} />

              <Icon size={20} className={`mt-0.5 shrink-0 ${accent}`} />

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-800">{toast.message}</p>

                {toast.action && (
                  <Link
                    to={toast.action.to}
                    onClick={() => onDismiss(toast.id)}
                    className="mt-1 inline-block text-xs font-semibold text-blue-600 hover:underline"
                  >
                    {toast.action.label}
                  </Link>
                )}
              </div>

              <button
                type="button"
                onClick={() => onDismiss(toast.id)}
                aria-label="Dismiss notification"
                className="rounded p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default ToastContainer;
