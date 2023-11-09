import { } from 'react'
import {Link} from 'react-router-dom'
import { FaCode } from "react-icons/fa";

function NavBar() {


  return (
    <>
      <header>
        <h2> <FaCode /> DevFlaviane</h2>
        <nav>
          <ul>
            <Link to="/">Sobre mim</Link>
            <Link to="/formacao">Formação</Link>
            <Link to="/experiencia">Experiencia</Link>
            <Link to="/hobbies">Hobbies</Link>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar