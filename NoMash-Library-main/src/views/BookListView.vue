<template>
    <div class="book-list-container">
      <h1>Book List (ISBN > 1000)</h1>
      <ul v-if="books.length">
        <li v-for="book in books" :key="book.id">
          {{ book.name }} (ISBN: {{ book.isbn }})
        </li>
      </ul>
      <p v-else>No books found with ISBN greater than 1000.</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { db } from '../firebase';
  import { collection, query, where, getDocs } from 'firebase/firestore';
  
  // 定义书籍列表
  const books = ref([]);
  
  // 获取书籍列表
  const fetchBooks = async () => {
    try {
      const q = query(collection(db, 'books'), where('isbn', '>', 1000));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        books.value.push({ id: doc.id, ...doc.data() });
      });
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
  
  // 在组件挂载时加载书籍列表
  onMounted(fetchBooks);
  </script>
  
  <style scoped>
  .book-list-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
    padding: 10px;
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  p {
    text-align: center;
    font-size: 16px;
    color: #888;
  }
  </style>
  