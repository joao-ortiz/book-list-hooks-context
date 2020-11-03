import { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {
    const {dispatch} = useContext(BookContext)
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: 'ADD_BOOK',book: {title, author}})
        setAuthor('')
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Book Title" name="title" value={title} type="text" 
                onChange={(e) => {setTitle(e.target.value)}}/>
            <input placeholder="Book Author" type="text" value={author} name ="author" 
                onChange={(e) => {setAuthor(e.target.value)}}/>
            <input type="submit" value="Add new book" />
        </form>
    )
}