import { toValue } from "vue";
import JSConfetti from "js-confetti";
import { createSharedComposable, whenever } from "@vueuse/core";

// 注: 使用 createSharedComposable 的目的是为了让 JSConfetti 类只实例化一次
const createSharedConfetti = createSharedComposable(() => {
  return new JSConfetti();
});

export function useConfetti(emit) {
  const confetti = createSharedConfetti();

  function emitConfetti() {
    confetti.addConfetti();
  }

  if (emit) {
    whenever(() => toValue(emit), emitConfetti);
  }

  return emitConfetti;
}
