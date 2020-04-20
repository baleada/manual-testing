<template lang="html">
  <main>
    <section ref="el" class="one">
      <button type="button" name="button" @click="listen">listen</button>
      <button type="button" name="button" @click="stop">stop</button>
    </section>
    <section ref="el2" class="two">

    </section>
  </main>
</template>

<script>
import { reactive, ref, isRef, toRefs, computed, readonly, watch, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered, provide, inject } from '@vue/composition-api'

import { useListenable } from '@baleada/vue-composition'


export default {
  setup() {
    const el = ref(null),
          el2 = ref(null)

    const listenable = useListenable('visibilitychange')

    function listen () {
      listenable.value.listen(
        (event) => {
          console.log(event)
        },
      )
    }

    function stop () {
      listenable.value.stop()
    }


    return {
      listen,
      stop,
      el,
      el2
    }
  },
}
</script>

<style media="screen" lang="css">
  section.one {
    height: 50vh;
    background-color: #333;
  }

  section.two {
    height: 50vh;
    background-color: #666;
  }
</style>
