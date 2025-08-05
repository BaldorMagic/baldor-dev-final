<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-xl overflow-y-auto max-h-[90vh]">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-semibold">Privacy Policy</h2>
        <button @click="close" class="text-gray-500 hover:text-black text-5xl">&times;</button>
      </div>
      <div class="space-y-6 text-gray-800 text-base">
        <p><strong>Last updated:</strong> May 20, 2025</p>

        <div>
          <p>This website collects personal data when you submit the contact form. This policy explains what data we
            collect, why, and how we handle it.</p>
        </div>

        <div>
          <h3 class="font-semibold">1. What We Collect</h3>
          <ul class="list-disc list-inside">
            <li>Business Name (if entered)</li>
            <li>Your Name (if entered)</li>
            <li>Email address</li>
            <li>Phone number (if entered)</li>
            <li>Any message you include</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold">2. Why We Collect It</h3>
          <ul class="list-disc list-inside">
            <li>To respond to your inquiry</li>
            <li>To communicate with you if needed</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold">3. How Your Data Is Handled</h3>
          <p>
            The form is powered by
            <a href="https://formeezy.com" target="_blank" class="text-blue-600 underline">Formeezy</a>.
            We do not sell or share your data.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">4. Data Retention</h3>
          <p>Your data is retained for up to 30 days unless you request deletion sooner.</p>
        </div>

        <div>
          <h3 class="font-semibold">5. Your Rights (under GDPR)</h3>
          <ul class="list-disc list-inside">
            <li>Request access, correction, or deletion</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold">6. Contact</h3>
          <p>For questions or data requests, contact: <strong>james@baldor.dev</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  close: Function
});
</script>