import axios from 'axios'

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzU4NjFlMmE5MGU0MjUwMTg4ZDE4Y2Y3NGZlZGZmOSIsIm5iZiI6MTcyMDI1MzgzOS4wOTA0MzQsInN1YiI6IjY2ODhlY2U2NmVjMDMzNzMzYzQ5OWVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z58nge9n3HhgQvgBjqLN9Kxp4eb0YiaBaI1rhaJoPpA'
      }
})

export default instance