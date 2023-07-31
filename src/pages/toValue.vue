<script setup>
import { ref } from "vue"
import { NButton } from "naive-ui"
import { useConfetti } from "../composables/confetti"

const count = ref(0)

// 5 的倍数时会发送纸屑
useConfetti(() => count.value % 5 === 0) 
</script>

<template>
    <NButton @click="count++">{{ count }}</NButton>
</template>