<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-xl overflow-y-auto max-h-[90vh]">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-3xl font-semibold">{{ $t("PrivacyPolicyPopup.Title") }}</h2>
        <button @click="close" class="text-gray-500 hover:text-black text-5xl">&times;</button>
      </div>
      <div class="space-y-6 text-gray-800 text-base">
        <p><strong>{{ $t("PrivacyPolicyPopup.Updated.Text") }}:</strong> {{ $t("PrivacyPolicyPopup.Updated.Date") }}</p>

        <div>
          <p>{{ $t("PrivacyPolicyPopup.Description") }}</p>
        </div>

        <div>
          <h3 class="font-semibold">1. {{ $t("PrivacyPolicyPopup.DataCollected.Title") }}</h3>
          <ul class="list-disc list-inside">
            <li>{{ $t("PrivacyPolicyPopup.DataCollected.List[0]") }}</li>
            <li>{{ $t("PrivacyPolicyPopup.DataCollected.List[1]") }}</li>
            <li>{{ $t("PrivacyPolicyPopup.DataCollected.List[2]") }}</li>
            <li>{{ $t("PrivacyPolicyPopup.DataCollected.List[3]") }}</li>
            <li>{{ $t("PrivacyPolicyPopup.DataCollected.List[4]") }}</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold">2. {{ $t("PrivacyPolicyPopup.DataReasoning.Title") }}</h3>
          <ul class="list-disc list-inside">
            <li>{{ $t("PrivacyPolicyPopup.DataReasoning.List[0]") }}</li>
            <li>{{ $t("PrivacyPolicyPopup.DataReasoning.List[1]") }}</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold">3. {{ $t("PrivacyPolicyPopup.DataHandling.Title") }}</h3>
          <p>
            {{ $t("PrivacyPolicyPopup.DataHandling.Description.FirstPart") }} 
            <a href="https://formeezy.com" target="_blank" class="text-blue-600 underline">Formeezy</a>.
            {{ $t("PrivacyPolicyPopup.DataHandling.Description.SecondPart") }}
          </p>
        </div>

        <div>
          <h3 class="font-semibold">4. {{ $t("PrivacyPolicyPopup.DataRetention.Title") }}</h3>
          <p>{{ $t("PrivacyPolicyPopup.DataRetention.Description") }}</p>
        </div>

        <div>
          <h3 class="font-semibold">5. {{ $t("PrivacyPolicyPopup.Rights.Title") }}</h3>
          <ul class="list-disc list-inside">
            <li>{{ $t("PrivacyPolicyPopup.Rights.List[0]") }}</li>
            <li>{{ $t("PrivacyPolicyPopup.Rights.List[1]") }}</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold">6. {{ $t("PrivacyPolicyPopup.Contact.Title") }}</h3>
          <p>{{ $t("PrivacyPolicyPopup.Contact.Description") }}: <strong>james@baldor.dev</strong></p>
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