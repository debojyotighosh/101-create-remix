import { useParams } from "@remix-run/react"

const Book = () => {
  const { id } = useParams()
  return (
    <div>
      <h1>Book page</h1>
      <p>Book ID: {id}</p>
    </div>
  )
}

export default Book