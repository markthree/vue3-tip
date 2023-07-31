<script setup>
import { ref } from "vue";
import { NButton } from "naive-ui";
import Modal from "../components/ui/modal.vue"
import { useVisible } from "../composables/visiable"

const count = ref(0)

const modalVisible = useVisible(() => count.value % 5 === 0)
</script>

<template>
    <div class="space-y-5 flex flex-col">
        <NButton @click="modalVisible = true">打开模态框</NButton>

        <NButton @click="count++">5 的倍数时打开模态框 {{ count }}</NButton>
    </div>

    <Modal v-model="modalVisible" />
</template>