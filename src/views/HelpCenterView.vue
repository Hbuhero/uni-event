<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Header -->
      <header class="bg-indigo-600 shadow">
        <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">Help Center</h1>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <!-- Navigation Tabs -->
        <div class="border-b border-gray-200 mb-8">
          <nav class="flex -mb-px">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                activeTab === tab.id 
                  ? 'border-indigo-500 text-indigo-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm'
              ]"
            >
              {{ tab.name }}
            </button>
          </nav>
        </div>
  
        <!-- Report Bad Event Form -->
        <div v-if="activeTab === 'report'" class="bg-white shadow rounded-lg p-6 mb-8">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Report Inappropriate Event</h2>
          <form @submit.prevent="submitReportForm">
            <div class="mb-4">
              <label for="eventUrl" class="block text-sm font-medium text-gray-700">Event URL or ID</label>
              <input
                type="text"
                id="eventUrl"
                v-model="reportForm.eventUrl"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="https://youreventapp.com/events/12345"
                required
              />
            </div>
  
            <div class="mb-4">
              <label for="reportReason" class="block text-sm font-medium text-gray-700">Reason for Report</label>
              <select
                id="reportReason"
                v-model="reportForm.reason"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="" disabled>Select a reason</option>
                <option value="inappropriate">Inappropriate content</option>
                <option value="spam">Spam or misleading</option>
                <option value="duplicate">Duplicate event</option>
                <option value="scam">Potential scam</option>
                <option value="other">Other</option>
              </select>
            </div>
  
            <div class="mb-4">
              <label for="reportDescription" class="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="reportDescription"
                v-model="reportForm.description"
                rows="4"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Please provide more details about the issue"
                required
              ></textarea>
            </div>
  
            <div class="flex justify-end">
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Report
              </button>
            </div>
          </form>
        </div>
  
        <!-- Request New Category Form -->
        <div v-if="activeTab === 'category'" class="bg-white shadow rounded-lg p-6 mb-8">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Request New Event Category</h2>
          <form @submit.prevent="submitCategoryForm">
            <div class="mb-4">
              <label for="categoryName" class="block text-sm font-medium text-gray-700">Suggested Category Name</label>
              <input
                type="text"
                id="categoryName"
                v-model="categoryForm.name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g., Tech Workshops, Outdoor Adventures"
                required
              />
            </div>
  
            <div class="mb-4">
              <label for="categoryDescription" class="block text-sm font-medium text-gray-700">Category Description</label>
              <textarea
                id="categoryDescription"
                v-model="categoryForm.description"
                rows="3"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Please describe what types of events would fall under this category"
                required
              ></textarea>
            </div>
  
            <div class="mb-4">
              <label for="categoryExamples" class="block text-sm font-medium text-gray-700">Example Events</label>
              <textarea
                id="categoryExamples"
                v-model="categoryForm.examples"
                rows="2"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="List some examples of events that would fit this category"
                required
              ></textarea>
            </div>
  
            <div class="flex justify-end">
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
  
        <!-- General Complaint Form -->
        <div v-if="activeTab === 'complaint'" class="bg-white shadow rounded-lg p-6 mb-8">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Submit General Feedback or Complaint</h2>
          <form @submit.prevent="submitComplaintForm">
            <div class="mb-4">
              <label for="complaintType" class="block text-sm font-medium text-gray-700">Type of Feedback</label>
              <select
                id="complaintType"
                v-model="complaintForm.type"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="" disabled>Select a type</option>
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="ux">User Experience Issue</option>
                <option value="payment">Payment Problem</option>
                <option value="other">Other</option>
              </select>
            </div>
  
            <div class="mb-4">
              <label for="complaintSubject" class="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                id="complaintSubject"
                v-model="complaintForm.subject"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Brief description of the issue"
                required
              />
            </div>
  
            <div class="mb-4">
              <label for="complaintDescription" class="block text-sm font-medium text-gray-700">Detailed Description</label>
              <textarea
                id="complaintDescription"
                v-model="complaintForm.description"
                rows="4"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Please provide more details about your feedback or issue"
                required
              ></textarea>
            </div>
  
            <div class="mb-4">
              <label for="complaintSteps" class="block text-sm font-medium text-gray-700">Steps to Reproduce (if applicable)</label>
              <textarea
                id="complaintSteps"
                v-model="complaintForm.steps"
                rows="3"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="If reporting a bug, please list steps to reproduce the issue"
              ></textarea>
            </div>
  
            <div class="mb-4">
              <label for="complaintContact" class="block text-sm font-medium text-gray-700">Contact Email (optional)</label>
              <input
                type="email"
                id="complaintContact"
                v-model="complaintForm.contact"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="your.email@example.com"
              />
            </div>
  
            <div class="flex justify-end">
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
  
        <!-- Success Message -->
        <div v-if="showSuccess" class="bg-green-50 border-l-4 border-green-400 p-4 mb-8">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm text-green-700">
                Thank you for your submission. Our team will review it and respond if necessary.
              </p>
            </div>
          </div>
        </div>
  
        <!-- FAQ Section -->
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">Frequently Asked Questions</h2>
          
          <div v-for="(faq, index) in faqs" :key="index" class="mb-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <button 
              @click="toggleFaq(index)"
              class="flex justify-between w-full text-left"
            >
              <span class="text-sm font-medium text-gray-900">{{ faq.question }}</span>
              <svg 
                class="h-5 w-5 text-gray-500" 
                :class="{'transform rotate-180': faq.open}"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <div v-if="faq.open" class="mt-2 text-sm text-gray-500">
              <p>{{ faq.answer }}</p>
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
        activeTab: 'report',
        showSuccess: false,
        tabs: [
          { id: 'report', name: 'Report Event' },
          { id: 'category', name: 'Request Category' },
          { id: 'complaint', name: 'General Feedback' }
        ],
        reportForm: {
          eventUrl: '',
          reason: '',
          description: ''
        },
        categoryForm: {
          name: '',
          description: '',
          examples: ''
        },
        complaintForm: {
          type: '',
          subject: '',
          description: '',
          steps: '',
          contact: ''
        },
        faqs: [
          {
            question: "How long will it take for my report to be reviewed?",
            answer: "We typically review reports within 24-48 hours. For urgent matters, please mention this in your description.",
            open: false
          },
          {
            question: "What happens after I submit a new category request?",
            answer: "Our team will evaluate all category requests monthly. If approved, you'll receive a notification and the category will be added to the platform.",
            open: false
          },
          {
            question: "Can I remain anonymous when reporting an event?",
            answer: "Yes, all reports are confidential. We don't share reporter information with event organizers or other users.",
            open: false
          },
          {
            question: "How can I check the status of my submitted feedback?",
            answer: "Currently, we don't provide status tracking for feedback submissions. For urgent matters, please contact our support team directly.",
            open: false
          }
        ]
      };
    },
    methods: {
      submitReportForm() {
        // Handle form submission logic here
        console.log('Report submitted:', this.reportForm);
        this.resetForm('report');
        this.showSuccessMessage();
      },
      submitCategoryForm() {
        // Handle form submission logic here
        console.log('Category request submitted:', this.categoryForm);
        this.resetForm('category');
        this.showSuccessMessage();
      },
      submitComplaintForm() {
        // Handle form submission logic here
        console.log('Complaint submitted:', this.complaintForm);
        this.resetForm('complaint');
        this.showSuccessMessage();
      },
      resetForm(formType) {
        if (formType === 'report') {
          this.reportForm = { eventUrl: '', reason: '', description: '' };
        } else if (formType === 'category') {
          this.categoryForm = { name: '', description: '', examples: '' };
        } else if (formType === 'complaint') {
          this.complaintForm = { type: '', subject: '', description: '', steps: '', contact: '' };
        }
      },
      showSuccessMessage() {
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      },
      toggleFaq(index) {
        this.faqs[index].open = !this.faqs[index].open;
      }
    }
  };
  </script>