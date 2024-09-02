import { useState } from "react"
import { useQuery } from "@apollo/client"

import ArtItem from "../components/ArtItem"

import { GET_ALL_ARTWORK} from "../graphql/queries"


function MainGallery() {

    const { data} = useQuery(GET_ALL_ARTWORK)

    return (
        <>
            <section>
                <h1>Main Gallery</h1>
            </section>


            <section id="main-gallery-output ">

                {data?.getAllArtwork.map((art, index) => (
                    <ArtItem key={index} art={art}/>
                ))}
               

            </section>
        </>
    )
}

export default MainGallery