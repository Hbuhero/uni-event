<template>
    <div :class="headerClass"
        class="flex justify-between items-center w-full px-4 sm:px-8 lg:!px-[16.5vw] py-2 fixed z-50">
        <!-- Logo -->
        <img src="../assets/img/unievent-high-resolution-logo-transparent.png" alt="UniEvent"
            class="w-32 sm:w-40 lg:w-[12vw] h-auto object-contain">

        <!-- Mobile menu button -->
        <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden">
            <v-icon :icon="isMenuOpen ? 'mdi-close' : 'mdi-menu'" size="24" />
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden lg:block tracking-wider">
            <a href="/"><span class="mr-3 pr-2 text-sm font-medium link">Home</span></a>
            <a href="/events"><span class="mr-3 pr-2 text-sm font-medium link">Events</span></a>
            <a href="/categories"><span class="mr-3 pr-2 text-sm font-medium link">Categories</span></a>
            <a href="/profile"><span class="mr-3 pr-2 text-sm font-medium link">Log in</span></a>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isMenuOpen"
            class="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden py-4 px-4 transition-all">
            <div class="flex flex-col space-y-4">
                <a href="/" class="text-sm font-medium link">Home</a>
                <a href="/events" class="text-sm font-medium link">Events</a>
                <a href="/categories" class="text-sm font-medium link">Categories</a>
                <a href="/profile" class="text-sm font-medium link">Log in</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

// Computed property for dynamic header classes
const headerClass = computed(() =>
    isScrolled.value ? "bg-white/90 shadow-md" : "bg-transparent"
);

// Method to handle scroll and update `isScrolled`
const isScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

// Close mobile menu on window resize
const handleResize = () => {
    if (window.innerWidth >= 1024) { // lg breakpoint
        isMenuOpen.value = false;
    }
};

// Lifecycle hooks
onMounted(() => {
    window.addEventListener("scroll", isScroll);
    window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
    window.removeEventListener("scroll", isScroll);
    window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped></style>