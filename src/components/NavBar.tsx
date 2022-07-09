import react from 'react'

const Navbar = () => {
  return (
    <nav className=" px-2 py-2.5 bg-teal-700 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Among Us Fanbase
          </span>
      </div>
    </nav>
  )
}

export default Navbar
