<template lang="html">
  <main>
    <section class="one">
      <button type="button" name="button" @click="listen">listen</button>
      <button type="button" name="button" @click="stop">stop</button>
      <button type="button" name="button" @click="mutate">mutate</button>
      <div><span>eventMetadata:</span></div>
      <pre><code>{{ eventMetadata }}</code></pre>
    </section>
    <section ref="observed" class="two">

    </section>
  </main>
</template>

<script>
import { reactive, ref, isRef, toRefs, computed, readonly, watch, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered, provide, inject } from '@vue/composition-api'

import useListenable from '~/assets/js/composition/useListenable'

export default {
  setup() {
    const observed = ref(null)

    let instance = {}
    onMounted(() => {
      instance = useListenable('resize', {
        element: observed.value
      })
    })
    onBeforeUnmount(() => {
      instance.stop()
    })

    watch('instance.activeListeners', () => {
      console.log(instance.activeListeners)
    })

    const eventMetadata = computed(() => {
      return JSON.stringify(instance.eventMetadata, null, 2)
    })

    function listen () {
      instance.listen((event) => {
        console.log(event)
      })
    }

    function stop () {
      instance.stop()
    }

    function mutate () {
      observed.value.textContent = 'I\'ve been mutated'
    }

    return {
      instance,
      eventMetadata,
      listen,
      stop,
      observed,
      mutate
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
    height: 100vh;
    background-color: #666;
  }
</style>
