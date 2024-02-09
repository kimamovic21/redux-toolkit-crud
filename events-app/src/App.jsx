import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Welcome from "./components/Welcome"
import PageNotFound from "./components/PageNotFound"
import Events from "./routes/Events"
import CreateEvent from "./routes/CreateEvent"
import EditEvent from "./routes/EditEvent"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/create" element={<CreateEvent />} />
        <Route path="/events/edit/:id" element={<EditEvent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App