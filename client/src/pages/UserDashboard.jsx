import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"

// import { ADD_ARTWORK, DELETE_ARTWORK } from "../graphql/mutations"
import { GET_USER_ARTWORK } from "../graphql/queries"

import ArtItem from "../components/ArtItem";
import ArtForm from "../components/ArtForm";


const initialFormData = {
    name: '',
    weapon: '',
    headbandColor: ''
}

function UserDashboard() {
    // const [formData, setFormData] = useState(initialFormData)
    // const [addArtwork] = useMutation(ADD_ARTWORK, {
    //     variables: formData,
    //     refetchQueries: [GET_USER_ARTWORK, GET_ALL_ARTWORK]
    // })
    // const [deleteArtwork] = useMutation(DELETE_ARTWORK, {
    //     refetchQueries: [GET_USER_ARTWORK, GET_ALL_ARTWORK]
    // })
    // const { data: artworkData } = useQuery(GET_USER_ARTWORK)

    // if (artworkDataData) {
    //     console.log(addArtworkData)
    // }

    // const handleInputChange = event => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value
    //     })
    // }

    const { data } = useQuery(GET_USER_ARTWORK)








    const handleSubmit = async event => {
        event.preventDefault()

        const res = await addArtwork()

        console.log(res)

        setFormData({
            ...initialFormData
        })
    }

    const handleArtwork = async (id) => {
        await deleteArtwork({
            variables: {
                artwork_id: id
            }
        })
    }

    return (

        <div className="container">
            <ArtForm />

            <section id="art-output">

                {data?.getUserArtwork.map((art, index) => (
                    <ArtItem key={index} art={art} />
                ))}


            </section>


        </div>




    )

}

export default UserDashboard