import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Index from "./pages/Index"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}>
        <Route index={true} element={<Home/>} />
        <Route path="projects" element={<Projects />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
