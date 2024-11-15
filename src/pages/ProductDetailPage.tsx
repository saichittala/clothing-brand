import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductDetail from '../components/ProductDetail';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-600">Product not found</p>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}