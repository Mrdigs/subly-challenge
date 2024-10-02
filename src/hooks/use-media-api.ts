import Medium from "../types/medium"
import testdata from "../data/testdata.json"
import { useEffect, useState } from "react"

/*
  There is no validation of the data here, it is assumed to be correct. An
  improvement might be use a schema validation library such as Zod:
  https://zod.dev/
*/
function useMediaApi(): { media: Medium[] | undefined; loading: boolean } {
  const [media, setMedia] = useState<Medium[] | undefined>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch("https://run.mocky.io/v3/f13b1c78-a3ed-4920-87fc-d3298f81baed").then(
      async (resp) => {
        try {
          if (resp.status === 200) {
            setMedia((await resp.json()) as Medium[])
            setLoading(false)
          } else if (resp.status === 404) {
            // The endpoint URL is currently giving me a 404, but previously
            // worked, and I had the data saved for testing - so here I am
            // using the saved data instead when a 404 is received
            setMedia(testdata as Medium[])
            setLoading(false)
          } else {
            throw new Error("Received status code from API: " + resp.status)
          }
        } catch (error) {
          // No error handling except to log it currently
          console.error(error)
        }
      },
      (error) => {
        // No error handling except to log it currently
        console.error(error)
      }
    )
  }, [])

  return { media, loading }
}

export default useMediaApi
