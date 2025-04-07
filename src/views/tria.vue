<!-- Category Subscription Section -->
<template>
  <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Calendar Sync Settings</h2>

            <div class="space-y-6">
              <div>
                <h3 class="text-lg font-medium text-gray-800 mb-3">Connected Calendars</h3>
                <div class="space-y-4">
                  <div v-for="(calendar, index) in connectedCalendars" :key="`cal-${index}`"
                    class="flex items-center justify-between p-3 border border-gray-200 rounded-md">
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
                        <div
                          class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                        </div>
                      </label>

                      <button @click="removeCalendar(index)" class="text-gray-400 hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button @click="showAddCalendarModal = true"
                    class="flex items-center justify-center w-full py-2 px-4 border border-dashed border-gray-300 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-800 hover:border-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
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
                      <div
                        class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                      </div>
                    </label>
                  </div>

                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-gray-800">Automatically add new events</p>
                      <p class="text-sm text-gray-500">Add events from subscribed categories</p>
                    </div>
                    <label class="inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="calendarSettings.autoAddEvents" class="sr-only peer">
                      <div
                        class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600">
                      </div>
                    </label>
                  </div>

                  <div>
                    <label for="reminder-time" class="block text-sm font-medium text-gray-700">Default reminder
                      time</label>
                    <div class="mt-1">
                      <select id="reminder-time" v-model="calendarSettings.reminderTime"
                        class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
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
</template>







<script>
export default {

  
  data() {
    return {
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
