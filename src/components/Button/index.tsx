interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (arg: React.SyntheticEvent) => void;
  disabled?: boolean;
}

export const Button = ({
  children,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
