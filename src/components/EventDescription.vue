<template>
    <section class="event-description">
      <div class="container">
        <h2 class="section-title">About This Event</h2>
        <div class="description-content">
          <div class="main-content">
            <p v-for="(paragraph, index) in paragraphs" :key="index" class="description-paragraph">
              {{ paragraph }}
            </p>
            <div class="event-highlights">
              <h3>Event Highlights</h3>
              <ul>
                <li v-for="(highlight, index) in highlights" :key="index">
                  <i class="fas fa-star"></i>
                  <span>{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="sidebar">
            <div class="organizer-info">
              <h3>Organizer</h3>
              <div class="organizer">
                <img src="../assets/img/headway-F2KRf_QfCqw-unsplash.jpg" alt="Organizer Logo">
                <div>
                  <h4>Digital Marketing Association</h4>
                  <p>Leading organization in digital marketing education and networking.</p>
                  <a href="#" class="organizer-link">View Profile</a>
                </div>
              </div>
            </div>
            <div class="share-event">
              <h3>Share This Event</h3>
              <div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'EventDescription',
    data() {
      return {
        paragraphs: [
          'Join us for the most anticipated Digital Marketing Conference of 2025! This virtual event brings together industry leaders, innovators, and marketers from around the globe to share insights, strategies, and the latest trends in digital marketing.',
          'Over the course of two days, you\'ll have access to keynote presentations, interactive workshops, panel discussions, and networking opportunities—all from the comfort of your home or office. Whether you\'re a seasoned professional or just starting your marketing journey, this conference offers valuable content for every skill level.',
          'Our expert speakers will cover topics including SEO optimization, social media marketing, content strategy, data analytics, AI in marketing, and much more. Don\'t miss this opportunity to expand your knowledge, connect with peers, and stay ahead in the rapidly evolving world of digital marketing.'
        ],
        highlights: [
          '20+ expert speakers from leading companies',
          'Interactive workshops and live Q&A sessions',
          'Virtual networking opportunities',
          'Access to exclusive resources and tools',
          'Certificate of participation',
          '30-day access to session recordings'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .event-description {
    padding: 80px 0;
  }
  
  .description-content {
    display: flex;
    gap: 40px;
  }
  
  .main-content {
    flex: 2;
  }
  
  .description-paragraph {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.8;
  }
  
  .event-highlights {
    margin-top: 40px;
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
  }
  
  .event-highlights h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .event-highlights ul {
    list-style: none;
  }
  
  .event-highlights li {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .event-highlights li i {
    color: #E54B4B;
    margin-right: 10px;
  }
  
  .sidebar {
    flex: 1;
  }
  
  .organizer-info, .share-event {
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  
  .organizer-info h3, .share-event h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .organizer {
    display: flex;
    align-items: center;
  }
  
  .organizer img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
  }
  
  .organizer h4 {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .organizer p {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }
  
  .organizer-link {
    color: #E54B4B;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }
  
  .social-icons {
    display: flex;
  }
  
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    margin-right: 10px;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .social-icon:hover {
    background-color: #E54B4B;
    color: white;
  }
  </style>