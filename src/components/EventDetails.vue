<template>
    <section class="event-details">
      <div class="container">
        <div class="details-container">
          <div class="countdown-timer">
            <h3>Event Starts In:</h3>
            <div class="timer">
              <div class="time-block">
                <div class="number">{{ countdown.days }}</div>
                <div class="label">Days</div>
              </div>
              <div class="time-block">
                <div class="number">{{ countdown.hours }}</div>
                <div class="label">Hours</div>
              </div>
              <div class="time-block">
                <div class="number">{{ countdown.minutes }}</div>
                <div class="label">Minutes</div>
              </div>
              <div class="time-block">
                <div class="number">{{ countdown.seconds }}</div>
                <div class="label">Seconds</div>
              </div>
            </div>
          </div>
          <div class="event-card">
            <div class="price-tag">From $99</div>
            <h3>Registration Details</h3>
            <ul class="event-features">
              <li v-for="(feature, index) in eventFeatures" :key="index">
                <i class="fas fa-check"></i>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <a href="#" class="btn btn-full">Register Now</a>
            <p class="seats-left">Only {{ seatsLeft }} seats left!</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'EventDetails',
    data() {
      return {
        countdown: {
          days: 8,
          hours: 16,
          minutes: 42,
          seconds: 15
        },
        eventFeatures: [
          '2 days of exclusive content',
          'Access to all sessions',
          'Networking opportunities',
          'Downloadable resources',
          'Certificate of attendance',
          '30-day replay access'
        ],
        seatsLeft: 24
      }
    },
    mounted() {
      // In a real app, you would implement the countdown timer logic here
      // For demo purposes, we're using static values
    }
  }
  </script>
  
  <style scoped>
  .event-details {
    padding: 80px 0;
    background-color: #f9f9f9;
  }
  
  .details-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .countdown-timer {
    width: 48%;
  }
  
  .countdown-timer h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .timer {
    display: flex;
    gap: 20px;
  }
  
  .time-block {
    background-color: #E54B4B;
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 90px;
  }
  
  .number {
    font-size: 36px;
    font-weight: 700;
    line-height: 1;
  }
  
  .label {
    font-size: 14px;
    margin-top: 5px;
  }
  
  .event-card {
    width: 42%;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .price-tag {
    position: absolute;
    top: -15px;
    right: 30px;
    background-color: #E54B4B;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
    font-weight: 600;
  }
  
  .event-card h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .event-features {
    list-style: none;
    margin-bottom: 30px;
  }
  
  .event-features li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .event-features li i {
    color: #E54B4B;
    margin-right: 10px;
  }
  
  .btn-full {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .seats-left {
    text-align: center;
    color: #888;
    font-size: 14px;
  }
  </style>