<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input v-model="username" id="username" type="text" required />
        
        <label for="password">Password:</label>
        <input v-model="password" id="password" type="password" required />
        
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  export default {
    setup() {
      const username = ref('');
      const password = ref('');
  
      const login = () => {
        if (username.value === 'user' && password.value === 'pass') {
          localStorage.setItem('isAuthenticated', true);
          this.$router.push('/about');
        } else {
          alert('Invalid credentials');
        }
      };
  
      return {
        username,
        password,
        login,
      };
    },
  };
  </script>
  