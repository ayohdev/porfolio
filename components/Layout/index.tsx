type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => (
  <div className="h-full bg-black">{children}</div>
);

export default Layout;
