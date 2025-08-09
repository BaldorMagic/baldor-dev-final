import { createDirectus, rest, readItems } from "@directus/sdk";
const directus = createDirectus<DirectusSchema>(
    "http://your-website-url/directus",
).with(rest());
export default defineNuxtPlugin(() => {
    return {
        provide: { directus, readItems },
    };
});
