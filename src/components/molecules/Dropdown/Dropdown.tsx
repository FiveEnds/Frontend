import { useEffect, useRef, useState } from 'react';
import { Typography } from '../../atoms/Typography/Typography';
import { Icon } from '../../atoms/Icon/Icon';
import { ICONS } from '../../../constants/icons';

type Props = {
  label?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const triggerClassName =
  'flex h-10 w-full items-center justify-between border border-elements bg-white px-3 text-left text-primary hover:border-secondary focus-visible:border-primary focus-visible:outline-none';

const menuClassName =
  'absolute top-full z-10 mt-0.5 w-full border border-elements bg-white py-1 shadow-sm';

const optionClassName =
  'group flex h-8 w-full items-center px-3 text-left hover:bg-hover-bg focus-visible:bg-hover-bg focus-visible:outline-none';

export const Dropdown: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className="relative w-full font-mont"
    >
      {label && (
        <Typography
          level="small"
          className="mb-1 block"
          textColor="text-secondary"
        >
          {label}
        </Typography>
      )}

      <button
        aria-label={label ?? 'Dropdown'}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={triggerClassName}
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <Typography level="button">{value || 'Select an option'}</Typography>
        <Icon
          src={isOpen ? ICONS.ARROW.UP : ICONS.ARROW.DOWN}
          className="size-4"
          isDisabled
        />
      </button>

      {isOpen && (
        <div
          className={menuClassName}
          role="listbox"
        >
          {options.map((option) => (
            <button
              aria-selected={value === option}
              className={optionClassName}
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              role="option"
              type="button"
            >
              <Typography
                level="body"
                textColor="text-secondary group-hover:text-primary group-focus-visible:text-primary"
              >
                {option}
              </Typography>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
