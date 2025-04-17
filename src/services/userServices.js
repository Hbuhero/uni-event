import api from "./api"

export const userService = {
    async getUser () {
        try {

            
            

            const response = await api.get(`user/profile`,
               { 
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            }
            )
            return response.data
        } catch (error) {

        }
    },

    async getUserEvents({ sortBy, sortDirection, size, first}) {
        try {
            const response = await api.get(`user-event/all`,
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                    },
                    params: {
                        sortBy: sortBy ,
                        sortDirection: sortDirection ,
                        size: size ,
                        first: first
                    }
                }
            )

            return response.data
        } catch (error){

        }
    }


}