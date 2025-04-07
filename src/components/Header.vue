<template>

    <div :class="headerClass" class="flex justify-between items-center w-screen !px-[16.5vw] !py-2 fixed z-50 ">
        <!-- logo container explore using a text header than an image-->
        <img src="../assets/img/unievent-high-resolution-logo-transparent.png" alt=""
            class="place-self-end w-[12vw] h-[5vh] lg:w-[13vw]">
        <!-- <header class="font-bold tracking-tighter text-2xl">UniEvent</header> -->

        <div class="tracking-wider ">
            <a href="/"><span class="mr-3 pr-2 text-sm font-medium link">Home</span></a>
            <a href="/events"><span class="mr-3 pr-2 text-sm font-medium link">Events</span></a>
            <a href="/categories"><span class="mr-3 pr-2 text-sm font-medium link">Categories</span></a>
            <a href="/profile"><span class="mr-3 pr-2 text-sm font-medium link">Log in</span></a>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

// Computed property for dynamic header classes
const headerClass = computed(() =>
    isScrolled.value ? "bg-white/90 shadow-md" : "bg-transparent"
);

// Method to handle scroll and update `isScrolled`
const isScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

// Lifecycle hooks
onMounted(() => {
    window.addEventListener("scroll", isScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", isScroll);
});
</script>

<style lang="scss" scoped></style>