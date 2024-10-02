import Medium from "../../../types/medium"
import Card from "../../ui/card/card"
import MediumStatus from "../medium-status/medium.status"
import MediumPanel from "../medium-panel/medium-panel"
import styles from "./medium-card.module.css"

interface MediumCardProps {
  medium: Medium
}

const MediumCard: React.FC<MediumCardProps> = ({ medium }) => {
  /*
    The reverseColumnLayout property is used here so that the card uses 
    flex-direction: column-reverse, visually placing the title of the 
    medium at the bottom of the card while keeping it 1st in the DOM,
    which makes more sense for screen reader users.
  */
  return (
    <Card reverseColumnLayout={true}>
      <Card.Title className={styles["medium-title"]}>
        <strong>{medium.name}</strong>
        <small>
          <MediumStatus medium={medium} />
        </small>
      </Card.Title>
      <Card.Body className={styles["medium-body"]}>
        <img width="300" height="200" src={medium.cover} alt={medium.name} />
        <MediumPanel medium={medium} positionAbsolute={true} />
      </Card.Body>
    </Card>
  )
}

export default MediumCard
