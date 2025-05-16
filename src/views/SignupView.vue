<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  bloodType: '',
  location: ''
})

const bloodTypes = [
  'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'
]

const error = ref('')

const handleSignup = async () => {
  try {
    if (formData.value.password !== formData.value.confirmPassword) {
      error.value = 'Passwords do not match'
      return
    }
    // TODO: Implement actual signup logic
    error.value = ''
    router.push('/login')
  } catch (e) {
    error.value = 'An error occurred during signup'
  }
}
</script>

<template>
  <div class="signup-container">
    <div class="signup-card">
      <h1>Create Account</h1>
      <p class="subtitle">Join our community of life-savers</p>

      <form @submit.prevent="handleSignup" class="signup-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Enter your full name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="formData.password"
            required
            placeholder="Create a password"
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="formData.confirmPassword"
            required
            placeholder="Confirm your password"
          />
        </div>

        <div class="form-group">
          <label for="bloodType">Blood Type</label>
          <select
            id="bloodType"
            v-model="formData.bloodType"
            required
          >
            <option value="">Select your blood type</option>
            <option v-for="type in bloodTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="location">Location</label>
          <input
            type="text"
            id="location"
            v-model="formData.location"
            required
            placeholder="Enter your city"
          />
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>

        <button type="submit" class="signup-button">Create Account</button>

        <div class="form-footer">
          <p>
            Already have an account?
            <router-link to="/login" class="login-link">Sign In</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.signup-container {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #fafafa;
}

.signup-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

h1 {
  font-family: 'Montserrat', sans-serif;
  color: #d32f2f;
  margin: 0 0 0.5rem;
  text-align: center;
}

.subtitle {
  color: #616161;
  text-align: center;
  margin-bottom: 2rem;
}

.signup-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: 500;
  color: #333;
}

input, select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus, select:focus {
  outline: none;
  border-color: #d32f2f;
}

.error-message {
  color: #d32f2f;
  font-size: 0.875rem;
  text-align: center;
}

.signup-button {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-button:hover {
  background-color: #b71c1c;
}

.form-footer {
  text-align: center;
  margin-top: 1rem;
}

.login-link {
  color: #d32f2f;
  text-decoration: none;
  font-weight: 500;
}

.login-link:hover {
  text-decoration: underline;
}
</style> 