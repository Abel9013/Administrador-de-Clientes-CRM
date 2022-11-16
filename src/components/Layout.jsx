import { Outlet } from "react-router-dom"
function Layout() {
  return (
    <div>
        <h1 className="text-9xl text-red-500">CRM react </h1>
        <Outlet />
    </div>
  )
}

export default Layout