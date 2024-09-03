import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"

// import { ADD_ARTWORK, DELETE_ARTWORK } from "../graphql/mutations"
import { GET_USER_ARTWORK } from "../graphql/queries"

import ArtItem from "../components/ArtItem";
import ArtForm from "../components/ArtForm";



function UserDashboard() {

    const { data } = useQuery(GET_USER_ARTWORK)


    // const handleSubmit = async event => {
    //     event.preventDefault()

    //     const res = await addArtwork()

    //     console.log(res)

    //     setFormData({
    //         ...initialFormData
    //     })
    // }

    // const handleArtwork = async (id) => {
    //     await deleteArtwork({
    //         variables: {
    //             artwork_id: id
    //         }
    //     })
    // }

    return (
        <>
            <div>
                <ArtForm />
            </div>


            <section id="art-output" className="container text-center">


                <div className="row">
                    {data?.getUserArtwork.map((art, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index} >
                            <ArtItem art={art} />
                        </div>
                    ))}

                </div>

            </section>




        </>


    )

}

export default UserDashboard