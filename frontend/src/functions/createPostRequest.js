import axios from "axios";
export const createPost = async (
    type,
    background,
    text,
    images,
    user,
    token
) => {
    try {
        const payload = {
            type,
            background,
            text,
            images,
            user
        }
        console.log("payload -->>", payload)
        const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/createPost`,
            payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        return "ok";

    } catch (error) {
        return error.response.data.message
    }

}