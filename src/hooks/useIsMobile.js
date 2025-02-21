import { ref, onMounted, onUnmounted } from "vue";

export function useIsMobile(breakpoint = 768) {
  const isMobile = ref(window.innerWidth <= breakpoint);

  const updateScreenSize = () => {
    isMobile.value = window.innerWidth <= breakpoint;
  };

  onMounted(() => {
    window.addEventListener("resize", updateScreenSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateScreenSize);
  });

  return { isMobile };
}
