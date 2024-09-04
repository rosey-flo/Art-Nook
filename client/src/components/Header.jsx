import { NavLink, useNavigate } from 'react-router-dom'
import { useMutation, useApolloClient } from '@apollo/client'

import { LOGOUT_USER } from '../graphql/mutations'
import { GET_USER } from '../graphql/queries'

function Header(props) {
    const navigate = useNavigate()

    const client = useApolloClient()

    const [logoutUser] = useMutation(LOGOUT_USER, {
        refetchQueries: [GET_USER]
    })

    const handleLogout = async () => {
        await logoutUser()
        await props.setUser(null)

        client.clearStore()

        navigate('/')
    }

    return (
        <header className="header d-flex flex-row justify-content-between align-items-center p-4">
            <NavLink to="/">
                <h1 className="spfont text-center mx-5">art nook</h1>
            </NavLink>

            {props.user ? (
                <div className='d-flex flex-row justify-content-between align-items-end p-4'>
                    <NavLink to="/profile-update" className="basicfont white-font mx-3">Welcome, {props.user.username}</NavLink>
                    <p>
                        <NavLink to="/homepage" className="basicfont dash-link mx-3">Main Gallery</NavLink>
                    </p>
                    <p>
                        <NavLink to="/dashboard" className="basicfont dash-link mx-3">Dashboard</NavLink>
                    </p>
                    <button className='btn px-3' onClick={handleLogout}>log out</button>
                </div>
            ) : (
                <nav className="flex-column">

                    <NavLink to="/auth" className="dash-link basicfont mx-5">Login / Register</NavLink>

                </nav>
            )}
        </header>
    )

}

export default Header;

