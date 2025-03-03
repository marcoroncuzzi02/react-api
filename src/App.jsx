import { useState, useEffect } from "react"

function App() {
const [postsList, setPostsList] = useState([])

function fetchPosts() {
  fetch("http://localhost:3000/api/posts")
  .then((res) => res.json())
  .then(setPostsList);
}

useEffect(fetchPosts,[])

  return (
    <>
      <ul>
        {postsList.map( (element) =>{
          return(
            <li
            key={element.id}>
              {element.title}
            </li>
          )
          
        })}
      </ul>
    </>
  )
}

export default App
