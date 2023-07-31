<script setup>
import { NModal } from "naive-ui"

const visible = defineModel({
    default: false
})
</script>

<template>
    <NModal v-model:show="visible" preset="dialog" title="Dialog">
        <template #header>
            <div>这是一个模态框</div>
        </template>
    </NModal>
</template>
