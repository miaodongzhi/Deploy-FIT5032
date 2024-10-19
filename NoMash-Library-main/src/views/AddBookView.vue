<template>
  <div class="add-book-container">
    <h1>Add a New Book</h1>

    <form @submit.prevent="addBook" class="book-form">
      <div class="form-group">
        <label for="isbn">ISBN:</label>
        <input
          type="number"
          v-model.number="isbn"
          id="isbn"
          required
          placeholder="Enter ISBN"
        />
      </div>
      <div class="form-group">
        <label for="name">Book Name:</label>
        <input
          type="text"
          v-model="name"
          id="name"
          required
          placeholder="Enter Book Name"
        />
      </div>
      <button type="submit" class="btn-submit">Add Book</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const isbn = ref(null);
const name = ref('');

const addBook = async () => {
  try {
    const docRef = await addDoc(collection(db, 'books'), {
      isbn: Number(isbn.value),
      name: name.value,
    });
    console.log('Document written with ID: ', docRef.id);
    isbn.value = null;
    name.value = '';
  } catch (error) {
    console.error('Error adding book: ', error);
  }
};
</script>

<style scoped>
.add-book-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.book-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.btn-submit {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-top: 10px;
}

.btn-submit:hover {
  background-color: #45a049;
}
</style>
