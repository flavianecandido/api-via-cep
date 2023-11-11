import { } from 'react'
import { Link } from 'react-router-dom'
import { FaCode } from "react-icons/fa";
import { StyleNav } from '../css/NavBar';

function NavBar() {


  return (
    <>
      <StyleNav>
        <header className="menu">
          <h2 className="logo-menu"> <FaCode /> DevFlaviane</h2>
          <nav className="nav-menu">
            <ul>
              <Link to="/" className="tlink">Sobre mim</Link>
              <Link to="/formacao" className="tlink">Formação</Link>
              <Link to="/experiencia" className="tlink">Experiência</Link>
              <Link to="/hobbies" className="tlink">Hobbies</Link>
            </ul>
          </nav>
        </header>
      </StyleNav>
    </>
  )
}

export default NavBar