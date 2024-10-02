import MediaList from "../components/media/media-list/media-list"
import MediumCard from "../components/media/medium-card/medium-card"
import useMediaApi from "../hooks/use-media-api"
import MediaFilters from "../components/media/media-filters/media-filters"
import useMediaFilters from "../hooks/use-media-filters"

const HomePage: React.FC = () => {
  const { media, loading } = useMediaApi()
  const [filters, applyFilters, handleFiltersSubmit] = useMediaFilters()

  if (loading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <>
        <h1>Media Status Report</h1>
        <MediaFilters filters={filters} onSubmit={handleFiltersSubmit} />
        <MediaList
          style={{
            width: "75%",
          }}
        >
          {applyFilters(media)?.map((medium) => (
            <li key={medium.id}>
              <MediumCard medium={medium} />
            </li>
          ))}
        </MediaList>
      </>
    )
  }
}

export default HomePage
