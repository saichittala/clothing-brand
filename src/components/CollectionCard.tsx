import { motion } from 'framer-motion';
import { Collection } from '../types';
import { ArrowRight } from 'lucide-react';

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative group cursor-pointer"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-light tracking-wide mb-2">{collection.name}</h3>
        <p className="text-sm font-light mb-4 opacity-90">{collection.description}</p>
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 10 }}
          className="inline-flex items-center gap-2 text-sm"
        >
          Discover Collection <ArrowRight className="h-4 w-4" />
        </motion.div>
      </div>
    </motion.div>
  );
}