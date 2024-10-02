import styles from "./button.module.css"

interface ButtonAttributes
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

interface ButtonProps extends Omit<ButtonAttributes, "className"> {
  color?: React.CSSProperties["color"]
  variant?: "normal" | "secondary" | "outline"
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  color = "var(--brand-color)",
  variant = "normal",
  children,
  ...buttonProps
}) => {
  const className = [styles["button"], styles[`button-${variant}`]].join(" ")
  return (
    <button
      className={className}
      style={{ "--button-color": color } as React.CSSProperties}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button
