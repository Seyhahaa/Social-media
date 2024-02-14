import Header from "./components/Header"

function App() {

  return (
    <>
      <Header />

      <div className="bg-gray-200 dark:bg-gray-800 h-[90vh] fixed top-[10vh] left-0 w-full py-5">
        <div className="container mx-auto flex justify-between gap-10">Hello</div>
      </div>
    </>
  )
}

export default App
