type Props = {
  children: string;
};

const Button = ({ children }: Props) => (
  <a
    href="https://yohdev.com/get-started/book-appointment/"
    className="button text-white font-bold p-2  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
  >
    {children}
  </a>
);

export default Button;
