// components/HeroBanner.vue
<template>
  <section class="hero-banner">
    <div class="container hero-container">
      <div class="hero-content">
        <div class="event-category">Virtual Event</div>
        <h1 class="event-title">Digital Marketing Conference 2025</h1>
        <div class="event-meta">
          <div class="meta-item">
            <i class="fas fa-calendar"></i>
            <span>April 15-16, 2025</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-clock"></i>
            <span>09:00 AM - 05:00 PM</span>
          </div>
          <div class="meta-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Online Event</span>
          </div>
        </div>
        <div class="hero-buttons">
          <a href="#" class="btn btn-register-event">Register Now</a>
          <a href="#" class="btn btn-outline">Learn More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.hero-banner {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('@/assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 150px 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.event-category {
  display: inline-block;
  background-color: #E54B4B;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
}

.event-title {
  font-size: 48px;
  margin-bottom: 30px;
  line-height: 1.2;
}

.event-meta {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.meta-item {
  display: flex;
  align-items: center;
  margin: 0 15px;
  font-size: 16px;
}

.meta-item i {
  margin-right: 8px;
  color: #E54B4B;
}

.hero-buttons {
  display: flex;
  justify-content: center;
}

.btn-register-event {
  margin-right: 15px;
  background-color: #E54B4B;
}

.btn-outline {
  background-color: transparent;
  border: 2px solid white;
}

.btn-outline:hover {
  background-color: white;
  color: #333;
}
</style>