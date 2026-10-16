export const FooterLogo = () => {
  return (
    <a
      href="/"
      className="cursor-pointer block shrink-0 "
    >
      <img
        src="/img/Logo.svg"
        alt="Nice Gadgets"
        className="w-22.25 h-8 object-contain dark:hidden"
      />
      <img
        src="/img/Logo-dark.svg"
        alt="Nice Gadgets"
        className="w-22.25 h-8 object-contain hidden dark:block"
      />
    </a>
  );
};
