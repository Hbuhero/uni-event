<template>
  <div class="min-h-screen bg-[#f9fafb] py-8">
    
      <main class="p-6 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-16">

        <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-6 !px-6 !py-6">
        
          <h2 class="text-2xl font-bold text-gray-800 mb-1">Account Details</h2>
          <p class="text-sm text-gray-500 mb-6 font-semibold">Update your personal information and how we can reach you</p>

          <div class="mb-6">
            <label class="block text-sm font-semibold text-gray-700 mb-2">Profile Picture</label>
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
            <div class="pt-2">
              <label for="firstName" class="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                v-model="user.firstName"
                class="w-full !bg-gray-50 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div >
            <div class="pt-2">
              <label for="lastName" class="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                v-model="user.lastName"
                class="w-full !bg-gray-50 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="mb-6 pt-2">
            <label for="email" class="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="user.email"
              class="w-full !bg-gray-50 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-6 pt-2">
            <label for="phone" class="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="user.phone"
              class="w-full !bg-gray-50 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="mb-6 pt-2">
            <label for="currentPassword" class="block text-sm font-semibold text-gray-700 mb-1">Current Password</label>
            <input 
              type="password" 
              id="currentPassword" 
              placeholder="Enter your current password"
              class="w-full !bg-gray-50 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 mb-8">
            <div class="pt-2">
              <label for="newPassword" class="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
              <input 
                type="password" 
                id="newPassword" 
                placeholder="Enter new password"
                class="w-full !bg-gray-50 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div class="pt-2">
              <label for="confirmPassword" class="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="Confirm new password"
                class="w-full !bg-gray-50 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div class="flex justify-end">
            <div class="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Changes
            </div>
          </div>
        </div>
        </main>
    
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
</script>
