import { LanguagesIcon, CircleAlertIcon } from "lucide-react"
import Medium from "../../../types/medium"
import Button from "../../ui/button/button"
import ProgressBar from "../../ui/progress-bar/progress-bar"
import Badge from "../../ui/badge/badge"
import styles from "./medium-panel.module.css"

interface MediumPanelProps {
  positionAbsolute?: boolean
  medium: Medium
}

const MediumPanel: React.FC<MediumPanelProps> = ({
  medium,
  positionAbsolute = false,
}) => {
  const classes = [
    styles["medium-panel"],
    styles[`medium-panel-${medium.status}`],
  ]
  if (positionAbsolute) {
    classes.push(styles["medium-panel-absolute"])
  }

  if (medium.status === "ready") {
    const languages = medium.languages.length
    const languageLabel = languages > 1 ? "languages" : "language"
    return (
      <div className={classes.join(" ")}>
        <Badge
          icon={LanguagesIcon}
          label={`${medium.languages.length} ${languageLabel}`}
        />
        <div className={styles["medium-panel-inset"]}>
          <Button variant="outline" color="var(--background-color)">
            Edit
          </Button>
        </div>
      </div>
    )
  }

  if (medium.status === "error") {
    return (
      <div className={classes.join(" ")}>
        <div>
          <div>
            <CircleAlertIcon color="#d30000" size="1em" />
          </div>
          <div>
            <p>
              An error occurred while processing your file. Delete file to try
              again, and report issue if the problem persists.
            </p>
            <div>
              <Button variant="secondary" color="var(--light-color)">
                Report issue
              </Button>
              <Button>Delete file</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (medium.status === "transcribing") {
    return (
      <div className={classes.join(" ")}>
        <div>Transcribing subtitles</div>
        <ProgressBar size="small" />
      </div>
    )
  }

  return null
}

export default MediumPanel
