<template>
  <main>
    <SlotThing><span>hello</span></SlotThing>
    <button @click="doStuff">
      doStuff
    </button>
    <button @click="doStuff2">
      doStuff2
    </button>
    <div><span>executions: </span></div>
    <pre><code>{{ executions }}</code></pre>
    <div><span>time: </span></div>
    <pre><code>{{ time }}</code></pre>
    <div><span>timeElapsed: </span></div>
    <pre><code>{{ timeElapsed }}</code></pre>
    <div><span>timeRemaining: </span></div>
    <pre><code>{{ timeRemaining }}</code></pre>
  </main>
</template>

<script>
import { ref, computed, onMounted } from '@vue/composition-api'
import useDelayable from '~/assets/js/composition/useDelayable'

import SlotThing from '~/components/SlotThing'

export default {
  components: {
    SlotThing
  },
  setup() {
    const value1 = ref(''),
          value2 = ref(''),
          instance = useDelayable((param1, param2) => {
            value1.value = param1
            value2.value = param2
          }),
          timeElapsed = computed(() => {
            return JSON.stringify({
              total: Math.round(instance.timeElapsed.total),
              sinceLastExecution: Math.round(instance.timeElapsed.sinceLastExecution)
            }, null, 2)
          }),
          timeRemaining = computed(() => Math.round(instance.timeRemaining)),
          executions = computed(() => instance.executions),
          time = computed(() => JSON.stringify(instance.time, null, 2))

    function doStuff () {
      instance.interval(2000, ['butt', 'face'])
    }

    function doStuff2 () {
      instance.stop()
    }

    return {
      value1,
      value2,
      instance,
      time,
      executions,
      timeElapsed,
      timeRemaining,
      doStuff,
      doStuff2,
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
