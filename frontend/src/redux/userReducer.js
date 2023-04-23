import Cookies from "js-cookie"

export default function userReducer(
    state = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null, action) {
    switch (action.type) {
        case "LOGIN":
            return action.payload
        case "VERIFY":
            return { ...state, verified: action.payload }
        case "LOGOUT":
            return state = null
        default:
            return state
    }
}