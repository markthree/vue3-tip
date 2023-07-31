<script setup>
import { ref, watch } from "vue";
import { NButton } from "naive-ui";
import Modal from "../components/ui/modal.vue"

const count = ref(0)

const modalVisibale = ref(false)

watch(count, c => {
    if (c % 5 === 0) {
        modalVisibale.value = true
    }
})
</script>

<template>
    <div class="space-y-5 flex flex-col">
        <NButton @click="modalVisibale = true">打开模态框</NButton>

        <NButton @click="count++">5 的倍数时打开模态框 {{ count }}</NButton>
    </div>

    <Modal v-model="modalVisibale" />
</template>