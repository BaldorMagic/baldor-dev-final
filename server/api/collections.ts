import { Project, Service } from '~/types/Collections'

export default defineEventHandler(async (event) => {
    const url = process.env.DIRECTUS_URL;
    const token = process.env.DIRECTUS_TOKEN;

        const collections = ["projects", "services"]

        const itemsData: Record<string, any[]> = {};

        for (const collection of collections) {
            try {
                const items = await $fetch<{ data: any[] }>(`${url}/items/${collection}`, {
                    headers: { Authorization: `Bearer ${token}`}
                })
                itemsData[collection] = items.data
            } catch (error) {
                console.error(`Failed to fetch items for collection: ${collection}`, error)
                itemsData[collection] = []
            }
        }
        return { collections, items: itemsData}
})