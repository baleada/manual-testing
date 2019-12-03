<template lang="html">
  <main :style="{ display: 'flex', 'flex-direction': 'column', 'align-items': 'center', height: '100vh'}">
    <button type="button" name="button" @click="handleClick">animate</button>
    <section
      ref="el"
      :style="{ margin: 'auto', height: '250px', width: '250px', 'background-color': '#333' }"
    />
  </main>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import { useAnimatable } from '@baleada/composition/vue'
export default {
  setup() {
    const el = ref(null),
          animatable = useAnimatable(el),
          config = {
            animation: {
              translateX: 100,
              duration: 400,
              loop: 2,
              autoplay: false,
            }
          }

    onMounted(() => {
      animatable.value.animate(config)
    })

    function handleClick () {
      console.log(animatable.value.animation)
      animatable.value.play()
    }

    return {
      el,
      handleClick
    }
  },
}
</script>

<style lang="css" scoped>
</style>
