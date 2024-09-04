import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_USER_FAVORITES } from '../graphql/queries'
import ArtItem from '../components/ArtItem'

function Favorites() {
    const { data, loading, error } = useQuery(GET_USER_FAVORITES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <section>
                <h1 className="main-gallery basicfont text-center mb-5">My Favorites</h1>
            </section>

            <section id="favorites-gallery-output" className="container text-center">
                <div className="row">
                    {data.getUserFavorites.length > 0 ? (
                        data.getUserFavorites.map((art) => (
                            <div className="col-sm-6 col-md-4 col-lg-3" key={art._id}>
                                <ArtItem art={art} main={false} />
                            </div>
                        ))
                    ) : (
                        <p>You have no favorites yet.</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default Favorites
