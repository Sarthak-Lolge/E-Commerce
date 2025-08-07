import Navigation from "./components/Navigation"
import Sidebar from "./components/Sidebar"


function App() {
  return (
    <>
       <Navigation/>
       <div className="d-flex">
        <Sidebar/>
       </div>
    </>
  )
}

export default App
