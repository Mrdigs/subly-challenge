import styles from "./badge.module.css"

interface BadgeProps {
  icon: React.ComponentType<{ size?: string | number | undefined }>
  color?: React.CSSProperties["color"]
  label: string
}

const Badge: React.FC<BadgeProps> = ({
  icon: Icon,
  label,
  color = "var(--brand-color)",
}) => {
  return (
    <div>
      <div className={styles["badge"]} style={{ backgroundColor: color }}>
        <div className={styles["badge-icon"]}>
          <Icon size="1.3em" />
        </div>
        <div className={styles["badge-label"]}>{label}</div>
      </div>
    </div>
  )
}

export default Badge
