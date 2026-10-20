import { Form } from 'radix-ui';
import { Typography } from '../../atoms/Typography/Typography';

const variant = {
  default:
    'border border-icons focus:border-primary transition-all duration-200 inline-flex h-11 w-full appearance-none items-center justify-center   px-2.5 text-[14px] leading-none text-primary outline-none selection:bg-blackA6 selection:text-primary',
};

export const SignInModal: React.FC = () => (
  <Form.Root className="w-100 bg-red-200 p-8 absolute z-51">
    <Typography
      level="h3"
      className="text-primary mb-4 w-full"
    >
      Sign in
    </Typography>
    <Form.Field
      className="mb-2.5 grid"
      name="email"
    >
      <div className="flex items-baseline justify-between">
        <Form.Label>
          <Typography level="body">Email address</Typography>
        </Form.Label>
        <Form.Message
          className="opacity-80"
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
          <Typography level="body">Password</Typography>
        </Form.Label>
        <Form.Message
          className="text-[13px] text-primary opacity-80"
          match="valueMissing"
        >
          Please enter a password
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input
          className={variant.default}
          type="password"
          placeholder="Enter your password"
          required
        />
      </Form.Control>
    </Form.Field>
    <Form.Submit asChild>
      <button className="w-full transition-all duration-300 ease-in-out font-semibold font-mont text-[14px] leading-[21px] tracking-normal p-2 mt-4 bg-primary dark:bg-accent-dark border-primary text-white hover:shadow-[0_3px_13px_0_rgba(23,32,49,0.4)] dark:hover:bg-accent-hover-dark">
        Sign in
      </button>
    </Form.Submit>
  </Form.Root>
);
