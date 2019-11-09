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

// import useListenable from '~/assets/js/composition/useListenable'
import { Listenable } from '@baleada/logic'

import is from '@baleada/logic/lib/util/is'

function toProvisions(instance) {
  const publicProperties = {
    prototype: Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).slice(1), // don't include constructor
    instance: Object.getOwnPropertyNames(instance)
  }

  return publicProperties.instance.concat(publicProperties.prototype)
    .reduce(
      (provisions, property) => ({
        ...provisions,
        [property]: is.function(instance[property]) ? instance[property].bind(instance) : instance[property]
      }),
      {}
    )
}


export default {
  setup() {
    const observed = ref(null)

    function resolveElements (possibleRef) {
      return isRef(possibleRef) ? possibleRef.value : possibleRef
    }

    function resolveOptionsElements (options) {
      ['element', 'elements'].forEach(property => options.hasOwnProperty(property) && (options[property] = resolveElements(options[property])))
      return options
    }

    function useListenable(state, options) {
      let reactiveInstance = reactive({})
      onMounted(() => {
        state = resolveElements(state)
        options = resolveOptionsElements(options)
        const instance = new Listenable(state, options),
              provisions = toProvisions(instance)

        for (let property in provisions) {
          reactiveInstance[property] = provisions[property]
        }

        console.log(reactiveInstance)
      })
      onBeforeUnmount(() => {
        reactiveInstance.stop()
      })

      return reactiveInstance
    }

    let reactiveInstance = useListenable('resize', { element: observed })

    watch('reactiveInstance.activeListeners', () => {
      console.log(reactiveInstance.activeListeners)
    })

    const eventMetadata = computed(() => {
      return JSON.stringify(reactiveInstance.eventMetadata, null, 2)
    })

    function listen () {
      reactiveInstance.listen((event) => {
        console.log(event)
      })
    }

    function stop () {
      reactiveInstance.stop()
    }

    function mutate () {
      observed.value.textContent = 'I\'ve been mutated'
    }

    return {
      reactiveInstance,
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
