import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className="header d-flex flex-row justify-content-between align-items-center mb-3 p-4">
            <NavLink to="/">
                <h1 className="text-center mb-3">Art Nook</h1>
            </NavLink>

            <nav>
                <NavLink to="/">Main Gallery</NavLink>
                <NavLink to="/dashboard">dashboard</NavLink>
            </nav>
        </header>
    )

}

export default Header;

