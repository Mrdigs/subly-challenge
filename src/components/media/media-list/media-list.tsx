import styles from "./media-list.module.css"

const MediaList: React.FC<
  React.PropsWithChildren<React.HTMLAttributes<HTMLUListElement>>
> = ({ children, className, ...uListProps }) => {
  const classes = [styles["media-list"], className || ""]
  return (
    <ul className={classes.join(" ")} {...uListProps}>
      {children}
    </ul>
  )
}

export default MediaList
