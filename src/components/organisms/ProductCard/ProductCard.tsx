import { Typography } from '../../atoms/Typography/Typography';

type Product = {
  images: string[];
  namespaceId: string;
  name: string;
  priceRegular: number;
  priceDiscount?: number;
  screen: string;
  capacity: string;
  ram: string;
  [key: string]: unknown;
};

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => (
  <div className="p-8">
    <img
      src={product.images[0]}
      alt={product.namespaceId}
    />
    <Typography>{product.name}</Typography>
    {product.priceDiscount ?
      <div className="pb-2 border-b border-elements">
        <Typography level="h3">{product.priceDiscount}</Typography>
        <Typography level="h3">{product.priceRegular}</Typography>
      </div>
    : <Typography
        level="h3"
        className="pb-2 border-b border-elements"
      >
        {product.priceRegular}
      </Typography>
    }
  </div>
);
