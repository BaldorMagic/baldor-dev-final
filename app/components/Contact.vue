<template>
    <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4">
            <div class="bg-white rounder-2xl p-8 shadow-md">
                <h2 class="text-3xl font-bold text-center mb-8 text-gray-700">{{ $t("Contact.Title") }}</h2>
                <form action="https://formeezy.com/api/v1/forms/675313ee886113000892a167/submissions" method="post"
                    class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-gray-600 mb-2" for="business-name">{{ $t("Contact.BusinessLabel") }}</label>
                            <input id="business-name" type="text" name="business_name"
                                class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent" />
                        </div>
                        <div>
                            <label class="block text-gray-600 mb-2" for="name">{{ $t("Contact.NameLabel") }}</label>
                            <input id="name" type="text" name="name"
                                class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent" />
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-gray-600 mb-2" for="email">{{ $t("Contact.EmailLabel") }}</label>
                            <input id="email" type="email" name="email" required
                                class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent" />
                        </div>
                        <div>
                            <label class="block text-gray-600 mb-2" for="phone">{{ $t("Contact.PhoneLabel") }}</label>
                            <input id="phone" type="tel" name="phone"
                                class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent" />
                        </div>
                    </div>
                    <div>
                        <label class="block text-gray-600 mb-2" for="message">{{ $t("Contact.IntroductionLabel") }}</label>
                        <textarea id="message" rows="4" name="message" required
                            class="w-full bg-gray-100 text-gray-600 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-300 focus:border-transparent mb-2" />
                    </div>
                    <label class="block mt-4">
                        <input type="checkbox" required>
                        {{ $t("Contact.PrivacyPolicyLabel.Content") }}
                        <button type="button" class="text-blue-600 underline ml-1" @click="showPolicy = true">
                            {{ $t("Contact.PrivacyPolicyLabel.Link") }}
                        </button>.
                    </label>
                    <button type="submit" value="Submit"
                        class="w-full bg-[#ee4b4d] text-white text-lg font-semibold py-4 px-8 rounded-lg hover:bg-[#F06163] transition-colors font-medium">
                        {{ $t("Contact.SubmitButton") }}
                    </button>
                </form>
                <PrivacyPolicyModal :show="showPolicy" :close="() => (showPolicy = false)" />
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const showPolicy = ref(false);
</script>