import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Button({ label, className }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.button
      className={`relative overflow-hidden ${className} rounded-lg`}
      onHoverStart={() => setIsHover(true)}
      onTouchStart={() => setIsHover(true)}
      onTouchEnd={() => setIsHover(false)}
      onHoverEnd={() => setIsHover(false)}
      type="button"
    >
      <motion.div
        animate={{ scaleX: isHover ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute left-0 top-0 bottom-0 w-full bg-white origin-left z-0"
        style={{ pointerEvents: "none" }}
      />
      <span
        className={`relative z-10 transition-colors duration-300 text-sm ${
          isHover ? "text-primary" : "text-light"
        }`}
      >
        {label}
      </span>
    </motion.button>
  );
}
