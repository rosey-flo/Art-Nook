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
                <div className="container">
                    <div className= "row">
                        <div className="row justify-content-end">
                        <p className="col-2 mr-0">Welcome, {props.user.username}</p>
                        </div>
                    <div className="row justify-content-end column-gap-4">
                        <button className="btn btn-secondary btn-sm col-2">
                        <NavLink className=" nav-link" to="/dashboard">Dashboard</NavLink>
                        </button>
                        <button class="btn btn-secondary btn-sm col-2" onClick={handleLogout}>Log out</button>
                    </div>
                    </div>
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

