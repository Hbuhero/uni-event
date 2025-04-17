import api from "./api"

export const authService = {
    async login({username, password}) {
        try {
            const formData = new FormData()
            formData.append('username', username)
            formData.append('password', password)
            
            const response = await api.post(
                "auth/login", formData
               
            )            
            return response.data
        } catch (error) {

        }
    }
}