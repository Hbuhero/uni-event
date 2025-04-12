import api from "./api";

export const categoryService = {
    async getCategories({ sortBy, sortDirection, size, first }) {
        try {
            const response = await api.get(
                '/category/all-categories',
                {
                    params: {
                        sortBy: sortBy,
                        sortDirection: sortDirection,
                        size: size,
                        first: first
                    }
                }
            )
            return response.data
        } catch (error) {

        }
    },

    async getCategory(uuid) {
        try {
            const response = await api.get(
                `category/${uuid}`
            )

            return response.data
        } catch (error) {

        }
    },

    async getCategoryByName(name) {
        try {
            const response = await api.get(
                `category/name/${name}`
            )

            return response.data
        } catch (error) {

        }
    }
}