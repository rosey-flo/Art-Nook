import trashicon from 'bootstrap-icons/icons/trash3.svg'
import pencilsquare from 'bootstrap-icons/icons/pencil-square.svg'
import hearticon from 'bootstrap-icons/icons/heart.svg'
import heartfill from 'bootstrap-icons/icons/heart-fill.svg'
import { useMutation } from "@apollo/client"

import { GET_USER_ARTWORK, GET_USER_FAVORITES, GET_ALL_ARTWORK } from '../graphql/queries'
import { DELETE_ARTWORK, TOGGLE_FAVORITE } from "../graphql/mutations"

function ArtItem({ toggleEditMode, art, main, showFav, user }) {
    const [deleteArtwork] = useMutation(DELETE_ARTWORK)
    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
        refetchQueries: [GET_USER_ARTWORK, GET_USER_FAVORITES, GET_ALL_ARTWORK]
    })

    const handleDelete = async (event) => {
        const id = event.target.id

        try {
            await deleteArtwork({
                variables: {
                    deleteArtworkId: id
                },
                refetchQueries: [{ query: GET_USER_ARTWORK }]
            })
        } catch (error) {
            console.log(error)
        }

    }

    const handleLike = async (item) => {
        try {
            await toggleFavorite({ variables: { artworkId: item._id } })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="card mb-3 d-flex align-items-stretch">
            <div className="card-body text-center d-flex flex-column justify-content-between">
                <img src={art.imageUrl} className="rounded-start mb-5" />
                <h5 className="basicfont card-title">{art.title}</h5>
                <p className="card-text">{art.description}</p>
                {art.artist && (<p className="card-text"><small className="text-body-secondary">{art.artist.username}</small></p>)}
                <p className="card-text"><small className="text-body-secondary">{art.date}</small></p>
                <div className='d-flex justify-content-center'>
                    {!main && (
                        <>
                            <img style={{ height: '1.75rem' }} src={trashicon} id={art._id} onClick={handleDelete} className='mx-3' />
                            <img style={{ height: '1.75rem' }} src={pencilsquare} id={art._id} onClick={() => toggleEditMode(art)} className='mx-3' />
                        </>
                    )}
                    {(user && showFav) && <img
                        style={{ height: '1.75rem', cursor: 'pointer' }}
                        src={art.liked ? heartfill : hearticon}
                        onClick={() => handleLike(art)}
                        className='mx-3'
                    />}
                </div>
            </div>
        </div>
    )
}


export default ArtItem