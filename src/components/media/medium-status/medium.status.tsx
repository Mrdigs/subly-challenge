import Medium from "../../../types/medium"
import { timeAgo } from "../../../utils/date-helpers"

interface MediumStatusProps {
  medium: Medium
}

const MediumStatus: React.FC<MediumStatusProps> = ({ medium }) => {
  switch (medium.status) {
    case "ready": {
      const updatedAt = new Date(medium.updatedAt)
      return "Edited " + timeAgo(updatedAt)
    }
    case "error": {
      return medium.errorMessage || "Unknown error"
    }
    case "transcribing": {
      return "Transcribing"
    }
    default: {
      return "Unknown status"
    }
  }
}

export default MediumStatus
