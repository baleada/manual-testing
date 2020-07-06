<template lang="html">
  <div class="h-screen w-screen flex items-center justify-center">
    <InterfaceClick
      class="p-3 bg-teal-60 rounded-4 text-teal-10 uppercase font-6"
      @click="clickHandle"
      :hasHaptics="true"
    >
      hello
    </InterfaceClick>
  </div>
</template>

<script>
import { InterfaceClick } from '@baleada/vue-interface'

export default {
  components: {
    InterfaceClick,
  },
  setup () {
    const clickHandle = () => console.log('clicked')

    return {
      clickHandle
    }
  }
}
</script>

<style lang="postcss">
circle {
  @apply bg-black;
}

</style>