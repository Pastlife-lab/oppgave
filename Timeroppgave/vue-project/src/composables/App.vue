<script setup lang="ts">
import CountdownTimer from './CountdownTimer.vue'

const handleComplete = (id: string) => {
  console.log(`Timer ${id} er ferdig!`)
}
</script>

<template>
  <main>
    <h1>Mine Timere</h1>
    
    <CountdownTimer 
      :start="90" 
      @timer-complete="handleComplete('90s')" 
    />

    <CountdownTimer 
      :start="30" 
      @timer-complete="handleComplete('30s')" 
    />
  </main>
</template>