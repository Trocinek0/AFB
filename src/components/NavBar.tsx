import react from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=" px-2 py-2.5 bg-emerald-500 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Among Us Fanbase
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
