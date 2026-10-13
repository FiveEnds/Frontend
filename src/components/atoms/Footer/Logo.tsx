export const Logo = () => {
  return (
    <a
      href="/"
      className="col-start-1 col-end-2 md:col-start-1 md:col-end-3 cursor-pointer w-[89px] h-[32px] block"
    >
      <div className="relative w-full h-full">
        <img
          src="/img/Logo.svg"
          alt="Nice Gadgets"
          className="absolute inset-0 w-[89px] h-[32.25px] object-contain"
        />
        <img
          src="/img/Logo_hand.svg"
          alt="OK Hand"
          className="absolute top-0 right-[32px] w-[12.14px] h-[16.67px] object-contain"
        />
      </div>
    </a>
  );
};
