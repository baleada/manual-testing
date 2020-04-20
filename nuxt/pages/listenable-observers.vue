<template lang="html">
  <main>
    <section ref="el" class="one">
      <button type="button" name="button" @click="listen">listen</button>
      <button type="button" name="button" @click="stop">stop</button>
      <button type="button" name="button" @click="mutate">mutate</button>
      <div><span>eventMetadata:</span></div>
      <pre><code>{{ eventMetadata }}</code></pre>
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

    const listenable = useListenable('resize')

    const eventMetadata = computed(() => {
      return JSON.stringify(listenable.value.eventMetadata, null, 2)
    })

    function listen () {
      listenable.value.listen((event) => {
        console.log(event)
      }, { target: el2.value, observe: { characterData: true, attributeOldValue: true, attributes: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true } })
    }
    function listen2 () {
      listenable.value.listen((event) => {
        console.log(event)
      }, { target: el2.value })
    }

    function stop () {
      listenable.value.stop({ target: el2.value })
    }
    function stop2 () {

    }
    function mutate () {
      el2.value.textContent = 'I\'ve been mutated'
    }


    return {
      eventMetadata,
      listen,
      listen2,
      stop,
      stop2,
      mutate,
      el,
      el2
    }
  },
}
</script>

<style media="screen" lang="css">
  section.one {
    height: 150vh;
    background-color: #333;
  }

  section.two {
    height: 150vh;
    background-color: #666;
  }
</style>
