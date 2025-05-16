<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

const handleLogin = async () => {
  try {
    // TODO: Implement actual login logic
    error.value = ''
    router.push('/')
  } catch (e) {
    error.value = 'Invalid email or password'
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Welcome Back</h1>
      <p class="subtitle">Sign in to continue saving lives</p>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
          />
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>

        <button type="submit" class="login-button">Sign In</button>

        <div class="form-footer">
          <router-link to="/forgot-password" class="forgot-password">
            Forgot Password?
          </router-link>
          <p>
            Don't have an account?
            <router-link to="/signup" class="signup-link">Sign Up</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  min-height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #fafafa;
}

.login-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
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

.login-form {
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

input {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #d32f2f;
}

.error-message {
  color: #d32f2f;
  font-size: 0.875rem;
  text-align: center;
}

.login-button {
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

.login-button:hover {
  background-color: #b71c1c;
}

.form-footer {
  text-align: center;
  margin-top: 1rem;
}

.forgot-password {
  color: #616161;
  text-decoration: none;
  font-size: 0.875rem;
}

.forgot-password:hover {
  color: #d32f2f;
}

.signup-link {
  color: #d32f2f;
  text-decoration: none;
  font-weight: 500;
}

.signup-link:hover {
  text-decoration: underline;
}
</style> 