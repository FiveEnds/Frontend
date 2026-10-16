import { CartItem } from '../components/molecules/CartItem';
import { Typography } from '../components/atoms/Typography/Typography';
import { Checkout } from '../components/molecules/Checkout/Checkout';
import { useAppState, useAppActions } from '../store/store';
import { ButtonBack } from '../components/atoms/Buttons/ButtonBack';

export const CartPage: React.FC = () => {
  const localCart = useAppState((state) => state.cart);

  console.log('Current cart:', localCart);
  const { addItemToCart, removeItemFromCart, decreaseAmountFromCart } =
    useAppActions();

  const cartTotal = Object.values(localCart).reduce((total, item) => {
    const currentItemPrice =
      item.product.priceDiscount || item.product.priceRegular;

    const priceOfMany = currentItemPrice * item.amountAdded;

    return priceOfMany + total;
  }, 0);

  const cartCount = Object.values(localCart).reduce(
    (count, item) => item.amountAdded + count,
    0,
  );

  return (
    <>
      <main
        className="
      grid grid-cols-1 gap-x-4 w-full mx-auto

      min-[1200px]:grid-cols-[repeat(24,32px)]
      min-[1200px]:w-fit

      min-[640px]:max-[1200px]:grid-cols-[repeat(12,minmax(0,1fr))]
      min-[640px]:max-[1200px]:px-6
      min-[640px]:max-[1200px]:gap-x-4

      min-[320px]:max-[640px]:grid-cols-[repeat(4,minmax(0,1fr))]
      min-[320px]:max-[640px]:px-4
      min-[320px]:max-[640px]:gap-x-4
      "
      >
        <section className="col-span-full grid grid-cols-subgrid">
          <span className="col-span-1 flex items-center w-max mt-10 mb-4 min-[320px]:max-[640px]:my-6">
            <ButtonBack />
          </span>

          <Typography
            level="h1"
            className="col-span-full mb-8"
          >
            Card
          </Typography>
          {Object.values(localCart).length === 0 ?
            <div
              className="
              w-full flex justify-center items-center relative
              min-[1200px]:col-span-24
              min-[1200px]:mb-20

              min-[640px]:max-[1200px]:col-span-12
              min-[640px]:max-[1200px]:mb-16

              min-[320px]:max-[640px]:col-span-4
              min-[320px]:max-[640px]:mb-14
              "
            >
              <div>
                <Typography
                  level="h2"
                  className="text-center"
                >
                  Oops! <br /> You haven't add anything to your cart yet.
                </Typography>
                <img
                  src="/img/easter-egg.png"
                  className="
                    absolute rotate-12
                    min-[1200px]:w-20
                    min-[1200px]:top-0
                    min-[1200px]:right-36

                    min-[640px]:max-[1200px]:w-10
                    min-[640px]:max-[1200px]:bottom-8
                    min-[640px]:max-[1200px]:left-32
                    md:rotate-12

                    min-[640px]:max-[717px]:-bottom-5

                    min-[503px]:max-[640px]:bottom-7

                    min-[320px]:max-[640px]:w-10
                    min-[320px]:max-[640px]:bottom-15
                    min-[320px]:max-[640px]:right-16"
                />
              </div>
            </div>
          : <>
              <div
                className="
              w-full flex flex-col gap-4
              min-[1200px]:col-span-16
              min-[1200px]:mb-20

              min-[640px]:max-[1200px]:col-span-12

              min-[320px]:max-[640px]:col-span-4
            "
              >
                {Object.values(localCart).map((item) => (
                  <CartItem
                    key={item.product.id}
                    image={item.product.images[0]}
                    title={item.product.name}
                    price={
                      (item.product.priceDiscount ||
                        item.product.priceRegular) * item.amountAdded
                    }
                    quantity={item.amountAdded}
                    productPath={`/${item.product.category}/${item.product.id}`}
                    onRemove={() => removeItemFromCart(item.product.id)}
                    onQuantityChange={(newQuantity) => {
                      if (newQuantity > item.amountAdded) {
                        addItemToCart(item.product);
                      } else if (newQuantity < item.amountAdded) {
                        decreaseAmountFromCart(item.product.id);
                      }
                    }}
                  />
                ))}
              </div>

              <div
                className="
          min-[1200px]:col-span-8
          min-[1200px]:mb-20
          
          min-[640px]:max-[1200px]:col-span-12
          min-[640px]:max-[1200px]:mt-8
          min-[640px]:max-[1200px]:mb-16

          min-[320px]:max-[640px]:col-span-4
          min-[320px]:max-[640px]:mt-8
          min-[320px]:max-[640px]:mb-14
          "
              >
                <Checkout
                  sum={cartTotal}
                  amount={cartCount}
                />
              </div>
            </>
          }
        </section>
      </main>
    </>
  );
};
