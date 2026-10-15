import type React from 'react';
import classNames from 'classnames';
import type { HeadingLevel } from '../../../types/HeadingLevel';

type TypographyProps = {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  textColor?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  level = 'body',
  children,
  className,
  textColor = 'text-primary',
}) => {
  switch (level) {
    case 'h1':
      return (
        <h1
          className={classNames(
            'font-bold font-mont tracking-[-0.01em]',
            'text-8 leading-[41px] md:text-12 md:leading-14',
            className,
            textColor,
          )}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={classNames(
            'font-bold font-mont tracking-normal md:tracking-[-0.01em]',
            'text-[22px] leading-[31px] md:text-8 md:leading-[41px]',
            className,
            textColor,
          )}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={classNames(
            'font-semibold font-mont tracking-normal md:font-bold',
            'text-5 leading-[26px] md:text-[22px] md:leading-[31px] flex justify-between',
            className,
            textColor,
          )}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={classNames(
            'font-semibold font-mont tracking-normal',
            'text-4 leading-5 md:text-5 md:leading-[26px]',
            className,
            textColor,
          )}
        >
          {children}
        </h4>
      );
    case 'uppercase':
      return (
        <span
          className={classNames(
            'font-bold font-mont uppercase tracking-[0.04em] text-3 leading-[11px]',
            className,
            textColor,
          )}
        >
          {children}
        </span>
      );
    case 'button':
      return (
        <span
          className={classNames(
            'font-semibold font-mont text-[14px] leading-[21px] tracking-normal',
            className,
            textColor,
          )}
        >
          {children}
        </span>
      );
    case 'small':
      return (
        <span
          className={classNames(
            'font-semibold font-mont text-3 leading-[15px] tracking-normal',
            className,
            textColor,
          )}
        >
          {children}
        </span>
      );
    case 'body':
    default:
      return (
        <p
          className={classNames(
            'font-normal font-mont text-[14px] leading-[21px] tracking-normal',
            className,
            textColor,
          )}
        >
          {children}
        </p>
      );
  }
};
