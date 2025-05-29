<script setup lang="ts">
import type { Project, Service } from '~/types/Collections';

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
        <Projects :projects="projects"/>
        <Services :services="services"/>
    </div>
</template>