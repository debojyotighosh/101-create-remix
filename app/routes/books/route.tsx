import { Outlet, useLoaderData } from "@remix-run/react"

export const meta = () => {
  return [
    { title: 'My books' },
    { name: 'description', content: 'List of books that I enjoy reading' }
  ]
}

export const loader = () => {
  return [
    {
      key: 'hp1',
      title: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J.K. Rowling',
      year: 1997,
      genre: 'Fantasy',
      pages: 223,
      isbn: '0-7475-3269-9',
    },
    {
      key: 'hp2',
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      year: 1998,
      genre: 'Fantasy',
      pages: 251,
      isbn: '0-7475-3849-2',
    },
    {
      key: 'hp3',
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
      year: 1999,
      genre: 'Fantasy',
      pages: 317,
      isbn: '0-7475-4215-5',
    },
    {
      key: 'hp4',
      title: 'Harry Potter and the Goblet of Fire',
      author: 'J.K. Rowling',
      year: 2000,
      genre: 'Fantasy',
      pages: 636,
      isbn: '0-7475-4624-X',
    },
    {
      key: 'hp5',
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'J.K. Rowling',
      year: 2003,
      genre: 'Fantasy',
      pages: 766,
      isbn: '0-7475-5100-6',
    },
    {
      key: 'hp6',
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'J.K. Rowling',
      year: 2005,
      genre: 'Fantasy',
      pages: 607,
      isbn: '0-7475-8108-8',
    },
    {
      key: 'hp7',
      title: 'Harry Potter and the Deathly Hallows',
      author: 'J.K. Rowling',
      year: 2007,
      genre: 'Fantasy',
      pages: 607,
      isbn: '0-545-01022-5',
    }
  ]
}

type Book = {
  key: string
  title: string
  author: string
  year: number
  genre: string
  pages: number
  isbn: string
}

const LIMIT = 3

const Books = () => {
  const books: Book[] = useLoaderData()
  console.log(books)
  
  return (
    <div>
      <h1>List of Books</h1>
      <ul>
        {
          books.slice(0, LIMIT).map((book) => (
            <li key={book.key} className="border mt-2 p-2">
              <h2>{book.title}</h2>
              <div className="grid grid-cols-3 gap-x-2">
                <p>Author: {book.author}</p>
                <p>Year: {book.year}</p>
                <p>Genre: {book.genre}</p>
                <p>Pages: {book.pages}</p>
                <p>ISBN: {book.isbn}</p>
              </div>
            </li>
          ))
        }
      </ul>

      <Outlet />
    </div>
  )
}

export default Books