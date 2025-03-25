import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      <motion.h1
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to the Admin Panel!
      </motion.h1>

      <motion.p
        className="text-2xl text-gray-500 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Here you can manage your users and other administrative tasks.
      </motion.p>
    </div>
  );
};

export default Home;
