import { useSearchParams } from "react-router-dom"
import Medium from "../types/medium"
import { FormEvent } from "react"

type ApplyFiltersFunc = (media: Medium[] | undefined) => Medium[] | undefined
type FilterFormHandler = (e: FormEvent<HTMLFormElement>) => void
type Filters = { language?: string; status?: string }

function useMediaFilters(): [Filters, ApplyFiltersFunc, FilterFormHandler] {
  const filters: Filters = {}
  const [searchParams, setSearchParams] = useSearchParams()
  filters.language = searchParams.get("language") || ""

  const applyFilters = (media: Medium[] | undefined) => {
    const language = searchParams.get("language")?.toString()
    const status = searchParams.get("status")?.toString()
    return media?.filter((medium) => {
      if (language && !medium.languages.includes(language)) {
        return false
      }
      if (status && medium.status !== status) {
        return false
      }
      return true
    })
  }

  const handleFiltersSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchParams: Filters = {}
    const formData = new FormData(e.target as HTMLFormElement)
    const languageParam = formData.get("language")
    const statusParam = formData.get("status")
    if (languageParam) {
      searchParams.language = languageParam.toString()
    }
    if (statusParam) {
      searchParams.status = statusParam.toString()
    }
    setSearchParams(searchParams)
  }

  return [filters, applyFilters, handleFiltersSubmit]
}

export default useMediaFilters
