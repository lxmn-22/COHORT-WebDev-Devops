// sm, md, lg, xl, 2xl
export function SidebarClass01() {
  return (
    // <div className="flex">
    //     <div className="hidden md:block bg-blue-400 w-96 h-screen ">
    //         SideBar
    //     </div>
    //     <div className="bg-green-200 w-full h-screen">
    //         Content
    //     </div>
    // </div>
    <div className="w-full flex flex-col bg-white dark:bg-slate-500 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        Writes Upside-Down
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div>
  )
}
