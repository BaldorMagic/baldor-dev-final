<template>
    <footer class="bg-gray-800 text-gray-300 py-12">
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">{{ $t("Footer.Title") }}</h3>
                    <p class="mb-4">{{ $t("Footer.Description") }}</p>
                    <div class="flex space-x-4">
                        <a href="https://www.linkedin.com/in/james-neveu" aria-label="Lets link on linkedin"
                            class="text-gray-300 hover:text-orange-300" target="_blank">
                            <Icon name="lucide:linkedin" size="2em" />
                        </a>
                        <a href="mailto:james@baldor.dev" aria-label="lets get in touch by email"
                            class="text-gray-300 hover:text-orange-300">
                            <Icon name="lucide:mail" size="2em" />
                        </a>
                    </div>
                </div>
                <div class="md:text-right">
                    <div class="text-sm text-gray-400">{{ $t("Footer.Contact.Email") }}</div>
                    <a href="mailto:james@baldor.dev" class="text-white hover:text-orange-300">james@baldor.dev</a>
                    <div class="text-sm text-gray-400 mt-4">{{ $t("Footer.Contact.Phone") }}</div>
                    <a href="tel:#" class="text-white hover:text-orange-300">#</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup></script>