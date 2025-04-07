<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
        <!-- Error Container -->
        <div class="text-center">
            <!-- Error Code -->
            <h1 class="text-9xl font-bold text-gray-900">404</h1>

            <!-- Error Message -->
            <h2 class="mt-4 text-3xl font-semibold text-gray-800">Page not found</h2>
            <p class="mt-3 text-lg text-gray-600">Sorry, we couldn't find the page you're looking for.</p>

            <!-- Suggestions -->
            <div class="mt-6 text-gray-600">
                <p>Here are some helpful links:</p>
                <div class="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <router-link to="/"
                        class="inline-flex items-center !px-4 !py-2 text-sm font-medium text-gray-700 bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-lg transition-colors duration-200">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Back to Home
                    </router-link>

                    <div @click="goToEvents"
                        class="inline-flex items-center !px-4 !py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-gray-300 shadow-sm transition-colors duration-200">

                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-.586-1.414l-4.5-4.5A2 2 0 0010.5 3H8a2 2 0 00-2 2v3" />
                        </svg>
                        Browse Events

                    </div>

                    <div @click="goBack"
                        class="inline-flex items-center !px-4 !py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-gray-300 shadow-sm transition-colors duration-200">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                        Go Back
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
    router.go(-1)
}

const goToEvents = () => {
    router.push('/events')
}
</script>

<style scoped>
/* Optional: Add any custom animations or transitions here */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.text-center {
    animation: fadeIn 0.5s ease-out;
}
</style>