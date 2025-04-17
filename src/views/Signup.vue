<template>
  <form @submit.prevent="signup()">
    <div class="flex ">
      <v-text-field name="name" label="First Name" placeholder="John" v-model="userData.firstName"
        :rules="[rules.required]" density="compact" variant="outlined" class="mb-4"></v-text-field>

      <v-text-field name="name" label="Middle Name" placeholder="Doe" v-model="userData.middleName"
        :rules="[rules.required]" required density="compact" variant="outlined" class="mb-4"></v-text-field>

    </div>

    <v-text-field name="name" label="Last Name" placeholder="Smith" v-model="userData.lastName"
      :rules="[rules.required]" required density="compact" variant="outlined" class="mb-4"></v-text-field>

    <v-text-field label="E-mail" v-model="userData.username" :rules="[rules.required, rules.email]"
      placeholder="johndoe@example.com" variant="outlined" density="compact" class="mb-4"></v-text-field>

      <v-text-field label="Phone Number" v-model="userData.phone" :rules="[rules.required]"
      placeholder="+255 678900269" variant="outlined" density="compact" class="mb-4"></v-text-field>

      <v-text-field label="City" v-model="userData.city" :rules="[rules.required]"
      placeholder="Dar es Salaam" variant="outlined" density="compact" class="mb-4"></v-text-field>

    <v-text-field name="name" label="Password" hint="At least 8 characters" min="8" placeholder="••••••••"
      v-model="userData.password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'" density="compact" variant="outlined"
      @click:append-inner="visible = !visible" class="mb-4" :rules="[rules.required, rules.password]"></v-text-field>

    <v-text-field name="name" label="Confirm password" hint="Enter your password again" placeholder="••••••••"
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
      :rules="[rules.required, rules.confirm]" density="compact" variant="outlined"
      @click:append-inner="visible = !visible" class="mb-2"></v-text-field>

      <v-btn type="submit" :loading="loading" width="40%" variant="tonal" color="main">
                Submit
            </v-btn>
  </form>



</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const rules = {
  email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
  length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
  password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) || 'Password must contain an upper case letter, a numeric character, and a special character',
  confirm: v => !!(v || '').match(userData.value.password) || 'Please enter a valid email',
  required: v => !!v || 'This field is required',
}

const userData = ref({
  firstName: '',
  middleName: '',
  lastName: '',
  username: '',
  phone: '',
  city: '',
  password: '',
  confirmPassword: ''
})

const signup = async () => {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/auth/register',
      {
        firstname: userData.value.firstName,
        middleName: userData.value.middleName,
        lastname: userData.value.lastName,
        email: userData.value.username,
        phone: userData.value.phone,
        address: userData.value.city,
        password: userData.value.password
      }
    )

    console.log(response.data);
    
  } catch (error) {

  }
}


</script>