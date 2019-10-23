<template>
  <main>
    button()
  </main>
</template>

<script>
import { ref, computed, onMounted } from '@vue/composition-api'
import useListenable from '~/assets/js/composition/useListenable'

export default {
  setup() {
    let listenable
    onMounted(() => {
      listenable = useListenable('click')
      listenable.listen(event => console.log(event))
    })


    return {
      // listenable
    }
  },
}
</script>
