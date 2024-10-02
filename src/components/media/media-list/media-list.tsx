import styles from "./media-list.module.css"

interface ListAttributes extends React.HTMLAttributes<HTMLUListElement> {}

interface MediaListProps extends Omit<ListAttributes, "className"> {}

const MediaList: React.FC<React.PropsWithChildren<MediaListProps>> = ({
  children,
  ...uListProps
}) => {
  return (
    <ul className={styles["media-list"]} {...uListProps}>
      {children}
    </ul>
  )
}

export default MediaList
