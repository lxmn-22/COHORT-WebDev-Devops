// sm, md, lg, xl, 2xl
export function SidebarClass01() {
  return (
    <div className="flex">
        <div className="hidden md:block bg-blue-400 w-96 h-screen ">
            SideBar
        </div>
        <div className="bg-green-200 w-full h-screen">
            Content
        </div>
    </div>
  )
}
