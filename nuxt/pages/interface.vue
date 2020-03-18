<template lang="html">
  <main class="p-8">
    <InterfaceButton
      class="overflow-hidden px-3 py-2 shadow-5 rounded-4 bg-blue-6 text-blue-1"
      :hasHapticShape="true"
    >
      Hello
    </InterfaceButton>
  </main>
</template>

<script>
import { InterfaceButton } from '@baleada/interface/vue'

export default {
  components: {
    InterfaceButton,
  },
  setup () {
    
  }
}
</script>

<style>
  circle {
    fill: black;
  }
</style>