<script setup lang="ts">
import { ref } from 'vue'

const userPoints = ref(1500)

const rewards = ref([
  {
    id: 1,
    name: 'Movie Tickets',
    description: '2 tickets to any movie theater',
    points: 500,
    image: '🎬'
  },
  {
    id: 2,
    name: 'Coffee Shop Gift Card',
    description: '$20 gift card to your favorite coffee shop',
    points: 300,
    image: '☕'
  },
  {
    id: 3,
    name: 'Restaurant Voucher',
    description: '$50 voucher for a nice dinner',
    points: 1000,
    image: '🍽️'
  },
  {
    id: 4,
    name: 'Shopping Mall Gift Card',
    description: '$100 gift card to your local mall',
    points: 2000,
    image: '🛍️'
  }
])

const showRedeemModal = ref(false)
const selectedReward = ref(null)

const openRedeemModal = (reward) => {
  selectedReward.value = reward
  showRedeemModal.value = true
}

const closeRedeemModal = () => {
  showRedeemModal.value = false
  selectedReward.value = null
}

const redeemReward = () => {
  if (selectedReward.value && userPoints.value >= selectedReward.value.points) {
    userPoints.value -= selectedReward.value.points
    // TODO: Implement actual redemption logic
    closeRedeemModal()
  }
}
</script>

<template>
  <div class="rewards-container">
    <div class="rewards-header">
      <div class="points-card">
        <h2>Your Points</h2>
        <p class="points-value">{{ userPoints }}</p>
        <p class="points-info">Earn points with each donation!</p>
      </div>
    </div>

    <div class="rewards-catalog">
      <h2>Available Rewards</h2>
      <div class="rewards-grid">
        <div
          v-for="reward in rewards"
          :key="reward.id"
          class="reward-card"
          :class="{ 'disabled': userPoints < reward.points }"
        >
          <div class="reward-emoji">{{ reward.image }}</div>
          <h3>{{ reward.name }}</h3>
          <p class="reward-description">{{ reward.description }}</p>
          <div class="reward-footer">
            <span class="points-cost">{{ reward.points }} points</span>
            <button
              class="redeem-button"
              :disabled="userPoints < reward.points"
              @click="openRedeemModal(reward)"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Redeem Modal -->
    <div v-if="showRedeemModal" class="modal-overlay" @click="closeRedeemModal">
      <div class="modal-content" @click.stop>
        <h3>Redeem Reward</h3>
        <div v-if="selectedReward" class="modal-details">
          <div class="reward-emoji large">{{ selectedReward.image }}</div>
          <h4>{{ selectedReward.name }}</h4>
          <p>{{ selectedReward.description }}</p>
          <p class="points-cost">Cost: {{ selectedReward.points }} points</p>
          <div class="modal-actions">
            <button class="cancel-button" @click="closeRedeemModal">Cancel</button>
            <button
              class="confirm-button"
              @click="redeemReward"
              :disabled="userPoints < selectedReward.points"
            >
              Confirm Redemption
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rewards-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.rewards-header {
  margin-bottom: 3rem;
}

.points-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.points-card h2 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin: 0 0 1rem;
}

.points-value {
  font-size: 3rem;
  font-weight: bold;
  color: #d32f2f;
  margin: 0 0 0.5rem;
}

.points-info {
  color: #616161;
  margin: 0;
}

.rewards-catalog h2 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin-bottom: 2rem;
}

.rewards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.reward-card {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.reward-card:hover:not(.disabled) {
  transform: translateY(-4px);
}

.reward-card.disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.reward-emoji {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.reward-emoji.large {
  font-size: 4rem;
}

.reward-card h3 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin: 0 0 0.5rem;
}

.reward-description {
  color: #616161;
  margin: 0 0 1.5rem;
  min-height: 3em;
}

.reward-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.points-cost {
  color: #d32f2f;
  font-weight: 500;
}

.redeem-button {
  background-color: #388e3c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.redeem-button:hover:not(:disabled) {
  background-color: #2e7d32;
}

.redeem-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
}

.modal-content h3 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin: 0 0 1.5rem;
  text-align: center;
}

.modal-details {
  text-align: center;
}

.modal-details h4 {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  margin: 1rem 0;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.cancel-button,
.confirm-button {
  flex: 1;
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cancel-button {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
}

.cancel-button:hover {
  background-color: #eee;
}

.confirm-button {
  background-color: #388e3c;
  color: white;
  border: none;
}

.confirm-button:hover:not(:disabled) {
  background-color: #2e7d32;
}

.confirm-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style> 