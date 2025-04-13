<template>
  <div class="space-y-6 max-w-7xl mx-auto !py-6 sm:px-6 lg:!px-8">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">Settings</h1>
    </div>

    <div class="card border">
      <div class="card-header">
        <div class=" flex items-center gap-2">
          <v-icon icon="mdi-bell-badge-outline" />
          <div>
            <span class="card-title">Notification Preference</span>
            <p class="card-description">
              Manage how you receive notifications about events
            </p>
          </div>
        </div>

      </div>

      <div class="card-content space-y-6">
        <div class="space-y-4">
          <div class="flex items-center gap-2 mb-3">
            <v-icon icon="mdi-email-outline" />
            <h3 class="text-lg font-medium">Email Notifications</h3>
          </div>

          <div class="space-y-4 rounded-lg border">
            <div class="flex items-center justify-between !px-4 pt-6 ">
              <div class=" pr-6">
                <div class="text-base label">
                  Upcoming Event Reminders
                </div>
                <p class="text-sm text-gray-500">
                  Receive email reminders about your upcoming events
                </p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                </div>
              </label>
            </div>
            <div class="flex items-center justify-between !px-4 pt-6 pb-4">
              <div class="pr-6">
                <div class="text-base label">
                  New Events in Subscribed Categories
                </div>
                <p class="text-sm text-gray-500">
                  Get notified when new events are added to categories you follow
                </p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[!2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center gap-2 mt-10 mb-4">
            <v-icon icon="mdi-bell-badge-outline" />
            <h3 class="text-lg font-medium">In-App Notifications</h3>
          </div>

          <div class="space-y-4 rounded-lg border ">
            <div class="flex items-center justify-between !px-4 pt-6">
              <div>
                <div class="text-base label">
                  Upcoming Event Reminders
                </div>
                <p class="text-sm text-gray-500">
                  Receive in-app reminders about your upcoming events
                </p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                </div>
              </label>
            </div>
            <div class="flex items-center justify-between !px-4 pt-6 pb-4">
              <div>
                <div class="text-base label">
                  New Events in Subscribed Categories
                </div>
                <p class="text-sm text-gray-500">
                  Get notified when new events are added to categories you follow
                </p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="isEnabled" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[!2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>


</template>

<script setup>
import { ref } from 'vue';

const isEnabled = ref()
</script>
