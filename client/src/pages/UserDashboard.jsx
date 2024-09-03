import { useState } from "react"
import { useMutation, useQuery } from "@apollo/client"

// import { ADD_ARTWORK, DELETE_ARTWORK } from "../graphql/mutations"
import { GET_USER_ARTWORK } from "../graphql/queries"

import ArtItem from "../components/ArtItem";
import ArtForm from "../components/ArtForm";

const initialFormData = {
    id: '',
    title: '',
    description: '',
    imageUrl: '',
    date: '',
    errorMessage: ''
}

function UserDashboard() {
    const [showForm, setShowForm] = useState(false)

    const [formData, setFormData] = useState(initialFormData);
    const [isEdit, setIsEdit] = useState(false);

    const { data } = useQuery(GET_USER_ARTWORK)

    const toggleEditMode = artworkObj => {

        console.log(artworkObj)
        setFormData({
            ...artworkObj,
            id: artworkObj._id
        })

        setIsEdit(true)

        setShowForm(true)

        window.scrollTo(0, 0)

    }

    return (
        <>
            <div>
                <ArtForm
                    setFormData={setFormData}
                    setShowForm={setShowForm}
                    setIsEdit={setIsEdit}
                    initialFormData={initialFormData}
                    formData={formData}
                    showForm={showForm}
                    isEdit={isEdit} />
            </div>


            <section id="art-output" className="container text-center my-5">


                <div className="row">
                    {data?.getUserArtwork.map((art, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index} >
                            <ArtItem toggleEditMode={toggleEditMode} art={art} />
                        </div>
                    ))}

                </div>

            </section>




        </>


    )

}

export default UserDashboard