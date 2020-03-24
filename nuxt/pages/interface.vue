<template lang="html">
  <main class="p-8">
    <InterfaceButton
      class="overflow-hidden p-1 w-9 h-9 shadow-5 rounded-full bg-blue-6 text-blue-1"
      :hasHaptics="true"
      :hapticsTiming="materialDecelerated"
    >
      <EvaGlobe2 :class="'fill-current'"/>
    </InterfaceButton>
  </main>
</template>

<script>
import { InterfaceButton } from '@baleada/interface-vue'
import { EvaGlobe2 } from '@baleada/icons-vue/eva-icons'

import { linear, verouEaseInOut, verouEaseOut, materialDecelerated } from '@baleada/animateable-timings'

export default {
  components: {
    EvaGlobe2,
    InterfaceButton,
  },
  setup () {
    return {
      materialDecelerated
    }
  }
}
</script>

<style>
  circle {
    fill: black;
  }
</style>