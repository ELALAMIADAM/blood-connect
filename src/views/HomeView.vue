<script setup lang="ts">
import { ref } from 'vue'

const featuredRequests = ref([
  {
    id: 1,
    hospital: 'City General Hospital',
    bloodType: 'O+',
    units: 3,
    urgency: 'High',
    deadline: '2024-03-20'
  },
  {
    id: 2,
    hospital: 'St. Mary\'s Medical Center',
    bloodType: 'A-',
    units: 2,
    urgency: 'Medium',
    deadline: '2024-03-22'
  }
])
</script>

<template>
  <div class="home-container">
    <section class="hero">
      <h1>Donate Blood, Save Lives</h1>
      <p>Connect with hospitals in need and make a difference in your community</p>
      <router-link to="/requests" class="cta-button">View Current Requests</router-link>
    </section>

    <section class="featured-requests">
      <h2>Urgent Requests</h2>
      <div class="requests-grid">
        <div v-for="request in featuredRequests" :key="request.id" class="request-card">
          <div class="request-header">
            <h3>{{ request.hospital }}</h3>
            <span :class="['urgency-badge', request.urgency.toLowerCase()]">
              {{ request.urgency }}
            </span>
          </div>
          <div class="request-details">
            <p><strong>Blood Type:</strong> {{ request.bloodType }}</p>
            <p><strong>Units Needed:</strong> {{ request.units }}</p>
            <p><strong>Deadline:</strong> {{ request.deadline }}</p>
          </div>
          <button class="respond-button">Respond to Request</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  color: #d32f2f;
  margin-bottom: 1rem;
}

.hero p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  color: #616161;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  background-color: #d32f2f;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #b71c1c;
}

.featured-requests {
  margin-top: 3rem;
}

.featured-requests h2 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin-bottom: 1.5rem;
}

.requests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.request-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.request-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.request-header h3 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin: 0;
}

.urgency-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
}

.urgency-badge.high {
  background-color: #ffebee;
  color: #d32f2f;
}

.urgency-badge.medium {
  background-color: #fff3e0;
  color: #f57c00;
}

.request-details {
  margin-bottom: 1.5rem;
}

.request-details p {
  margin: 0.5rem 0;
  color: #616161;
}

.respond-button {
  width: 100%;
  background-color: #388e3c;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.respond-button:hover {
  background-color: #2e7d32;
}
</style> 