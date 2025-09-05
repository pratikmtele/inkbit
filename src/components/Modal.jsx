"use client"

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "@/store/useModalStore";
import { IoCloseOutline } from "react-icons/io5";

export default function Modal({children}) {
  const {isOpen, openModal, closeModal} = useModalStore();

  const stopPropagation = (e) => { 
    e.stopPropagation();
  };

  return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-black/20 h-screen fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white dark:bg-black w-2/6 max-w-md p-5 rounded-lg drop-shadow-md text-center relative"
              onClick={stopPropagation}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              <motion.button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
               <IoCloseOutline className="text-xl"/>
              </motion.button>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  );
}