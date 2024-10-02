import styles from "./card.module.css"

interface DivAttributes extends React.HTMLAttributes<HTMLDivElement> {}

interface CardContentProps extends Omit<DivAttributes, "className"> {}

interface CardProps {
  reverseColumnLayout?: boolean
}

const CardTitle: React.FC<React.PropsWithChildren<CardContentProps>> = ({
  children,
  ...divProps
}) => {
  return (
    <div className={styles["card-title"]} {...divProps}>
      {children}
    </div>
  )
}

const CardBody: React.FC<React.PropsWithChildren<CardContentProps>> = ({
  children,
  ...divProps
}) => {
  return (
    <div className={styles["card-body"]} {...divProps}>
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
