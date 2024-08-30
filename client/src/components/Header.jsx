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
        <header className="header d-flex flex-row justify-content-between align-items-center mb-3 p-4">
            <NavLink to="/">
                <h1 className="text-center mb-3">Art Nook</h1>
            </NavLink>

            {props.user ? (
                <div className='row align-center'>
                    <p>Welcome, {props.user.username}</p>
                    <NavLink to="/dashboard" className="dash-link">Dashboard</NavLink>
                    <button onClick={handleLogout}>log out</button>
                </div>
            ) : (
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/auth">Login/Register</NavLink>

                </nav>
            )}
        </header>
    )

}

export default Header;

