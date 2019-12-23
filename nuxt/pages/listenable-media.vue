<template lang="html">
  <main ref="main">
    <section ref="el" class="one">
      <button type="button" name="button" @click="listen">listen</button>
      <button type="button" name="button" @click="listen2">listen2</button>
      <button type="button" name="button" @click="stop">stop</button>
      <button type="button" name="button" @click="stop2">stop2</button>
    </section>
    <section ref="el2" class="two">

    </section>
  </main>
</template>

<script>
import { reactive, ref, isRef, toRefs, computed, readonly, watch, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered, provide, inject } from '@vue/composition-api'

import { useListenable } from '@baleada/composition/vue'


export default {
  setup() {
    const main = ref(null),
          el = ref(null),
          el2 = ref(null)

    const listenable = useListenable('(min-width: 600px)')

    function listen () {
      listenable.value.listen(
        ({ matches }) => {
          console.log({ matches })
        },
        {
          // no options
        }
      )

      console.log(listenable.value.activeListeners[0].target.matches)
    }
    function listen2 () {
      listenable.value.listen((touch) => {
        console.log(touch)
      }, { target: el2.value })
    }

    function stop () {
      listenable.value.stop({ target: el.value })
    }
    function stop2 () {
      listenable.value.stop({ target: el2.value })
    }


    return {
      listen,
      listen2,
      listenable,
      stop,
      stop2,
      main,
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
