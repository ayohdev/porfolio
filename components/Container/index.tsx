type Props = {
  classes?: String;
  children: JSX.Element | JSX.Element[];
};

const Container = ({ classes, children }: Props) => (
  <div className={`container py-4 px-4 ${classes ? classes : ''}`}>
    {children}
  </div>
);

export default Container;
