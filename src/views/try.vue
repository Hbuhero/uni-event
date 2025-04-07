// App.vue
<template>
  <div class="virtual-event-app">
    <!-- Header Component -->
    
    
    <!-- Hero Banner Component -->
    <HeroBanner />
    
    <!-- Event Details Component -->
    <EventDetails />
    
    <!-- Event Description Component -->
    <EventDescription />
    
    <!-- Speaker Schedule Component -->
    <SpeakerSchedule />
    
    <!-- Event Location Component -->
    <EventLocation />
    
    <!-- Footer Component -->
    
  </div>
</template>

// App.vue


<!-- <script>
export default {
  name: 'VirtualEventPage',
  data() {
    return {
      event: {
        title: 'Virtual Event',
        date: 'September 30, 2028',
        time: '7:00 am - 7:00 pm',
        location: 'Online',
        day: '30',
        weekday: 'Saturday',
        price: '$50.00'
      }
    }
  }
}
</script> -->

<script setup>
import HeroBanner from '../components/HeroBanner.vue';
import EventDetails from '../components/EventDetails.vue';
import EventDescription from '../components/EventDescription.vue';
import SpeakerSchedule from '../components/SpeakerSchedule.vue';
import EventLocation from '../components/EventLocation.vue';


</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #E54B4B;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #d43e3e;
  transform: translateY(-2px);
}
</style> -->





// components/EventDetails.vue


// components/EventDescription.vue


// components/SpeakerSchedule.vue




