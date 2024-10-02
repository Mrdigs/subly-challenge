import styles from "./button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: React.CSSProperties["color"]
  variant?: "normal" | "secondary" | "outline"
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  color = "var(--brand-color)",
  variant = "normal",
  children,
  className,
  ...buttonProps
}) => {
  const classes = [styles["button"], styles[`button-${variant}`], className]
  return (
    <button
      className={classes.join(" ")}
      style={{ "--button-color": color } as React.CSSProperties}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

export default Button
