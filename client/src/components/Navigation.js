import React from 'react'
import { Link, useMatch, useResolvedPath} from 'react-router-dom'

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
            <div className='container-fluid'>
                <div className="row headerRow">
                    <div className="col-md-12 col-lg-7">
                        <h2 className="headerName"><Link className="headerName" to='/Project-Portfolio-React-'>Smart Stack</Link></h2>
                    </div>
                    <div className="col-lg-auto headerLinks"><CustomLink to="/aboutme">Login</CustomLink></div>
                    <div className="col-lg-auto headerLinks"><CustomLink to="/portfolio">Signup</CustomLink></div>
                </div>
            </div>
        </nav>
    )
}