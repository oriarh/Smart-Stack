import React from 'react'
import { Link, useMatch, useResolvedPath} from 'react-router-dom'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/fontawesome-free-solid'

export default function () {
    
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let isActive = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link to={to} className={isActive? "navLinks active" : "navLinks"}
            >
              {children}
            </Link>
          </div>
        );
      }

    return (
        <nav>
            <header className='container-fluid'>
                <div className="row headerRow">
                    <div className="col-md-12 col-lg-7">
                        <h2 className="headerName"><Link className="headerName" to='/'>Smart Stack</Link></h2>
                    </div>
                      <div className="col-lg-auto headerLinks"><CustomLink to="/login">Login</CustomLink></div>
                      <div className="col-lg-auto headerLinks"><CustomLink to="/signup">Signup</CustomLink></div>
                </div>
                {/* <button><FontAwesomeIcon icon={faTimes} /></button>
                <button><FontAwesomeIcon icon={faBars} /></button> */}
            </header>
        </nav>
    )
}