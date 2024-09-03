import trashicon from 'bootstrap-icons/icons/trash3.svg'
import pencilsquare from 'bootstrap-icons/icons/pencil-square.svg'

import { useMutation } from "@apollo/client"

import { GET_ALL_ARTWORK, GET_USER_ARTWORK } from '../graphql/queries'
import { DELETE_ARTWORK } from "../graphql/mutations"

function ArtItem({ toggleEditMode, art, main }) {


    const [deleteArtwork] = useMutation(DELETE_ARTWORK)



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

    return (


        <div className="card mb-3 d-flex align-items-stretch">
            <div className="card-body text-center d-flex flex-column justify-content-between">

                <img src={art.imageUrl} className="rounded-start mb-5" />


                <h5 className="basicfont card-title">{art.title}</h5>
                <p className="card-text">{art.description}</p>

                {/* This terinary was added to indicate that this would only display if a artist/user is queried since the GET USER ART does not need it */}
                {art.artist && (<p className="card-text"><small className="text-body-secondary">{art.artist.username}</small></p>)}
                <p className="card-text"><small className="text-body-secondary">{art.date}</small></p>

                <div className='d-flex justify-content-center'>
                    {/* Delete btn */}
                    {!main && (<img style={{ height: '1.75rem ' }} src={trashicon} id={art._id} onClick={handleDelete} className='mx-3' />)}

                    {/* EDit btn*/}
                    {!main && (<img style={{ height: '1.75rem ' }} src={pencilsquare} id={art._id} onClick={() => toggleEditMode(art)} className='mx-3' />)}
                </div>

            </div>
        </div>

    )
}


export default ArtItem