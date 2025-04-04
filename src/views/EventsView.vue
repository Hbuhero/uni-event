<template>
    <div class="flex flex-col">
        <div class="bg-[hsl(240,4.8%,95.9%)] pt-12">
            <div class="place-self-center !mt-20 !pb-20 ">
                <h1 class="text-center text-4xl !p-4">All Events</h1>
                <h3 class="!p-4 text-center">Browse all upcoming events across all categories</h3>

                <div class="flex h-[4vh] mb-10 !p-4">
                    <input type="search" class="border !pl-3 pr-8 !py-4 placeholder:text-sm placeholder:font-light"
                        placeholder="Search for events...">
                    <!-- <textarea name="" id="" placeholder="Search for events..." class="border pl-4 pr-4 pb-4 pt-4"></textarea> -->
                    <div
                        class="bg-blue-500 text-white rounded-br-md rounded-tr-md border flex items-center pl-4 pr-4 pb-4 pt-4 ">
                        <v-icon icon="mdi-magnify" />
                        <a href="#" class="ml-6 ">Search</a>
                    </div>
                </div>
            </div>
        </div>

        <div class=" !px-[16.5vw]">


            <div class="flex !mt-10 !mb-10">

                <div class="mt-4 border w-[6rem] rounded-full !px-2 !py-1 text-xs text-black text-center">
                    <span>All Events</span>
                </div>


            </div>

            <Event />
        </div>

        <div class="flex items-center justify-center space-x-1 my-8">
        <button class="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" 
                :disabled="currentPage === 1">
          Previous
        </button>
        
        <div class="flex items-center space-x-1">
          <button v-for="page in totalPages" 
                  :key="page" 
                  :class="[
                    'px-4 py-2 border rounded-lg',
                    currentPage === page 
                      ? 'bg-indigo-600 text-white border-indigo-600' 
                      : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50'
                  ]">
            {{ page }}
          </button>
        </div>

        <button class="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="currentPage === totalPages">
          Next
        </button>
      </div>


    </div>
</template>

<script setup>
import Event from '../components/Event.vue';

const nums = 4
</script>

<style lang="scss" scoped></style>