<script setup lang="ts">
import { useTimer } from './useTime'

const props = defineProps<{
  start: number
}>()

const emit = defineEmits<{
  (e: 'timer-complete'): void
}>()

const { formatted, isRunning, start: startTimer, stop } = useTimer(
  props.start, 
  () => emit('timer-complete')
)
</script>

<template>
  <div class="timer-card">
    <h2>Tid: {{ formatted }}</h2>
    <p>Status: {{ isRunning ? 'Kjører...' : 'Stoppet' }}</p>
    
    <div class="controls">
      <button @click="startTimer" :disabled="isRunning">Start</button>
      <button @click="stop" :disabled="!isRunning">Stop</button>
    </div>
  </div>
</template>

<style scoped>
.timer-card { border: 1px solid #ccc; padding: 1rem; margin: 1rem; border-radius: 8px; }
.controls { display: flex; gap: 10px; }
</style>