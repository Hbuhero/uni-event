<template>
    <section class="speaker-schedule">
      <div class="container">
        <h2 class="section-title">Speakers & Schedule</h2>
        
        <div class="schedule-tabs">
          <div 
            v-for="(day, index) in days" 
            :key="index" 
            :class="['tab', { active: activeDay === index }]"
            @click="activeDay = index"
          >
            {{ day }}
          </div>
        </div>
        
        <div class="schedule-content">
          <div class="schedule-day" v-if="activeDay === 0">
            <div 
              v-for="(session, index) in day1Sessions" 
              :key="index" 
              class="session"
            >
              <div class="session-time">{{ session.time }}</div>
              <div class="session-content">
                <h3 class="session-title">{{ session.title }}</h3>
                <div class="speaker" v-if="session.speaker">
                  <img :src="session.speaker.image" :alt="session.speaker.name">
                  <div class="speaker-info">
                    <h4>{{ session.speaker.name }}</h4>
                    <p>{{ session.speaker.position }}</p>
                  </div>
                </div>
                <p class="session-description">{{ session.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="schedule-day" v-if="activeDay === 1">
            <div 
              v-for="(session, index) in day2Sessions" 
              :key="index" 
              class="session"
            >
              <div class="session-time">{{ session.time }}</div>
              <div class="session-content">
                <h3 class="session-title">{{ session.title }}</h3>
                <div class="speaker" v-if="session.speaker">
                  <img :src="session.speaker.image" :alt="session.speaker.name">
                  <div class="speaker-info">
                    <h4>{{ session.speaker.name }}</h4>
                    <p>{{ session.speaker.position }}</p>
                  </div>
                </div>
                <p class="session-description">{{ session.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SpeakerSchedule',
    data() {
      return {
        activeDay: 0,
        days: ['Day 1: April 15, 2025', 'Day 2: April 16, 2025'],
        day1Sessions: [
          {
            time: '09:00 - 09:30',
            title: 'Welcome & Opening Remarks',
            description: 'Kickoff of the conference with an overview of the agenda and what to expect.',
            speaker: {
              name: 'Sarah Johnson',
              position: 'Conference Chair',
              image: '@/assets/speaker1.jpg'
            }
          },
          {
            time: '09:30 - 10:30',
            title: 'Keynote: The Future of Digital Marketing',
            description: 'Exploring upcoming trends and technologies that will shape the marketing landscape.',
            speaker: {
              name: 'David Chen',
              position: 'CMO, TechGlobal',
              image: '@/assets/speaker2.jpg'
            }
          },
          {
            time: '10:45 - 11:45',
            title: 'SEO in 2025: What Really Works Now',
            description: 'Practical strategies to improve search visibility in today\'s algorithm environment.',
            speaker: {
              name: 'Emily Rodriguez',
              position: 'SEO Director, SearchPro',
              image: '@/assets/speaker3.jpg'
            }
          },
          {
            time: '12:00 - 13:00',
            title: 'Lunch Break & Networking',
            description: 'Virtual networking rooms will be available to connect with speakers and attendees.',
          }
        ],
        day2Sessions: [
          {
            time: '09:00 - 09:15',
            title: 'Day 2 Welcome',
            description: 'Brief overview of the day\'s agenda.',
            speaker: {
              name: 'Sarah Johnson',
              position: 'Conference Chair',
              image: '@/assets/speaker1.jpg'
            }
          },
          {
            time: '09:15 - 10:15',
            title: 'Content Marketing Mastery',
            description: 'Creating content that converts and builds brand authority.',
            speaker: {
              name: 'Michael Torres',
              position: 'Content Strategist, ContentLab',
              image: '@/assets/speaker4.jpg'
            }
          },
          {
            time: '10:30 - 11:30',
            title: 'Social Media Trends & Strategy',
            description: 'Leveraging emerging platforms and features to maximize engagement.',
            speaker: {
              name: 'Jessica Kim',
              position: 'Social Media Director, BrandConnect',
              image: '@/assets/speaker5.jpg'
            }
          },
          {
            time: '11:45 - 12:45',
            title: 'AI in Marketing: Practical Applications',
            description: 'How to implement AI tools to enhance your marketing efforts.',
            speaker: {
              name: 'Robert Wei',
              position: 'AI Marketing Specialist, FutureTech',
              image: '@/assets/speaker6.jpg'
            }
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .speaker-schedule {
    padding: 80px 0;
    background-color: #f9f9f9;
  }
  
  .schedule-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  
  .tab {
    padding: 15px 30px;
    background-color: white;
    cursor: pointer;
    border-radius: 30px;
    margin: 0 10px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .tab.active {
    background-color: #E54B4B;
    color: white;
  }
  
  .schedule-content {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .session {
    display: flex;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  }
  
  .session-time {
    background-color: #E54B4B;
    color: white;
    padding: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    text-align: center;
  }
  
  .session-content {
    padding: 20px;
    flex: 1;
  }
  
  .session-title {
    font-size: 18px;
    margin-bottom: 15px;
  }
  
  .speaker {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .speaker img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }
  
  .speaker-info h4 {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .speaker-info p {
    font-size: 14px;
    color: #666;
  }
  
  .session-description {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
  }
  </style>