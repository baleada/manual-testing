<template>
  <span>{{ completeable.string }}</span>
</template>

<script>
import { useCompleteable } from '@baleada/vue-composition'

export default {
  setup () {
    const completeable = useCompleteable('baleada')

    console.log(completeable.value)

    return { completeable }
  }
}
</script>