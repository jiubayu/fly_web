import { ref } from 'vue';

const toggleUtils = (initState:any, delay: number) => {
  const on = ref(initState ?? false);

  const toggle = (value?: boolean) => {
    setTimeout(() => {
      on.value = value ?? !on.value;
    }, delay)
  }

  return {
    on,
    toggle,
  }
}

export default toggleUtils;