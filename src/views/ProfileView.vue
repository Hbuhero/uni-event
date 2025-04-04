<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation bar -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold text-blue-600">EventMaster</h1>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Dashboard
              </a>
              <a href="#" class="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Profile
              </a>
              <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                My Events
              </a>
              <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Discover
              </a>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Profile header -->
      <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
        <div class="px-4 py-5 sm:px-6">
          <div class="flex items-center">
            <div class="h-24 w-24 rounded-full overflow-hidden bg-gray-100">
              <img
                src="../assets/img/product-school--GajrOEN6m4-unsplash.jpg"
                alt="Profile"
                class="h-full w-full object-cover"
              />
            </div>
            <div class="ml-6">
              <h2 class="text-2xl font-bold text-gray-900">Alex Johnson</h2>
              <p class="text-sm text-gray-500">Event Enthusiast</p>
              <div class="mt-2 flex space-x-3">
                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Edit Profile
                </button>
                <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Share Profile
                </button>
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
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-2">
                      Music
                    </span>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2 mb-2">
                      Technology
                    </span>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mr-2 mb-2">
                      Food & Drink
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- Account Stats -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Account Statistics</h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">Profile activity and engagement.</p>
            </div>
            <div class="border-t border-gray-200">
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Member since</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">March 2024</dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Events hosted</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">12</dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Events attended</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">27</dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Followers</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">143</dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Following</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">89</dd>
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
              <button type="button" class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                View All
              </button>
            </div>
            <div class="border-t border-gray-200">
              <ul role="list" class="divide-y divide-gray-200">
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">Tech Conference 2025</p>
                        <div class="flex items-center text-sm text-gray-500">
                          <svg class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <p>April 15, 2025 • 9:00 AM</p>
                        </div>
                        <div class="flex items-center text-sm text-gray-500">
                          <svg class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                          </svg>
                          <p>Convention Center, San Francisco</p>
                        </div>
                      </div>
                    </div>
                    <div class="ml-2 flex-shrink-0">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Attending
                      </span>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">Spring Music Festival</p>
                        <div class="flex items-center text-sm text-gray-500">
                          <svg class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <p>April 30, 2025 • 6:00 PM</p>
                        </div>
                        <div class="flex items-center text-sm text-gray-500">
                          <svg class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                          </svg>
                          <p>Central Park, New York</p>
                        </div>
                      </div>
                    </div>
                    <div class="ml-2 flex-shrink-0">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Hosting
                      </span>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-12 w-12 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                        </svg>
                      </div>
                      <div class="ml-4">
                        <p class="text-sm font-medium text-gray-900">Foodie Networking Dinner</p>
                        <div class="flex items-center text-sm text-gray-500">
                          <svg class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                          </svg>
                          <p>May 5, 2025 • 7:30 PM</p>
                        </div>
                        <div class="flex items-center text-sm text-gray-500">
                          <svg class="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                          </svg>
                          <p>Gourmet Restaurant, Chicago</p>
                        </div>
                      </div>
                    </div>
                    <div class="ml-2 flex-shrink-0">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Attending
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">Your latest interactions with events.</p>
              </div>
              <button type="button" class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                View All
              </button>
            </div>
            <div class="border-t border-gray-200">
              <ul role="list" class="divide-y divide-gray-200">
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex space-x-3">
                    <div class="flex-shrink-0">
                      <div class="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm text-gray-800">You RSVP'd to <span class="font-medium">Tech Conference 2025</span></p>
                      <p class="text-sm text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex space-x-3">
                    <div class="flex-shrink-0">
                      <div class="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm text-gray-800">You commented on <span class="font-medium">Spring Music Festival</span></p>
                      <p class="text-sm text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex space-x-3">
                    <div class="flex-shrink-0">
                      <div class="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm text-gray-800">You created a new event <span class="font-medium">Spring Music Festival</span></p>
                      <p class="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </li>
                <li class="px-4 py-4 sm:px-6">
                  <div class="flex space-x-3">
                    <div class="flex-shrink-0">
                      <div class="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm text-gray-800">You liked <span class="font-medium">Foodie Networking Dinner</span></p>
                      <p class="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<!-- remove recent activity with general settings including 
 subscription to categories 
 notifications for events and new events in categories, 
 preferences - categories and location,
 calendar sync 
 accessibility
 
-->

<!-- <script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        name: 'Alex Johnson',
        title: 'Event Enthusiast',
        email: 'alex@example.com',
        phone: '(555) 123-4567',
        location: 'San Francisco, CA',
        memberSince: 'March 2024',
        ev -->