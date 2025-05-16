<script setup lang="ts">
import { ref } from 'vue'

const requests = ref([
  {
    id: 1,
    hospital: 'City General Hospital',
    bloodType: 'O+',
    units: 3,
    urgency: 'High',
    deadline: '2024-03-20',
    location: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 2,
    hospital: 'St. Mary\'s Medical Center',
    bloodType: 'A-',
    units: 2,
    urgency: 'Medium',
    deadline: '2024-03-22',
    location: { lat: 40.7589, lng: -73.9851 }
  }
])
</script>

<template>
  <div class="requests-container">
    <h1>Current Blood Requests</h1>
    <div class="map-container">
      <!-- Map will be implemented here -->
      <div class="map-placeholder">
        Map View Coming Soon
      </div>
    </div>
    <div class="requests-list">
      <div v-for="request in requests" :key="request.id" class="request-card">
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
  </div>
</template>

<style scoped>
.requests-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin-bottom: 2rem;
}

.map-container {
  height: 400px;
  background-color: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder {
  color: #616161;
  font-size: 1.2rem;
}

.requests-list {
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