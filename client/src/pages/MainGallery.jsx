import { useState } from "react"
import { useQuery } from "@apollo/client"

import ArtItem from "../components/ArtItem"

import { GET_ALL_ARTWORK } from "../graphql/queries"


function MainGallery() {

    const { data } = useQuery(GET_ALL_ARTWORK)

    return (
        <>
            <section>
                <h1 className="main-gallery basicfont text-center">Main Gallery</h1>
            </section>


            <section id="main-gallery-output" className="container text-center">


                <div className="row">
                    {data?.getAllArtwork.map((art, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                            <ArtItem art={art} main={true} />
                        </div>
                    ))}

                </div>

            </section>
        </>
    )
}

export default MainGallery