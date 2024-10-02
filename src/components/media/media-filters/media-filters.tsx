import Button from "../../ui/button/button"
import styles from "./media-filters.module.css"

interface MediaFiltersProps extends React.HTMLAttributes<HTMLFormElement> {
  filters: { language?: string; status?: string }
}

const MediaFilters: React.FC<MediaFiltersProps> = ({
  filters,
  ...formProps
}) => {
  return (
    <div className={styles["media-filters"]}>
      <form {...formProps}>
        <label htmlFor="languageFilter">Language</label>
        <select
          id="languageFilter"
          name="language"
          defaultValue={filters.language}
        >
          <option value="">Please select...</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
        </select>
        <label htmlFor="statusFilter">Status</label>
        <select id="statusFilter" name="status" defaultValue={filters.status}>
          <option value="">Please select...</option>
          <option value="ready">Ready</option>
          <option value="transcribing">Transcribing</option>
          <option value="error">Error</option>
        </select>
        <Button type="submit">Apply</Button>
      </form>
    </div>
  )
}

export default MediaFilters
