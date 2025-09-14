<template>
  <div
    class="relative overflow-hidden"
    @mousemove="updateGradient"
    @mouseleave="resetGradient"
    ref="card"
  >
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-300"
      :style="gradientStyle"
    ></div>

    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  colors: {
    type: Array,
    default: () => ['rgba(59,130,246,0.5)', 'transparent'],
  },
})

const card = ref(null)
const gradientStyle = ref({})

const updateGradient = (e) => {
  const rect = card.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  gradientStyle.value = {
    background: `radial-gradient(circle at ${x}px ${y}px, ${props.colors.join(', ')})`,
    opacity: 0.3,
  }
}

const resetGradient = () => {
  gradientStyle.value = { opacity: 0 }
}
</script>
