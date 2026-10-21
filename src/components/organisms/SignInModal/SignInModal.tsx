import { Form } from 'radix-ui';
import { Typography } from '../../atoms/Typography/Typography';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { supabase } from '../../../services/supabase';
import classNames from 'classnames';
import { ButtonIcon } from '../../atoms/Buttons/ButtonIcon';
import { ICONS } from '../../../constants/icons';

const variant = {
  default:
    'border border-icons focus:border-primary transition-all duration-200 inline-flex h-11 w-full appearance-none items-center justify-center   px-2.5 text-[14px] leading-none text-primary outline-none selection:bg-blackA6 selection:text-primary',
};

type Props = {
  onCloseModal: () => void;
  isOpen: boolean;
};

export const SignInModal: React.FC<Props> = ({ onCloseModal, isOpen }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email') ?? '').trim();
    const password = String(formData.get('password') ?? '');

    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true);

    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          setErrorMessage(error.message);
          return;
        }

        if (data.session) {
          onCloseModal();
        } else {
          setSuccessMessage('Check your email to confirm your account.');
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          setErrorMessage('Invalid email or password.');
          return;
        }

        onCloseModal();
      }
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={classNames(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-all duration-200 ease-in-out',
        {
          'scale-100 opacity-100': isOpen,
          'opacity-0 pointer-events-none': !isOpen,
        },
      )}
      onClick={onCloseModal}
    >
      <Form.Root
        className={classNames(
          'w-5/6 scale-0 opacity-0 sm:w-100 bg-white p-6 md:p-8 fixed z-100 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out',
          { 'scale-100 opacity-100': isOpen },
        )}
        onClick={(event) => event.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <ButtonIcon
          className="border-0 absolute top-6 right-6 md:top-8 md:right-8
          hover:scale-120 transition-all duration-200 ease-in-out"
          src={ICONS.CLOSE}
          handleClick={onCloseModal}
        />
        <Typography
          level="h3"
          className="mb-4 w-full text-primary"
        >
          {mode === 'signin' ? 'Sign in' : 'Create account'}
        </Typography>
        {errorMessage && (
          <Typography
            level="body"
            className="text-red"
          >
            {errorMessage}
          </Typography>
        )}

        {successMessage && (
          <Typography
            level="body"
            className="text-primary"
          >
            {successMessage}
          </Typography>
        )}
        <Form.Field
          className="mb-2.5 grid"
          name="email"
        >
          <div className="flex items-baseline justify-between">
            <Form.Label>
              <Typography
                className="dark:text-primary"
                level="body"
              >
                Email address
              </Typography>
            </Form.Label>
            <Form.Message
              className="opacity-90"
              match="valueMissing"
            >
              <Typography
                level="body"
                className="text-red"
              >
                Please enter your email
              </Typography>
            </Form.Message>
            <Form.Message
              className="opacity-90"
              match="typeMismatch"
            >
              <Typography
                level="body"
                className="text-red"
              >
                Please provide a valid email
              </Typography>
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              name="email"
              className={variant.default}
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field
          className="mb-2.5 grid"
          name="password"
        >
          <div className="flex items-baseline justify-between">
            <Form.Label>
              <Typography
                className="dark:text-primary"
                level="body"
              >
                Password
              </Typography>
            </Form.Label>
            <Form.Message
              className="opacity-90"
              match="valueMissing"
            >
              <Typography
                level="body"
                className="text-red"
              >
                Please enter your password
              </Typography>
            </Form.Message>
            <Form.Message
              match="tooShort"
              className="opacity-90"
            >
              <Typography
                level="body"
                className="text-red"
              >
                At least 6 characters
              </Typography>
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={variant.default}
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              minLength={6}
              maxLength={12}
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full transition-all duration-300 ease-in-out font-semibold font-mont text-[14px] leading-[21px] tracking-normal p-2 mt-4 bg-primary dark:bg-accent-dark border-primary text-white hover:shadow-[0_3px_13px_0_rgba(23,32,49,0.4)] dark:hover:bg-accent-hover-dark disabled:opacity-50"
          >
            {isSubmitting ?
              'Please wait...'
            : mode === 'signin' ?
              'Sign in'
            : 'Create account'}
          </button>
        </Form.Submit>
        <button
          type="button"
          className="mt-4 w-full text-sm text-primary underline"
          onClick={() => {
            setMode((current) => (current === 'signin' ? 'signup' : 'signin'));
            setErrorMessage('');
            setSuccessMessage('');
          }}
        >
          {mode === 'signin' ?
            "Don't have an account? Sign up"
          : 'Already have an account? Sign in'}
        </button>
      </Form.Root>
    </div>
  );
};
