export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen overflow-hidden">
          <div className="bg-[#0c0c0c] relative rounded-r-lg hidden lg:flex
          bg-[url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover grayscale brightness-[0.4]">
          </div>
          {children}
      </div>
        </>
        
    )
  }