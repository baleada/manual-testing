<template>
  <NestedSlot>
    <template v-slot:outer>
      <div>outer</div>
    </template>
    <template v-slot:inner>
      <div>inner</div>
    </template>
  </NestedSlot>
</template>

<script>
import { NestedSlot } from '../components'
export default {
  components: {
    NestedSlot,
  },
  setup () {
    
  }
}
</script>
