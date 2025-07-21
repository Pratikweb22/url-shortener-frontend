import React from "react";

import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = ({ title, desc, faLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-md rounded-md p-4 text-sm "
    >
      {faLink}
      <h2 className="text-lg font-bold text-gray-900 mb-2">
        {title}
      </h2>
      <p className="text-xs text-gray-700 leading-relaxed break-words">
        {desc}
      </p>
    </motion.div>
  );
};

export default Card;

