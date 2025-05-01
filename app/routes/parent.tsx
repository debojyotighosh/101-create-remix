import { Outlet } from "@remix-run/react"

const Parent = () => {
  return (
    <div>
      <h1>This is the parent component</h1>
      <Outlet />
    </div>
  )
}

export default Parent