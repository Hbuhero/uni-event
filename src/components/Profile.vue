<template>
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Profile header -->
      <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div class="px-4 py-5 sm:px-6">
          <div class="flex items-center">
            <div class="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
              <img src="../assets/img/product-school--GajrOEN6m4-unsplash.jpg" alt="Profile"
                class="h-full w-full object-cover" />
            </div>
            <div class="ml-6">
              <h2 class="text-2xl font-bold text-gray-900">Alex Johnson</h2>
              <p class="text-sm text-gray-500">Event Enthusiast</p>
              <div class="mt-2 flex space-x-3">

                <div
                  class="cursor-pointer !px-4 !py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <span>Edit Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left column -->
        <div class="col-span-1">
          <!-- Personal Information -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and preferences.</p>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Full name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Alex Johnson</dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Email address</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">alex@example.com</dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Phone number</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">(555) 123-4567</dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Location</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">San Francisco, CA</dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Interests</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-2">
                      Music
                    </span>
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2 mb-2">
                      Technology
                    </span>
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2 mb-2">
                      Food & Drink
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- Category Preferences -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Category Preferences</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Select the categories of events you're interested in</p>
            </div>

            <div class="mb-8 px-4">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <!-- <SearchIcon class="h-5 w-5 text-gray-400" /> -->
                  <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input type="text" placeholder="Search for categories..."
                  class="w-full pl-10 !pr-4 !py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <!-- v-model="searchQuery" -->
              </div>
            </div>

            <div class="border-t border-gray-200">
              <dl>
                <div v-for="[index, category] in selectedCategories.entries()" :key="index" :class="{
                  'bg-white': index % 2 === 0,
                  'bg-gray-50': index % 2 !== 0
                }" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-2">

                  <dt class="text-sm font-medium text-gray-500">{{ category }}</dt>
                  <dt class="inline-flex"><v-icon icon="mdi-delete-outline" size="17px" class="cursor-pointer" /></dt>
                </div>

              </dl>
            </div>
          </div>
        </div>

        <!-- Right column -->
        <div class="col-span-1 lg:col-span-2">
          <!-- Upcoming Events -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">Upcoming Events</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Events you're attending or hosting.</p>
              </div>
              <button type="button"
                class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                View All
              </button>
            </div>
            <div class="border-t border-gray-200">
              <ul role="list" class="divide-y divide-gray-200">
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div
                        class="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">Tech Conference 2025</p>
                        <div class="flex items-center text-sm text-gray-500">
                          <svg class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd" />
                          </svg>
                          <p>April 15, 2025 • 9:00 AM</p>
                        </div>
                        <div class="flex items-center text-sm text-gray-500">
                          <svg class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd" />
                          </svg>
                          <p>Convention Center, San Francisco</p>
                        </div>
                      </div>
                    </div>
                    <div class="ml-2 flex-shrink-0">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Attending
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Notification Settings -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">Notification Settings</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Customize how and when you receive email notifications
                </p>
              </div>
              <button type="button"
                class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Turn Off
              </button>
            </div>
            <div class="border-t border-gray-200">
              <ul role="list" class="divide-y divide-gray-200">
                <li class="!px-4 !py-2 sm:!px-6">
                  <div class="space-y-4">
                    <div class="flex justify-between items-center py-2 border-gray-100">
                      <div>
                        <p class="text-md font-medium text-gray-700 mb-1">New events in preferred categories</p>
                        <p class="text-xs text-gray-500">Receive notifications when new events are added in categories
                          you follow</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                        </div>
                      </label>
                    </div>
                  </div>
                </li>
                <li class="!px-4 !py-2 sm:!px-6">
                  <div class="space-y-4">
                    <div class="flex justify-between items-center py-2 border-gray-100">
                      <div>
                        <p class="text-md font-medium text-gray-700 mb-1">New events in your area</p>
                        <p class="text-xs text-gray-500">Receive notifications when new events are added in categories
                          you follow</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                        </div>
                      </label>
                    </div>
                  </div>
                </li>
                <li class="!px-4 !py-2 sm:!px-6">
                  <div class="space-y-1">
                    <div class="flex justify-between items-center !py-2 border-gray-100">
                      <div>
                        <p class="text-md font-medium text-gray-700 mb-1">Event reminders</p>
                        <p class="text-xs text-gray-500">Get reminders about upcoming events you\'ve shown interest in
                        </p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                        <div
                          class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                        </div>
                      </label>
                    </div>
                  </div>
                </li>

              </ul>
            </div>


          </div>
        </div>
      </div>
    </main>
</template>