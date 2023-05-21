import axios from 'axios'
export  const uploadImage = async (formData, token) => {
  try {
    console.log("formdata -->" , formData)
    console.log("token -->" , token)
    const {data} = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/uploadImages`,
        formData,
        {
            headers:{
                Authorization:`Bearer ${token}`,
                "Content-Type":"multipart/form-data"
            }
        }
    )
    return data
  } catch (error) {
    return error.response.data.message   
  }
}
