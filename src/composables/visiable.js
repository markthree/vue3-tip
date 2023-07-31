import { ref, toValue, watchEffect } from "vue";

export function useVisible(switchRef = false) {
  const visible = ref();
  watchEffect(() => {
    visible.value = toValue(switchRef);
  });
  return visible;
}
