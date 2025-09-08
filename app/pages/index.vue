<script setup lang="ts">
// Projects objects types
export interface Project {
    id: number;
    status: string;
    title: string;
    challenge: string;
    solution: string;
    results: string[];
    url: string;
    icon: string;
}

// Services objects types
export interface Service {
    id: number;
    status: string;
    title: string;
    price: string;
    icon: string;
    timeframe: string;
    description: string;
    best_for: string;
}

interface CollectionsResponse {
    collections: string[];
    items: {
        projects: Project[];
        services: Service[];
    }
}
const { data } = await useFetch<CollectionsResponse>('/api/collections');

const projects = data.value?.items.projects || [];
const services = data.value?.items.services || [];

</script>
<template>
    <div>
        <Projects :projects="projects" />
        <Services :services="services" />
    </div>
</template>