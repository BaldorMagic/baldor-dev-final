<script setup>
const { data } = await useFetch('/api/collections');

const items = data.value.items;
const projects = items.projects;
const services = items.services;
</script>
<template>
    <div>
        <Projects :projects="projects"/>
        <Services :services="services"/>
    </div>
</template>