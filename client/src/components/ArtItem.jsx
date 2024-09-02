import trashicon from 'bootstrap-icons/icons/trash3.svg'

import { useMutation } from "@apollo/client"

import { DELETE_ARTWORK } from "../graphql/mutations"

function ArtItem({ art }) {

    const [deleteArtwork] = useMutation(DELETE_ARTWORK)

    // {
    //     refetchQueries: [GET_USER_ARTWORK, GET_ALL_ARTWORK]
    // }

    const handleDelete = async (event) => {
        const id = event.target.id

        try {
            await deleteArtwork({
                variables: {
                    deleteArtworkId: id
                }
            })
        } catch (error) {
            console.log(error)
        }

    }


    return (

        <div className="card mb-3 d-flex align-items-center justify-content-center">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={art.imageUrl} className="rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-center">
                        <h5 className="basicfont card-title">{art.title}</h5>
                        <p className="card-text">{art.description}</p>

                        {/* This terinary was added to indicate that this would only display if a artist/user is queried since the GET USER ART does not need it */}
                        {art.artist && (<p className="card-text"><small className="text-body-secondary">{art.artist}</small></p>)}
                        <p className="card-text"><small className="text-body-secondary">{art.date}</small></p>

                        <img src={trashicon} id={art._id} onClick={handleDelete} />

                        {/* <span className="insta-label m-3">Instagram Link</span>
                        <a href={art.data?.githubRepo} target="_blank">

                        </a> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtItem