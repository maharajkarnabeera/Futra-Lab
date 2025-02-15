let token = null;

const setToken = (accessToken) => {
    token = accessToken
}
const getToken = () => {
    return token
}
const useAuthStore= () => {
    return token
}

export {useAuthStore, setToken, getToken}