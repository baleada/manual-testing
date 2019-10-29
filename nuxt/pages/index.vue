<template>
  <main>
    <button @click="handleClick">
      do stuff
    </button>
  </main>
</template>

<script>
import { ref, computed, onMounted } from '@vue/composition-api'
import useListenable from '~/assets/js/composition/useListenable'

export default {
  setup() {
    let listenable = {}
    onMounted(() => {
      listenable = useListenable('tap')
      listenable.listen((event) => {
        console.log(listenable.eventMetadata)
      })
    })

    function handleClick() {

    }

    return {
      listenable,
      handleClick
    }
  },
}
</script>

<style media="screen">
  body {
    background-color: #333;
    color: #fafafa;
    padding: 100px;
  }
</style>
