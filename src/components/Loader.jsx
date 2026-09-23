import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const start = Date.now();
        const duration = 1800;
        let frame;

        const tick = () => {
            const elapsed = Date.now() - start;
            const pct = Math.min(100, Math.round((elapsed / duration) * 100));
            setProgress(pct);
            if (pct < 100) {
                frame = requestAnimationFrame(tick);
            } else {
                setTimeout(() => setDone(true), 300);
            }
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        document.body.style.overflow = done ? "" : "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [done]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-darkBrown"
                >
                    <style>{`
            @keyframes blink-cursor {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
            .loader-cursor { animation: blink-cursor 0.9s step-end infinite; }
          `}</style>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-4xl sm:text-5xl font-bold font-special"
                    >
                        <span className="text-cyan">{"<"}</span>
                        <span className="text-orange">HJ</span>
                        <span className="text-cyan">{"/>"}</span>
                        <span className="loader-cursor text-orange">_</span>
                    </motion.div>

                    <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.3em] text-lightGrey">
                        Building the experience
                    </p>

                    <div className="mt-8 w-[220px] sm:w-[280px] h-[3px] rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-orange to-cyan"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <p className="mt-3 text-xs font-special text-lightGrey/70">{progress}%</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;