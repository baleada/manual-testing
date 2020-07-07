<template lang="html">
  <span>{{ navigateable.location }}</span>
</template>

<script>
import { useNavigateable } from '@baleada/vue-composition'

export default {
  setup () {
    const navigateable = useNavigateable(['baleada', 'toolkit'])

    console.log(navigateable.value)

    return { navigateable }
  }
}
</script>