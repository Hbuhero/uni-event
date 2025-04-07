// components/EventLocation.vue
<template>
  <section class="event-location">
    <div class="container">
      <h2 class="section-title">How To Join</h2>
      <div class="location-content">
        <div class="virtual-info">
          <div class="info-card">
            <div class="icon">
              <i class="fas fa-laptop"></i>
            </div>
            <h3>Virtual Event Platform</h3>
            <p>This event will be hosted on our secure virtual conference platform. After registration, you'll receive login details and instructions to access all sessions.</p>
          </div>
          
          <div class="info-card">
            <div class="icon">
              <i class="fas fa-headset"></i>
            </div>
            <h3>Technical Requirements</h3>
            <p>For the best experience, we recommend using Chrome or Firefox browser, a stable internet connection, and a device with a camera and microphone for interactive sessions.</p>
          </div>
          
          <div class="info-card">
            <div class="icon">
              <i class="fas fa-clock"></i>
            </div>
            <h3>Time Zones</h3>
            <p>All session times are listed in Eastern Time (ET). The platform will automatically adjust displayed times to your local time zone after login.</p>
          </div>
        </div>
        
        <div class="registration-steps">
          <h3>Registration Process</h3>
          <div class="steps">
            <div class="step" v-for="(step, index) in registrationSteps" :key="index">
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <h4>{{ step.title }}</h4>
                <p>{{ step.description }}</p>
              </div>
            </div>
          </div>
          <a href="#" class="btn btn-get-started">Register Now</a>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  name: 'EventLocation',
  data() {
    return {
      registrationSteps: [
        {
          title: 'Complete Registration',
          description: 'Fill out the registration form and select your ticket type.'
        },
        {
          title: 'Payment',
          description: 'Process payment securely through our payment gateway.'
        },
        {
          title: 'Confirmation Email',
          description: 'Receive a confirmation email with your ticket and platform access details.'
        },
        {
          title: 'Join the Event',
          description: 'Log in to the virtual platform using the credentials provided on the event day.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.event-location {
  padding: 80px 0;
}

.location-content {
  display: flex;
  gap: 40px;
}

.virtual-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
}

.icon {
  font-size: 36px;
  color: #E54B4B;
  margin-bottom: 15px;
}

.info-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.info-card p {
  font-size: 15px;
  line-height: 1.6;
  color: #666;
}

.registration-steps {
  flex: 1;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
}

.registration-steps h3 {
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
}

.steps {
  margin-bottom: 30px;
}

.step {
  display: flex;
  margin-bottom: 20px;
}

.step-number {
  background-color: #E54B4B;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 15px;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: 18px;
  margin-bottom: 5px;
}

.step-content p {
  font-size: 14px;
  color: #666;
}

.btn-get-started {
  width: 100%;
  text-align: center;
}
</style>