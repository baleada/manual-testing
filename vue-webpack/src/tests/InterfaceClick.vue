<template lang="html">
  <div class="h-screen w-screen flex items-center justify-center">
    <InterfaceClick
      interfaceClasses="p-3 bg-teal-60 rounded-4 focus:shadow-outline overflow-hidden"
      contentsClasses="text-teal-10 uppercase font-6"
      hapticsClasses="w-full"
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