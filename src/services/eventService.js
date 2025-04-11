import api from "./api";


export const eventService = {
    async getEvents({ sortBy, sortDirection, size, first }) {
        try {

            const response = await api.get(
                "/event/all",
                {
                    params: {
                        sortBy: sortBy ,
                        sortDirection: sortDirection ,
                        size: size ,
                        first: first 
                    }
                }

            )

            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    async getEvent(uuid) {
        try {
            const response = await api.get(`/event/${uuid}`)


            return response.data
        } catch (error) {
            console.log(error)
        }
    },

    async getEventsByCategory( { sortBy, sortDirection, size, first, categoryUuid }) {
        try {
            const response = await api.get(
                `/event/category/${categoryUuid}`,
                {
                    params: {
                        sortBy: sortBy ,
                        sortDirection: sortDirection ,
                        size: size ,
                        first: first
                    }
                }
            )

            return response.data
        } catch (error) {

        }
    },
    
    async getRandomEvents () {
        try {
            const response = await api.get(`/event/random`)

            return response.data
        } catch (error) {

        }
    }
}

