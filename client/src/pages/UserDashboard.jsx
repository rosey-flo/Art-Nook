import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"

// import { ADD_ARTWORK, DELETE_ARTWORK } from "../graphql/mutations"
import { GET_USER_ARTWORK } from "../graphql/queries"

import ArtItem from "../components/ArtItem";
import ArtForm from "../components/ArtForm";



function UserDashboard() {
    
    const { data, refetch } = useQuery(GET_USER_ARTWORK)
    console.log(data)

    // Callback to refetch the data
    const handleArtAdded = () => {
    refetch();  
    };


    return (

        <div className="container">
            <ArtForm onArtAdded={handleArtAdded}/>

            <section id="art-output">

                {data?.getUserArtwork.map((art, index) => (
                    <ArtItem key={index} art={art} />
                ))}


            </section>


        </div>




    )

}

export default UserDashboard