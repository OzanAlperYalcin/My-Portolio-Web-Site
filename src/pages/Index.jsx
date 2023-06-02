import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

function Index() {
  return (
    <div className="flex flex-col h-screen p-4">
        <Header />
          <Outlet />
        <Footer />
    </div>
  )
}
export default Index