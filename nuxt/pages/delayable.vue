<template lang="html">
  <main class="relative flex flex-col items-center h-screen">
    <div class="flex items-center">
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="delay">delay</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="pause">pause</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="resume">resume</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="seek">seek</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="stop">stop</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="log">log</button>
    </div>
    <section
      class="relative mt-8"
      ref="el"
      :style="{ marginRight: 'auto', height: '250px', width: '250px', 'background-color': 'hsla(242, 100%, 97%, 1.0)' }"
    />
  </main>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import { useDelayable } from '@baleada/vue-composition'

export default {
  setup() {
    const el = ref(null),
          delayable = useDelayable(
            () => console.log('yay'),
            { delay: 500, executions: 4 }
          )

    function delay () {
      delayable.value.delay()
    }
    
    function pause () {
      delayable.value.pause()
    }

    function resume () {
      delayable.value.resume()
    }

    function stop () {
      delayable.value.stop()
    }

    function seek () {
      delayable.value.seek(1.25)
    }

    function log () {
      console.log(JSON.stringify(delayable.value.time, null, 2))
      console.log(delayable.value.progress, null, 2)
      console.log(delayable.value.executions)
      console.log(delayable.value.status)
    }

    return {
      el,
      delay,
      pause,
      resume,
      stop,
      seek,
      log,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
