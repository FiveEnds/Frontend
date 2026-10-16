import { Link } from 'react-router-dom';

export const HeadLogo = () => {
  return (
    <Link
      to="/"
      className="cursor-pointer w-[64px] h-[22px] lg:w-[80px] lg:h-[28px] block shrink-0"
    >
      <img
        src="/img/Logo.svg"
        alt="Nice Gadgets"
        className="w-full h-full object-contain dark:hidden"
      />
      <img
        src="/img/Logo-dark.svg"
        alt="Nice Gadgets"
        className="w-full h-full object-contain hidden dark:block"
      />
    </Link>
  );
};
