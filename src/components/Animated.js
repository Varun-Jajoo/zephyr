import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Landing from './Landing';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { Main } from './Main';
import LocationProvider from './LocationProvider';

export default function Animated() {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: '100%',
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0.4,
      x: '-100%',
      transition: {
        ease : "easeInOut",
        duration: 0.2,
      },
    },
  };
  const pageTransition = {
    duration: 0.5,
    ease: 'easeInOut', // Add easeInOut easing function
  };
  return (
    <LocationProvider>
      <AnimatePresence exitBeforeEnter={false} mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Routes location={location}>
            <Route path="" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </LocationProvider>
  );
}
