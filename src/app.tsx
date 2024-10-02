import "./app.css"
import MediaList from "./components/media/media-list/media-list"
import MediumCard from "./components/media/medium-card/medium-card"
import useMediaApi from "./hooks/use-media-api"

function App() {
  const { media, loading } = useMediaApi()

  return (
    <>
      <h1>Media Status Report</h1>
      <MediaList
        style={{
          width: "75%",
        }}
      >
        {media?.map((medium) => (
          <li key={medium.id}>
            <MediumCard medium={medium} />
          </li>
        ))}
      </MediaList>
    </>
  )
}

export default App
