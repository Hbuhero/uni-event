<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          
          permanent
          
          @mouseenter="rail = false"
          @mouseleave="rail = true"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
          >
            <template v-slot:append>
              <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-outline" title="Home" value="home" @click="goHome()"></v-list-item>
            <v-list-item prepend-icon="mdi-account-outline" title="Profile" value="account" @click="showProfile"></v-list-item>
            <v-list-item prepend-icon="mdi-calendar-outline" title="My Events" value="users" @click="showEvents"></v-list-item>
            <v-list-item prepend-icon="mdi-cog-outline" title="Settings" value="settings" @click="showSettings"></v-list-item>
          </v-list>

          <template v-slot:append>
          <div class="pa-2">
            <v-btn 
            v-slot:append
              :prepend-icon="rail ? null : 'mdi-logout'"
                :icon="rail ? 'mdi-logout' : null"
              :block="!rail"
              :variant="rail ? 'plain' : 'tonal'"
              >
              Logout
            </v-btn>
          </div>
        </template>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>
  </template>
  <script setup>
    import { ref } from 'vue'
import { useRouter } from 'vue-router'
  
    const drawer = ref(true)
    const rail = ref(true)
    const router = useRouter()

    const goHome = () => {
      router.push("/")
    }

    const showProfile = () => {
      router.push("profile")
    }

    const showSettings = () => {
      router.push("settings")
    }

    const showEvents = () => {
      router.push("your-events")
    }
  </script>