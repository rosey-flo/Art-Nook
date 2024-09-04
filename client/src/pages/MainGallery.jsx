import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"

import ArtItem from "../components/ArtItem"

import { GET_ALL_ARTWORK } from "../graphql/queries"


function MainGallery() {
    const [artwork, setArtwork] = useState([])
    const { data } = useQuery(GET_ALL_ARTWORK)
    
    useEffect(() => {
        if (data) {
            setArtwork(data.getAllArtwork)
        }
    }, [data])

    return (
        <>
            <section>
                <h1 className="main-gallery basicfont text-center mb-5">The Art Show</h1>
            </section>


            <section id="main-gallery-output" className="container text-center">


                <div className="row">
                    {artwork.map((art, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                            <ArtItem setArtwork={setArtwork} art={art} main={true} />
                        </div>
                    ))}

                </div>

            </section>
        </>
    )
}

export default MainGallery