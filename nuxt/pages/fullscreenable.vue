<template lang="html">
  <section ref="el" class="flex flex-col items-center justify-center h-screen w-screen bg-blue-5">
    <section class="h-screen-1/2 w-screen-1/2 bg-red-5" />
    <button @click="() => fullscreenable.enter()">enter</button>
    <button @click="() => fullscreenable.exit()">exit</button>
    <span>{{ fullscreenable.status }}</span>
  </section>
</template>

<script>
import { ref } from '@vue/composition-api'
import { useFullscreenable } from '@baleada/vue-composition'

export default {
  setup () {
    const el = ref(null),
          fullscreenable = useFullscreenable(() => el.value)

    return {
      fullscreenable,
      el,
    }
  }
}
</script>