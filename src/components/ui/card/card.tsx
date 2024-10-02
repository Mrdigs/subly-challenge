import styles from "./card.module.css"

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

interface CardProps {
  reverseColumnLayout?: boolean
}

const CardTitle: React.FC<React.PropsWithChildren<CardContentProps>> = ({
  children,
  className,
  ...divProps
}) => {
  const classes = [styles["card-title"], className || ""]
  return (
    <div className={classes.join(" ")} {...divProps}>
      {children}
    </div>
  )
}

const CardBody: React.FC<React.PropsWithChildren<CardContentProps>> = ({
  children,
  className,
  ...divProps
}) => {
  const classes = [styles["card-body"], className || ""]
  return (
    <div className={classes.join(" ")} {...divProps}>
      {children}
    </div>
  )
}

const Card: React.FC<React.PropsWithChildren<CardProps>> & {
  Title: typeof CardTitle
  Body: typeof CardBody
} = ({ reverseColumnLayout = false, children }) => {
  const classes: string[] = [styles["card"]]
  if (reverseColumnLayout) classes.push(styles["card-reverse-layout"])
  return <div className={classes.join(" ")}>{children}</div>
}

Card.Title = CardTitle
Card.Body = CardBody

export default Card
