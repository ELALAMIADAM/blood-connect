<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const isAuthenticated = ref(false)
</script>

<template>
  <div class="app-container">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-brand">
        <img src="./assets/blood-drop.svg" alt="Blood Donation" class="nav-logo" />
        <span class="brand-name">BloodConnect</span>
      </div>
      
      <div class="nav-links" v-if="isAuthenticated">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/requests" class="nav-link">Requests</router-link>
        <router-link to="/profile" class="nav-link">My Profile</router-link>
        <router-link to="/rewards" class="nav-link">Rewards</router-link>
      </div>
      
      <div class="nav-auth" v-if="!isAuthenticated">
        <router-link to="/login" class="nav-link">Login</router-link>
        <router-link to="/signup" class="nav-link signup-btn">Sign Up</router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #ffffff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-logo {
  height: 2rem;
}

.brand-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #d32f2f;
  font-size: 1.25rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #616161;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #d32f2f;
}

.signup-btn {
  background-color: #d32f2f;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.signup-btn:hover {
  background-color: #b71c1c;
  color: white;
}

.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #fafafa;
}
</style>
