<!-- <template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div class="p-6 border-b border-gray-200">
        <div class="flex items-center">
          <div class="h-14 w-14 rounded-full overflow-hidden">
            <img :src="user.profileImage" alt="Profile" class="h-full w-full object-cover" />
          </div>
          <div class="ml-4">
            <h1 class="text-xl font-bold text-gray-800">User Profile</h1>
            <p class="text-sm text-gray-500">Manage your account and preferences</p>
          </div>
        </div>
      </div>

      <div class="p-1">
        <nav class="flex border-b">
          <button 
            v-for="tab in tabs" 
            :key="tab.id" 
            @click="activeTab = tab.id"
            :class="[
              'px-4 py-3 flex items-center',
              activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600 hover:text-gray-800'
            ]"
          >
            <component :is="tab.icon" class="h-5 w-5 mr-2" />
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <div class="p-6">
        <div v-if="activeTab === 'account'">
          <h2 class="text-lg font-medium text-gray-800 mb-1">Account Details</h2>
          <p class="text-sm text-gray-500 mb-6">Update your personal information and how we can reach you</p>

          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
            <div class="flex items-center">
              <div class="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
                <img :src="user.profileImage" alt="Profile" class="h-full w-full object-cover" />
              </div>
              <button class="ml-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload Image
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                v-model="user.firstName"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                v-model="user.lastName"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="mb-6">
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="user.email"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-6">
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="user.phone"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-6">
            <label for="bio" class="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea 
              id="bio" 
              v-model="user.bio"
              rows="4"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div class="mb-6">
            <label for="currentPassword" class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input 
              type="password" 
              id="currentPassword" 
              placeholder="Enter your current password"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
            <div>
              <label for="newPassword" class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input 
                type="password" 
                id="newPassword" 
                placeholder="Enter new password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirm new password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="flex justify-end">
            <button class="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'account',
      tabs: [
        { id: 'account', name: 'Account', icon: 'UserIcon' },
        { id: 'notifications', name: 'Notifications', icon: 'BellIcon' },
        { id: 'categories', name: 'Categories', icon: 'TagIcon' },
        { id: 'subscriptions', name: 'Subscriptions', icon: 'MailIcon' },
      ],
      user: {
        profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        phone: '+1 555 123 4567',
        bio: 'Event enthusiast and community organizer.'
      }
    }
  },
  components: {
    UserIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      `
    },
    BellIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      `
    },
    TagIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      `
    },
    MailIcon: {
      template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      `
    }
  }
}
</script> -->

<!-- <template>
    <div class="min-h-screen bg-gray-50 py-8">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <!-- Navigation Tabs 
        <div class="p-1">
          <nav class="flex border-b px-4">
            <button 
              v-for="tab in tabs" 
              :key="tab.id" 
              @click="activeTab = tab.id"
              :class="[
                'px-4 py-3 flex items-center text-sm',
                activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600 hover:text-gray-800'
              ]"
            >
              <component :is="tab.icon" class="h-4 w-4 mr-2" />
              {{ tab.name }}
            </button>
          </nav>
        </div>
  
        <!-- Notification Settings Content -
        <div class="p-6">
          <div v-if="activeTab === 'notifications'">
            <h2 class="text-lg font-bold text-gray-800 mb-1">Notification Settings</h2>
            <p class="text-sm text-gray-500 mb-6">Customize how and when you receive notifications</p>
  
            <!-- Email Notifications Section 
            <div class="mb-8">
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <MailIcon class="h-5 w-5 mr-2 text-gray-600" />
                  <h3 class="font-medium text-gray-800">Email Notifications</h3>
                </div>
                <div class="px-3 py-1 text-xs text-white bg-gray-800 rounded-full">Enabled</div>
              </div>
  
              <div class="space-y-4">
                <div v-for="(option, index) in emailNotifications" :key="index" class="flex justify-between items-center py-2 border-b border-gray-100">
                  <div>
                    <p class="text-sm font-medium text-gray-700">{{ option.title }}</p>
                    <p class="text-xs text-gray-500">{{ option.description }}</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="option.enabled" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
  
            <!-- Push Notifications Section 
            <div class="mb-8">
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <BellIcon class="h-5 w-5 mr-2 text-gray-600" />
                  <h3 class="font-medium text-gray-800">Push Notifications</h3>
                </div>
                <div class="px-3 py-1 text-xs text-white bg-gray-800 rounded-full">Enabled</div>
              </div>
  
              <div class="space-y-4">
                <div v-for="(option, index) in pushNotifications" :key="index" class="flex justify-between items-center py-2 border-b border-gray-100">
                  <div>
                    <p class="text-sm font-medium text-gray-700">{{ option.title }}</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" v-model="option.enabled" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>
  
            <!-- Email Digest Frequency 
            <div class="mb-8">
              <h3 class="font-medium text-gray-800 mb-4">Email Digest Frequency</h3>
              <div class="flex space-x-4">
                <button
                  v-for="(option, index) in digestFrequencies"
                  :key="index"
                  @click="selectedDigestFrequency = option.value"
                  :class="[
                    'px-4 py-2 text-sm font-medium rounded',
                    selectedDigestFrequency === option.value 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  ]"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>
  
            <!-- Save Button 
            <div class="flex justify-end">
              <button class="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
   -->
  <!-- <script>
  export default {
    data() {
      return {
        activeTab: 'notifications',
        tabs: [
          { id: 'account', name: 'Account', icon: 'UserIcon' },
          { id: 'notifications', name: 'Notifications', icon: 'BellIcon' },
          { id: 'categories', name: 'Categories', icon: 'TagIcon' },
          { id: 'subscriptions', name: 'Subscriptions', icon: 'MailIcon' },
        ],
        emailNotifications: [
          {
            title: 'New events in your area',
            description: 'Receive notifications when new events are added in categories you follow',
            enabled: true
          },
          {
            title: 'Event reminders',
            description: 'Get reminders about upcoming events you\'ve shown interest in',
            enabled: true
          },
          {
            title: 'Feedback requests',
            description: 'Receive requests for feedback after attending events',
            enabled: true
          },
          {
            title: 'Event changes or cancellations',
            description: 'Be notified when events you\'re interested in change details or get cancelled',
            enabled: true
          },
          {
            title: 'Marketing and promotions',
            description: 'Receive updates about special offers and new features',
            enabled: false
          }
        ],
        pushNotifications: [
          {
            title: 'New events in your area',
            enabled: true
          },
          {
            title: 'Event reminders',
            enabled: true
          },
          {
            title: 'Feedback requests',
            enabled: false
          },
          {
            title: 'Event changes or cancellations',
            enabled: true
          }
        ],
        digestFrequencies: [
          { label: 'Real-time', value: 'real-time' },
          { label: 'Daily Digest', value: 'daily' },
          { label: 'Weekly Digest', value: 'weekly' }
        ],
        selectedDigestFrequency: 'daily'
      }
    },
    components: {
      UserIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        `
      },
      BellIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        `
      },
      TagIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        `
      },
      MailIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        `
      }
    }
  }
  </script> -->

  <template>
    <div class="min-h-screen bg-gray-50">
      <!-- Navigation Tabs -->
      <div class="p-1 bg-gray-100">
        <nav class="flex max-w-4xl mx-auto">
          <button 
            v-for="tab in tabs" 
            :key="tab.id" 
            @click="activeTab = tab.id"
            :class="[
              'px-4 py-3 flex items-center text-sm',
              activeTab === tab.id ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'
            ]"
          >
            <component :is="tab.icon" class="h-4 w-4 mr-2" />
            {{ tab.name }}
          </button>
        </nav>
      </div>
  
      <!-- Main Content -->
      <div class="max-w-4xl mx-auto mt-6 bg-white rounded-lg shadow p-6">
        <div v-if="activeTab === 'categories'">
          <h2 class="text-xl font-bold text-gray-800 mb-1">Event Category Preferences</h2>
          <p class="text-sm text-gray-500 mb-6">Select the categories of events you're interested in</p>
  
          <!-- Search Box -->
          <div class="mb-8">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon class="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search for categories..." 
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                v-model="searchQuery"
              />
            </div>
          </div>
  
          <!-- Selected Categories -->
          <div class="mb-8">
            <h3 class="text-md font-semibold text-gray-700 mb-3">Your Selected Categories</h3>
            <div class="flex flex-wrap gap-2">
              <div 
                v-for="category in selectedCategories" 
                :key="category"
                class="flex items-center bg-gray-100 rounded-full px-4 py-1 text-sm"
              >
                {{ category }}
                <button @click="removeCategory(category)" class="ml-2 text-gray-500 hover:text-gray-700">
                  <XIcon class="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
  
          <!-- Divider -->
          <div class="border-t border-gray-200 my-6"></div>
  
          <!-- Personalization Settings -->
          <div class="mb-6">
            <h3 class="text-md font-semibold text-gray-700 mb-4">Personalization Settings</h3>
            
            <div class="space-y-4">
              <!-- Location-based Recommendations -->
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-sm font-medium text-gray-700">Location-based recommendations</p>
                  <p class="text-xs text-gray-500">Show events near my current location</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="locationBased" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
  
              <!-- Past Event History -->
              <div class="flex justify-between items-center">
                <div>
                  <p class="text-sm font-medium text-gray-700">Past event history</p>
                  <p class="text-xs text-gray-500">Use my event history for better recommendations</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="useHistory" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
  
          <!-- Save Button -->
          <div class="flex justify-end">
            <button class="px-4 py-2 bg-gray-900 text-white font-medium rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <!-- <script>
  export default {
    data() {
      return {
        activeTab: 'categories',
        tabs: [
          { id: 'account', name: 'Account', icon: 'UserIcon' },
          { id: 'notifications', name: 'Notifications', icon: 'BellIcon' },
          { id: 'categories', name: 'Categories', icon: 'TagIcon' },
          { id: 'subscriptions', name: 'Subscriptions', icon: 'MailIcon' },
        ],
        searchQuery: '',
        selectedCategories: ['Music', 'Technology', 'Sports', 'Food & Drink'],
        locationBased: true,
        useHistory: true
      }
    },
    methods: {
      removeCategory(category) {
        this.selectedCategories = this.selectedCategories.filter(cat => cat !== category);
      }
    },
    components: {
      UserIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        `
      },
      BellIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        `
      },
      TagIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
        `
      },
      MailIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        `
      },
      SearchIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        `
      },
      XIcon: {
        template: `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        `
      }
    }
  }
  </script> -->