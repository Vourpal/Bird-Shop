import { createContext } from "react"
import { Outlet } from "react-router-dom"

const cartData = createContext([])
const RootLayout = () => {
  return(
    <div>
        <Outlet/>
    </div>
  )
}

export default RootLayout
