<template>
    <section class="pt-32 pb-20 px-4 bg-gradient-to-b from-orange-50 to-white">
        <div class="max-w-6xl mx-auto text-center">
            <div class="mb-6 flex justify-center">
                <div
                    class="m-3 flex items-center justify-center">
                    <NuxtPicture src="/baldor-logo.webp" :imgAttrs="{class: 'rounded-2xl transition duration-[0.8s] hover:shadow-[0_20px_0_gray] hover:translate-y-[-20px]', style: 'width: 240px'}" alt="Baldor Company Logo" />
                </div>
            </div>
            <h2
                class="text-5xl md:text-6xl font-bold mb-6 animated-text bg-gradient-to-r from-[#ee4b4d] to-[#F06163] bg-clip-text text-transparent">
                Grow Your Business Online
            </h2>
            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                I help small businesses increase their revenue with professional websites,
                online stores, and local SEO. Get more customers and simplify your operations.
            </p>
            <div class="flex flex-col md:flex-row justify-center gap-4">
                <NuxtLink to="#contact"
                    class="bg-[#F06163] text-white text-xl font-semibold px-8 py-3 rounded-lg hover:bg-[#ee4b4d] transition-colors">
                    Get Free Consultation
                </NuxtLink>
                <NuxtLink to="#projects"
                    class="bg-gray-100 text-gray-600 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    See Results
                </NuxtLink>
            </div>
            <div class="mt-12 grid grid-cols-3 max-w-2xl mx-auto  gap-8">
                <div class="text-center">
                    <div class="text-2xl font-bold text-gray-700">50+</div>
                    <div class="text-gray-500">Happy Clients</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-bold text-gray-700">40%</div>
                    <div class="text-gray-500">Avg. Revenue Increase</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl font-bold text-gray-700">100%</div>
                    <div class="text-gray-500">Satisfaction Rate</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const icon: string = 'my-icon:axolotl'
</script>
<style scoped>
@keyframes animateText {

    0%,
    100% {
        background-size: 200% 200%;
        background-position: left center;
    }

    50% {
        background-size: 200% 200%;
        background-position: right center;
    }
}

@keyframes wiggle {

    0%,
    100% {
        transform: rotate(-3deg);
    }

    50% {
        transform: rotate(3deg);
    }
}

.animated-text {
    will-change: animation;
    animation: animateText 3s ease-in-out infinite;
}

.wiggle:hover {
    animation-name: wiggle;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
</style>