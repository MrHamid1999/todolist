import SideBar from "@/components/SideBar"



export default function TasksLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <main className="flex ">
            <SideBar />
            {children}
        </main>
    )
  }