import styles from "./progress-bar.module.css"

const SIZES = {
  small: "6px",
  medium: "14px",
  large: "28px",
}

interface ProgressBarProps {
  color?: React.CSSProperties["color"]
  size?: "small" | "medium" | "large"
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  size = "medium",
  color = "var(--brand-color)",
}) => {
  return (
    <div
      className={styles["progress-bar"]}
      style={{ backgroundColor: color, height: SIZES[size] }}
    ></div>
  )
}

export default ProgressBar
