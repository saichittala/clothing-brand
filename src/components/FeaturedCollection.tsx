import { motion } from 'framer-motion';
import { Collection } from '../types';
import CollectionCard from './CollectionCard';

interface FeaturedCollectionProps {
  collections: Collection[];
}

export default function FeaturedCollection({ collections }: FeaturedCollectionProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-light tracking-wide text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}