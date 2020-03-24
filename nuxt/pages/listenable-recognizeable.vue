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

import { useListenable } from '@baleada/composition-vue'
import {
  clicks,
  drag,
  dragdrop,
  pan,
  swipe,
  taps,
} from '@baleada/listenable-gestures'

export default {
  setup() {
    const main = ref(null),
          el = ref(null),
          el2 = ref(null)

    const listenable = useListenable('recognizeable', {
        recognizeable: {
          handlers: drag({
            // onDown: data => console.log(JSON.stringify(data, null, 2)),
            // onMove: data => console.log(JSON.stringify(data, null, 2)),
            // onEnd: data => console.log(data.status),
          })
        }
      })

    function listen () {
      listenable.value.listen(
        ({ event, recognizeable, api }) => {
          console.log({
            velocity: recognizeable.metadata.velocity,
            distance: recognizeable.metadata.distance,
            angle: recognizeable.metadata.angle,
            direction: recognizeable.metadata.direction,
          })
        },
        {
          target: main.value,
          // whitelist: ['section.one']
        }
      )

      console.log(listenable.value.activeListeners)
    }
    function listen2 () {
      listenable.value.listen((touch) => {
        console.log(touch)
      }, { target: el2.value })
    }

    function stop () {
      listenable.value.stop()
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
