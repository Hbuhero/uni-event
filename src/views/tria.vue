<!-- Category Subscription Section -->
 <template>
  <div class="min-h-screen bg-gray-50">
    
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
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Category Subscriptions</h2>
    
    <div class="space-y-4">
      <div v-for="(category, index) in categories" :key="index" class="flex items-center justify-between p-3 border border-gray-200 rounded-md">
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center" :class="category.bgColor">
            <component :is="category.icon" class="h-5 w-5 text-white" />
          </div>
          <div class="ml-3">
            <h3 class="font-medium text-gray-800">{{ category.name }}</h3>
            <p class="text-sm text-gray-500">{{ category.description }}</p>
          </div>
        </div>
        
        <div>
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" v-model="category.subscribed" class="sr-only peer">
            <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>
      </div>
      
      <div class="mt-4">
        <button class="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Discover more categories
        </button>
      </div>
    </div>
          </div>

          

          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Calendar Sync Settings</h2>
    
    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Connected Calendars</h3>
        <div class="space-y-4">
          <div v-for="(calendar, index) in connectedCalendars" :key="`cal-${index}`" class="flex items-center justify-between p-3 border border-gray-200 rounded-md">
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full flex items-center justify-center" :class="calendar.bgColor">
                <component :is="calendar.icon" class="h-5 w-5 text-white" />
              </div>
              <div class="ml-3">
                <h3 class="font-medium text-gray-800">{{ calendar.name }}</h3>
                <p class="text-sm text-gray-500">{{ calendar.email }}</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="calendar.active" class="sr-only peer">
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              </label>
              
              <button @click="removeCalendar(index)" class="text-gray-400 hover:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
          
          <button @click="showAddCalendarModal = true" class="flex items-center justify-center w-full py-2 px-4 border border-dashed border-gray-300 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:border-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Connect a calendar
          </button>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Event Sync Settings</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-800">Event reminders</p>
              <p class="text-sm text-gray-500">Get notified before events</p>
            </div>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="calendarSettings.eventReminders" class="sr-only peer">
              <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div class="flex items-center justify-between">
            <div>
              <p class="text-gray-800">Automatically add new events</p>
              <p class="text-sm text-gray-500">Add events from subscribed categories</p>
            </div>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" v-model="calendarSettings.autoAddEvents" class="sr-only peer">
              <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div>
            <label for="reminder-time" class="block text-sm font-medium text-gray-700">Default reminder time</label>
            <div class="mt-1">
              <select id="reminder-time" v-model="calendarSettings.reminderTime" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="15">15 minutes before</option>
                <option value="30">30 minutes before</option>
                <option value="60">1 hour before</option>
                <option value="120">2 hours before</option>
                <option value="1440">1 day before</option>
              </select>
            </div>
          </div>
        </div>
      </div>
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
          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Notification Settings</h2>
    
    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Events</h3>
        <div class="space-y-3">
          <div v-for="(notification, index) in eventNotifications" :key="`event-${index}`" class="flex items-center justify-between">
            <div>
              <p class="text-gray-800">{{ notification.name }}</p>
              <p class="text-sm text-gray-500">{{ notification.description }}</p>
            </div>
            <div class="flex items-center space-x-4">
              <div v-for="(channel, cIndex) in notification.channels" :key="`channel-${cIndex}`" class="flex items-center">
                <input :id="`${index}-${cIndex}`" type="checkbox" v-model="channel.enabled" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <label :for="`${index}-${cIndex}`" class="ml-2 text-sm text-gray-700">{{ channel.name }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Subscribed Categories</h3>
        <div class="space-y-3">
          <div v-for="(notification, index) in categoryNotifications" :key="`cat-${index}`" class="flex items-center justify-between">
            <div>
              <p class="text-gray-800">{{ notification.name }}</p>
              <p class="text-sm text-gray-500">{{ notification.description }}</p>
            </div>
            <div class="flex items-center space-x-4">
              <div v-for="(channel, cIndex) in notification.channels" :key="`channel-${cIndex}`" class="flex items-center">
                <input :id="`cat-${index}-${cIndex}`" type="checkbox" v-model="channel.enabled" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
                <label :for="`cat-${index}-${cIndex}`" class="ml-2 text-sm text-gray-700">{{ channel.name }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Category Preferences</h2>
    
    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Display Options</h3>
        <div class="space-y-3">
          <div class="flex items-center">
            <input id="show-all" type="radio" v-model="categoryDisplayOption" value="all" class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
            <label for="show-all" class="ml-2 block text-sm text-gray-700">Show all categories</label>
          </div>
          <div class="flex items-center">
            <input id="show-subscribed" type="radio" v-model="categoryDisplayOption" value="subscribed" class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
            <label for="show-subscribed" class="ml-2 block text-sm text-gray-700">Show only subscribed categories</label>
          </div>
          <div class="flex items-center">
            <input id="show-recommended" type="radio" v-model="categoryDisplayOption" value="recommended" class="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500">
            <label for="show-recommended" class="ml-2 block text-sm text-gray-700">Show recommended categories</label>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Content Preferences</h3>
        <div class="space-y-3">
          <div class="flex items-center">
            <input id="content-all" type="checkbox" v-model="contentPreferences.showAll" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
            <label for="content-all" class="ml-2 block text-sm text-gray-700">Show all content types</label>
          </div>
          <div class="flex items-center">
            <input id="content-articles" type="checkbox" v-model="contentPreferences.articles" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
            <label for="content-articles" class="ml-2 block text-sm text-gray-700">Articles</label>
          </div>
          <div class="flex items-center">
            <input id="content-videos" type="checkbox" v-model="contentPreferences.videos" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
            <label for="content-videos" class="ml-2 block text-sm text-gray-700">Videos</label>
          </div>
          <div class="flex items-center">
            <input id="content-events" type="checkbox" v-model="contentPreferences.events" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500">
            <label for="content-events" class="ml-2 block text-sm text-gray-700">Events</label>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Content Sorting</h3>
        <div class="relative">
          <select v-model="contentSorting" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="recent">Most Recent</option>
            <option value="popular">Most Popular</option>
            <option value="relevant">Most Relevant</option>
          </select>
        </div>
      </div>
    </div>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <h2 class="text-xl font-semibold text-gray-800 mb-4">Accessibility</h2>
    
    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Visual Settings</h3>
        <div class="space-y-4">
          <div>
            <label for="font-size" class="block text-sm font-medium text-gray-700">Font Size</label>
            <div class="mt-1 flex items-center">
              <button @click="decreaseFontSize" class="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                </svg>
              </button>
              <div class="mx-4 w-full">
                <input type="range" id="font-size" v-model="accessibility.fontSize" min="1" max="5" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
              </div>
              <button @click="increaseFontSize" class="p-2 rounded-md bg-gray-100 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <p class="text-sm text-gray-500 mt-1">Font size: {{ fontSizeLabels[accessibility.fontSize - 1] }}</p>
          </div>
          
          <div>
            <label for="contrast" class="block text-sm font-medium text-gray-700">Contrast</label>
            <div class="mt-1">
              <select id="contrast" v-model="accessibility.contrast" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="normal">Normal</option>
                <option value="high">High Contrast</option>
              </select>
            </div>
          </div>
          
          <div>
            <label for="theme" class="block text-sm font-medium text-gray-700">Theme</label>
            <div class="mt-1">
              <select id="theme" v-model="accessibility.theme" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System Default</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Motion & Animation</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label for="reduce-motion" class="text-sm text-gray-700">Reduce motion</label>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" id="reduce-motion" v-model="accessibility.reduceMotion" class="sr-only peer">
              <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div class="flex items-center justify-between">
            <label for="disable-animations" class="text-sm text-gray-700">Disable animations</label>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" id="disable-animations" v-model="accessibility.disableAnimations" class="sr-only peer">
              <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-lg font-medium text-gray-800 mb-3">Reading Support</h3>
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label for="dyslexia-font" class="text-sm text-gray-700">Use dyslexia-friendly font</label>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" id="dyslexia-font" v-model="accessibility.dyslexiaFont" class="sr-only peer">
              <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div class="flex items-center justify-between">
            <label for="screen-reader" class="text-sm text-gray-700">Screen reader optimization</label>
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" id="screen-reader" v-model="accessibility.screenReader" class="sr-only peer">
              <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template> 







<script>
export default {
  
  components: {
    'svg-technology': {
      template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><line x1="9" y1="9" x2="9" y2="9"></line><line x1="15" y1="9" x2="15" y2="9"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>`
    },
    'svg-design': {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      `
    },
    'svg-business': {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      `
    },
    'svg-science': {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      `
     }
  },
  data() {
    return {
      // Category Subscription
      categories: [
        { 
          name: 'Technology', 
          description: 'Latest tech news and updates', 
          subscribed: true, 
          bgColor: 'bg-blue-600',
          icon: 'svg-technology'
        },
        { 
          name: 'Design', 
          description: 'UI/UX and graphic design content', 
          subscribed: true, 
          bgColor: 'bg-purple-600',
          icon: 'svg-design'
        },
        { 
          name: 'Business', 
          description: 'Business strategy and market trends', 
          subscribed: false, 
          bgColor: 'bg-green-600',
          icon: 'svg-business'
        },
        { 
          name: 'Science', 
          description: 'Scientific discoveries and research', 
          subscribed: false, 
          bgColor: 'bg-red-600',
          icon: 'svg-science'
        }
      ],
      
      // Notification Settings
      eventNotifications: [
        { 
          name: 'Event Reminders', 
          description: 'Get notifications before events start',
          channels: [
            { name: 'Email', enabled: true },
            { name: 'Push', enabled: true },
            { name: 'SMS', enabled: false }
          ]
        },
        { 
          name: 'Event Updates', 
          description: 'Be notified when event details change',
          channels: [
            { name: 'Email', enabled: true },
            { name: 'Push', enabled: false },
            { name: 'SMS', enabled: false }
          ]
        },
        { 
          name: 'New Events', 
          description: 'Learn about new events in your area',
          channels: [
            { name: 'Email', enabled: true },
            { name: 'Push', enabled: false },
            { name: 'SMS', enabled: false }
          ]
        }
      ],
      
      categoryNotifications: [
        { 
          name: 'New Content', 
          description: 'Get notified when new content is published',
          channels: [
            { name: 'Email', enabled: true },
            { name: 'Push', enabled: true },
            { name: 'SMS', enabled: false }
          ]
        },
        { 
          name: 'Weekly Digest', 
          description: 'Receive a weekly summary of top content',
          channels: [
            { name: 'Email', enabled: true },
            { name: 'Push', enabled: false },
            { name: 'SMS', enabled: false }
          ]
        }
      ],
      
      // Category Preferences
      categoryDisplayOption: 'all',
      contentPreferences: {
        showAll: true,
        articles: true,
        videos: true,
        events: true
      },
      contentSorting: 'recent',
      
      // Accessibility
      accessibility: {
        fontSize: 3,
        contrast: 'normal',
        theme: 'system',
        reduceMotion: false,
        disableAnimations: false,
        dyslexiaFont: false,
        screenReader: false
      },
      fontSizeLabels: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
      
      // Calendar Sync
      connectedCalendars: [
        {
          name: 'Google Calendar',
          email: 'user@gmail.com',
          active: true,
          bgColor: 'bg-red-500',
          icon: 'svg-google'
        },
        {
          name: 'Outlook Calendar',
          email: 'user@outlook.com',
          active: false,
          bgColor: 'bg-blue-500',
          icon: 'svg-outlook'
        }
      ],
      calendarSettings: {
        eventReminders: true,
        autoAddEvents: false,
        reminderTime: '30'
      },
      showAddCalendarModal: false
    }
  },
}
</script>
    <!-- // ,
    // 'svg-google': {
    //   template: `
    //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    //       <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect> -->