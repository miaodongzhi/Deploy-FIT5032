<template>
  <div class="signin-container">
    <h1>Sign In</h1>
    <p>
      <input type="text" placeholder="Email" v-model="email" />
    </p>
    <p>
      <input type="password" placeholder="Password" v-model="password" />
    </p>
    <p>
      <button @click="signin">Sign in via Firebase</button>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

// 设置状态变量
const email = ref("");
const password = ref("");

// 设置路由
const router = useRouter();
const auth = getAuth();

// 登录函数
const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Firebase Sign-in Successful!");
      router.push("/");
      console.log(auth.currentUser); // 检查当前已登录用户
    })
    .catch((error) => {
      console.log(error.code);
    });
};
</script>

<style scoped>
.signin-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
