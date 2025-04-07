<template>

<div class="min-h-screen bg-[#f9fafb] py-8">

  <div class="p-6 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 mt-16 ">
    <h1 class="text-2xl font-bold text-gray-900 tracking-wide">Create New Event</h1>
    <p class="text-gray-600 mb-8 text-md">Fill out the form below to create your event</p>

    <form class="space-y-6 ">

      <div class=" border rounded-2xl !p-4 mb-6 bg-white">
        <div class="!py-2" >
          <h2 class="text-xl font-bold text-gray-900 tracking-wide">Event Details</h2>
          <p class="text-gray-600 mb-3 mt-1 text-sm font-light">Basic information about your event</p>
        </div>
        <!-- Event Title -->
          <div class="!py-2 mb-2" >
          <label for="eventTitle" class="block text-sm font-medium text-gray-700 !py-1">
            Event Title <span class="text-red-500">*</span>
          </label>
          <input type="text" id="eventTitle" v-model="event.title" required
            class="placeholder mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter event title">
        </div>

        <!-- Description -->
        <div class="!py-2 mb-2" >
          <label for="eventDescription" class="block text-sm font-medium text-gray-700 !py-1">
            Description
          </label>
          <textarea id="eventDescription" v-model="event.description" rows="4"
            class="placeholder mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Tell people more about your event..."></textarea>
        </div>

        <!-- Event Image -->
        <div class="!py-2 mb-2" >
          <label for="eventImage" class="block text-sm font-medium text-gray-700 !py-1">
            Event Image <span class="text-red-500">*</span>
          </label>
          <div @click="$refs.fileInput.click()"
            class="bg-slate-300/20 mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50">
            <div v-if="!imagePreview" class="space-y-1 text-center">
              <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="flex text-sm text-gray-600">
                <p class="pl-1">Click to upload an image or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
            <img v-else :src="imagePreview" class="h-40 object-contain" alt="Event image preview">
            <input ref="fileInput" type="file" id="eventImage" @change="handleImageUpload" accept="image/*"
              class="hidden" required>
          </div>
        </div>

        <!-- Category -->
        <div class="!py-2">
          <label for="eventCategory" class="block text-sm font-medium text-gray-700 !py-1">
            Category <span class="text-red-500">*</span>
          </label>
          <select id="eventCategory" v-model="event.category" required
            class="placeholder mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option value="" disabled class="text-gray-400 text-sm">Select a category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div>
      </div>

      <!-- Host/Organizer -->
      <div class="border rounded-2xl !p-4 mb-6 bg-white">
        <div class="" >
          <h2 class="text-xl font-bold text-gray-900 tracking-wide">Organizer Details</h2>
          <p class="text-gray-600 mb-3 mt-1 text-sm font-light">Basic information about the organizer</p>
        </div>
        <div class="!py-2">
          <label for="eventOrganizer" class="block text-sm font-medium text-gray-700 !py-1">
            Host / Organizer <span class="text-red-500">*</span>
          </label>
          <input type="text" id="eventOrganizer" v-model="event.organizer" required
            class=" placeholder mt-1 block w-full border border-gray-300 rounded-md shadow-sm !py-2 !px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Who is organizing this event?">
        </div>

        <div class="!py-2">
          <label for="eventOrganizer" class="block text-sm font-medium text-gray-700 !py-1">
            Official Organizer Website <span class="text-red-500">*</span>
          </label>
          <input type="text" id="eventOrganizer" v-model="event.organizer" required
            class=" placeholder mt-1 block w-full border border-gray-300 rounded-md shadow-sm !py-2 !px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Who is organizing this event?">
        </div>
      </div>

      <div class="border rounded-2xl !p-4 mb-4 bg-white">
        <div class="" >
          <h2 class="text-xl font-bold text-gray-900 tracking-wide">Location, Date & Time</h2>
          <p class="text-gray-600 mb-3 mt-1 text-sm font-light">Where and when will the event take place?</p>
        </div>
        <!-- Date and Time -->
        <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div class="!py-2">
            <label for="eventDate" class="block text-sm font-medium text-gray-700 ">
              Date <span class="text-red-500">*</span>
            </label>
            <Datepicker v-model="event.date" placeholder="Select date"
              class="placeholder mt-1 block w-full border border-gray-300 rounded-md shadow-sm !py-2 !px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          
          <div class="!py-2">
            <label for="eventTime" class="block text-sm font-medium text-gray-700">
              Time
            </label>
            <Datepicker :clearable="false" :disableDates="true" :startingView="'time'" :minimumView="'time'" :enable-time-picker="true" :is-24="true" placeholder="Select time" class="placeholder mt-1 block w-full/2 border border-gray-300 rounded-md shadow-sm !py-2 !px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              
          </div>
        </div>

        <!-- Location -->
         <div class="!py-2">
        <label for="eventLocation" class="block text-sm font-medium text-gray-700 !py-1">
          Location <span class="text-red-500">*</span>
        </label>
        <input type="text" id="eventLocation" v-model="event.location" required
          class="placeholder mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Where will your event take place?">
        </div>
      </div>


      <!-- Action Buttons -->
      <div class="flex justify-end space-x-3 pt-4 gap-4">
        <div type="button" @click="resetForm"
          class="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cancel
      </div>
        <div type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create Event
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<script setup>
import Datepicker from 'vue3-datepicker';

import { ref } from 'vue';

const event = ref({
  title: '',
  category: '',
  organizer: '',
  date: '',
  time: '',
  location: '',
  description: ''
});

const categories = ref([
  { id: 'music', name: 'Music' },
  { id: 'sports', name: 'Sports' },
  { id: 'arts', name: 'Arts & Theater' },
  { id: 'conference', name: 'Conference' },
  { id: 'workshop', name: 'Workshop' },
  { id: 'networking', name: 'Networking' },
  { id: 'community', name: 'Community' },
  { id: 'other', name: 'Other' }
]);

const imagePreview = ref(null);

const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const submitForm = () => {
  console.log('Event data to submit:', event.value);
  // Here you would typically send this data to your backend API
  alert('Event created successfully!');
};

const resetForm = () => {
  event.value = {
    title: '',
    category: '',
    organizer: '',
    date: '',
    time: '',
    location: '',
    description: ''
  };
  imagePreview.value = null;
};



</script>

<style lang="scss" scoped></style>