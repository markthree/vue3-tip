<script setup>
import { ref, watch } from "vue"
import { NButton } from "naive-ui"
import { useConfetti } from "../composables/confetti"

const count = ref(0)

const emitConfetti = useConfetti()

watch(count, (c) => {
    // 5 的倍数时发射纸屑
    if (c % 5 === 0) {
        emitConfetti()
    }
})

// useConfetti(() => count.value % 5 === 0) 
</script>

<template>
    <NButton @click="count++">{{ count }}</NButton>
</template>