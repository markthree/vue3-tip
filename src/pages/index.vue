<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router"

const router = useRouter();

const paths = computed(() => {
    return router.getRoutes().flatMap(v => v.path).sort((l, r) => {
        if (l.length < r.length) {
            return -1
        }
    })
}) 
</script>

<template>
    <div v-for="p of paths" :key="p" class="text-indigo-500">
        <RouterLink :to="p">{{ p }}</RouterLink>
    </div>
</template>