<script setup>
import { ref } from "vue"
import { useElementVisibility, whenever } from "@vueuse/core"

let el = ref(null)
let elIsVisible = useElementVisibility(el)

const firstVisible = ref(false)

const stopWhenEver = whenever(elIsVisible, () => {
  el = null
  stopWhenEver()
  elIsVisible = null
  firstVisible.value = true
})
</script>

<template>
  <div ref="el">
    <slot :firstVisible="firstVisible" />
  </div>
</template>