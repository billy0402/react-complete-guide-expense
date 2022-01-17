type CardProps = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className = '', children }: CardProps) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
