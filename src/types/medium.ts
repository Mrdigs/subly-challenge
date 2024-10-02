type Medium = {
  id: string
  name: string
  cover: string
  languages: string[]
  status: "ready" | "transcribing" | "error"
  errorMessage?: string
  createdAt: string
  updatedAt: string
}

export default Medium
