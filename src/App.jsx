import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Movies from './pages/Movies'
import Series from './pages/Series'
import './App.css'

function App() {
  const [query, setQuery] = useState("")
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "dark"
})

  useEffect(() => {
  const saved = localStorage.getItem("theme")
  if (saved) setTheme(saved)
}, [])

useEffect(() => {
  document.body.className = theme
  localStorage.setItem("theme", theme)
}, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <Router>
      <Navbar onSearch={setQuery} theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path='/' element={<Home query={query} />} />
        <Route path='/movie/:id' element={<MovieDetail />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </Router>
  )
}

export default App
