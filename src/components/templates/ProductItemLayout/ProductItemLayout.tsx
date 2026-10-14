type Props = {
  header: React.ReactNode;
  pageProductDetails: React.ReactNode;
  productGallery: React.ReactNode;
};

export const ProductItemLayout: React.FC<Props> = ({
  header,
  pageProductDetails,
  productGallery,
}) => (
  <>
    {header}
    <div className="px-4 md:px-6 lg:px-8 max-w-[1200px] w-full m-auto grid">
      <div className="mb-8 md:mb-10">{pageProductDetails}</div>
      {productGallery}
    </div>
  </>
);
