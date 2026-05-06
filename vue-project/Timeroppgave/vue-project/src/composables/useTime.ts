import { ref, computed, onUnmounted } from 'vue'

export function useTimer(initialSeconds: number, onComplete?: () => void) {

  const remaining = ref(initialSeconds);
  const isRunning = ref(false);
  let intervalId: number | null = null;


  const formatted = computed(() => {
    const minutes = Math.floor(remaining.value / 60);
    const seconds = remaining.value % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  });


  const start = () => {
    if (isRunning.value) return; 

    isRunning.value = true;
    intervalId = window.setInterval(() => {
      if (remaining.value > 0) {
        remaining.value--;
      } else {
        stop();
        
        if (onComplete) onComplete();
      }
    }, 1000);
  };

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
    isRunning.value = false;
  };

  onUnmounted(() => {
    stop();
  });

  return {
    remaining,
    isRunning,
    formatted,
    start,
    stop
  };
}