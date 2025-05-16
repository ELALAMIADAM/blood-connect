<script setup lang="ts">
import { ref } from 'vue'

const userProfile = ref({
  name: 'John Doe',
  bloodType: 'O+',
  location: 'New York, NY',
  totalDonations: 5,
  totalVolume: 2500, // in ml
  lastDonation: '2024-02-15'
})

const donationHistory = ref([
  {
    id: 1,
    date: '2024-02-15',
    location: 'City General Hospital',
    volume: 500,
    status: 'Completed'
  },
  {
    id: 2,
    date: '2023-11-20',
    location: 'St. Mary\'s Medical Center',
    volume: 500,
    status: 'Completed'
  },
  {
    id: 3,
    date: '2023-08-15',
    location: 'City General Hospital',
    volume: 500,
    status: 'Completed'
  }
])

const milestones = [
  { level: 1, donations: 5, achieved: true },
  { level: 2, donations: 10, achieved: false },
  { level: 3, donations: 20, achieved: false },
  { level: 4, donations: 50, achieved: false }
]
</script>

<template>
  <div class="profile-container">
    <div class="profile-header">
      <div class="profile-card">
        <div class="profile-avatar">
          {{ userProfile.name.charAt(0) }}
        </div>
        <div class="profile-info">
          <h1>{{ userProfile.name }}</h1>
          <p class="blood-type">Blood Type: {{ userProfile.bloodType }}</p>
          <p class="location">{{ userProfile.location }}</p>
        </div>
      </div>
      <div class="stats-card">
        <div class="stat-item">
          <h3>Total Donations</h3>
          <p class="stat-value">{{ userProfile.totalDonations }}</p>
        </div>
        <div class="stat-item">
          <h3>Total Volume</h3>
          <p class="stat-value">{{ userProfile.totalVolume }}ml</p>
        </div>
        <div class="stat-item">
          <h3>Last Donation</h3>
          <p class="stat-value">{{ userProfile.lastDonation }}</p>
        </div>
      </div>
    </div>

    <div class="progress-section">
      <h2>Donation Progress</h2>
      <div class="milestones">
        <div
          v-for="milestone in milestones"
          :key="milestone.level"
          :class="['milestone', { achieved: milestone.achieved }]"
        >
          <div class="milestone-icon">
            <span v-if="milestone.achieved">✓</span>
            <span v-else>{{ milestone.level }}</span>
          </div>
          <div class="milestone-info">
            <h4>Level {{ milestone.level }}</h4>
            <p>{{ milestone.donations }} Donations</p>
          </div>
        </div>
      </div>
    </div>

    <div class="history-section">
      <h2>Donation History</h2>
      <div class="history-table">
        <div class="table-header">
          <span>Date</span>
          <span>Location</span>
          <span>Volume</span>
          <span>Status</span>
        </div>
        <div
          v-for="donation in donationHistory"
          :key="donation.id"
          class="table-row"
        >
          <span>{{ donation.date }}</span>
          <span>{{ donation.location }}</span>
          <span>{{ donation.volume }}ml</span>
          <span :class="['status', donation.status.toLowerCase()]">
            {{ donation.status }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-header {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.profile-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  background-color: #d32f2f;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
}

.profile-info h1 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin: 0 0 0.5rem;
}

.blood-type {
  color: #d32f2f;
  font-weight: 500;
  margin: 0.5rem 0;
}

.location {
  color: #616161;
  margin: 0;
}

.stats-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stat-item h3 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin: 0 0 0.5rem;
  font-size: 1rem;
}

.stat-value {
  color: #d32f2f;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.progress-section,
.history-section {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

h2 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin: 0 0 1.5rem;
}

.milestones {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.milestone {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.milestone.achieved {
  background-color: #e8f5e9;
}

.milestone-icon {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.milestone.achieved .milestone-icon {
  background-color: #388e3c;
  color: white;
}

.milestone-info h4 {
  margin: 0;
  color: #333;
}

.milestone-info p {
  margin: 0.25rem 0 0;
  color: #616161;
  font-size: 0.875rem;
}

.history-table {
  display: grid;
  gap: 0.5rem;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-weight: 500;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.status {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
}

.status.completed {
  background-color: #e8f5e9;
  color: #388e3c;
}
</style> 