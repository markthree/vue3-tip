<script setup>
import { NNumberAnimation } from "naive-ui"
import UseElementVisibilityOnce from "../../components/renderless/useElementVisibilityOnce.vue"
</script>

<template>
    <div class="min-h-screen flex justify-center items-center">往下拉</div>

    <div class="pb-[100vh]">
        <UseElementVisibilityOnce v-slot="{ firstVisible }" class="inline-block">
            <NNumberAnimation :active="firstVisible" :from="0" :to="60" />%
        </UseElementVisibilityOnce>
    </div>
    <div class="pb-[100vh]">
        <UseElementVisibilityOnce v-slot="{ firstVisible }" class="inline-block">
            <NNumberAnimation :active="firstVisible" :from="0" :to="100" />%
        </UseElementVisibilityOnce>
    </div>
</template>