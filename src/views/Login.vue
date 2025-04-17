<template>

  <div class="space-y-6 max-w-7xl mx-auto !py-6 sm:px-6 lg:!px-8">



    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
      <div class="card-header place-self-center gap-2">
        <h2 class="card-title text-center">Welcome</h2>
        <p class="card-description"> Sign in to your account or create a new one
        </p>
      </div>

      <div class=" mb-4 flex justify-center w-full  tabs-list !bg-secondary  text-center">
        <div v-for="(tab, index) in tabs" :key="index" @click="activeTab = index"
          class="w-full h-full flex items-center tabs-trigger" :class="activeTab == index ? 'bg-white' : ''">

          <span class="">{{ tab }}</span>
        </div>
      </div>

      <v-divider></v-divider>

      <div v-if="activeTab == 0">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field density="compact" placeholder="Email address" variant="outlined"
          v-model="loginData.username"></v-text-field>

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password

          <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
            Forgot login password?</a>
        </div>

        <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
          density="compact" placeholder="••••••••" variant="outlined" v-model="loginData.password"
          @click:append-inner="visible = !visible"></v-text-field>



        <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="login()">
          Log In
        </v-btn>

        <v-card-text class="text-center">
          <a class="text-blue text-decoration-none" href="#" rel="noopener noreferrer" target="_blank">
            Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
      </div>

      <div v-else>
        <Signup />
      </div>


    </v-card>




  </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import Signup from './Signup.vue';
import { authService } from '../services/authService';
import { useRouter } from 'vue-router';

const tabs = ["Login", "Sign Up"]
const activeTab = ref(0)
const visible = ref(false)
const router = useRouter()

const loginData = ref({
  username: '',
  password: ''
})

const login = async () => {
  try {

    const response = await authService.login(
      {
        username: loginData.value.username,
        password: loginData.value.password
      }
    )

    console.log(response);
    

    localStorage.setItem('jwt', response.data.jwt)
    
    router.push('/')

  } catch (error) {

  }
}

onMounted(() => {

})
</script>