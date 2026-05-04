<script setup lang="ts">
import { ref, computed } from 'vue';

interface ClickCounterProps {
  initialCount?: number;
}

const props = defineProps<ClickCounterProps>();
const emit = defineEmits<{
    inc: [value: number];
    reset: []
}>()

const count = ref(props.initialCount ?? 0);
const doubled = computed((): number => count.value * 2);

function increment() {
  count.value++
  emit('inc', count.value)
}

function reset(): void {
  count.value = 0
  emit('inc', count.value)
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Doubled: {{ doubled }}</p>
    <button @click="increment">+1</button>
    <button @click="reset">Reset</button>
  </div>
</template>