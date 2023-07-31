<script setup>
import { UseMouse } from "@vueuse/components"
</script>

<template>
    <UseMouse v-slot="{ x, y }">
        <div>x 坐标 {{ x }}</div>
        <div>y 坐标 {{ y }}</div>
    </UseMouse>
</template>