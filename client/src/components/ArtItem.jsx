import { useMutation } from '@apollo/client'
import { DELETE_ARTWORK } from '../graphql/mutations'


function ArtItem({art}) {
    
    const [deleteArtwork] = useMutation(DELETE_ARTWORK)
        
    const handleDeleteArtwork = async (id) => {
        try {
          await deleteArtwork({
            variables: {
              artwork_id: id
            }
          })
        } catch (error) {
          console.log(error)
        }
      }

    return (

        <div className="card m-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={art.imageUrl} className="rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Title: {art.title}</h5>
                        <p className="card-text">Description: {art.description}</p>

                        {/* This terinary was added to indicate that this would only display if a artist/user is queried since the GET USER ART does not need it */}
                        { art.artist && ( <p className="card-text"><small className="text-body-secondary">Artist: {art.artist}</small></p>) }
                        <p className="card-text"><small className="text-body-secondary">Date Created: {art.date}</small></p>

                        {/* <span className="insta-label m-3">Instagram Link</span>
                        <a href={art.data?.githubRepo} target="_blank">

                        </a> */}
                        
                        <button type="button" className="btn btn-danger" onClick={() => handleDeleteArtwork(art._id)}>
                            Delete
                        </button>
    

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtItem