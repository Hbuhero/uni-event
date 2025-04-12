<template>
    <div class="min-h-screen bg-gray-50 !pt-32">
        <!-- Header -->
        <!-- <header class="bg-white shadow-sm sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-4">
                    <div class="text-2xl font-bold text-indigo-600">UniEvent</div>
                    <div class="flex items-center space-x-4">
                        <button class="text-gray-600 hover:text-gray-900">Sign In</button>
                        <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Sign
                            Up</button>
                    </div>
                </div>
            </div>
        </header> -->

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Breadcrumb -->
            <div class="text-gray-500 mb-6">
                Home / Categories
            </div>

            <!-- Search and Filters -->
            <div class="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <!-- Search Bar -->
                <div class="relative flex-grow max-w-xl">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input type="text"
                        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Search categories..." />
                </div>

                <!-- Filters -->
                <div class="flex items-center space-x-4">
                    <!-- View Toggle -->
                    <div class="flex border border-gray-300 rounded-md overflow-hidden">
                        <button class="px-3 py-2 bg-indigo-600 text-white">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </button>
                        <button class="px-3 py-2 bg-white text-gray-600">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <!-- Sort Dropdown -->
                    <select
                        class="block w-full pl-3 pr-10 !py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>Most Popular</option>
                        <option>Newest</option>
                        <option>Alphabetical</option>
                    </select>
                </div>
            </div>

            <!-- Categories Grid -->
            <div class="mb-12">
                <h2 class="text-2xl font-semibold mb-6">All Categories</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Category Card -->
                    <div v-for="category in categories" :key="category.uuid" @click="goToCategory(category.uuid)"
                        class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer">
                        <div class="relative h-40 bg-gray-200 rounded-t-xl overflow-hidden">
                            <img :src="category.image" :alt="category.name" class="w-full h-full object-cover">
                            <div v-if="category.trending"
                                class="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold !px-2 !py-1 rounded">
                                Trending
                            </div>
                        </div>
                        <div class="!p-4">
                            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ category.name }}</h3>
                            <div class="flex items-center text-gray-500 text-sm">
                                <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {{ category.eventCount }} events
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { categoryService } from '../services/categoryService';
import { useRouter } from 'vue-router';

const categories = ref([])
const router = useRouter()

const getCategories = async () => {
    try{
        const response = await categoryService.getCategories({
            size: 8
        })
        
        categories.value = response.content
    } catch (error) {

    }
}

const goToCategory = (uuid) => {
    router.push(`/category/${uuid}`)
}

onMounted(() => {
    getCategories()
})
</script>

<style lang="scss" scoped></style>