function ArtItem({art}) {


    return (

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={art.imageUrl} className="rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{art.title}</h5>
                        <p className="card-text">{art.description}</p>

                        {/* This terinary was added to indicate that this would only display if a artist/user is queried since the GET USER ART does not need it */}
                        { art.artist && ( <p className="card-text"><small className="text-body-secondary">{art.artist}</small></p>) }
                        <p className="card-text"><small className="text-body-secondary">{art.date}</small></p>

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