import { ref, toValue, watchEffect } from "vue";

export function useVisibale(switchRef = false) {
  const visibale = ref();
  watchEffect(() => {
    visibale.value = toValue(switchRef);
  });
  return visibale;
}
