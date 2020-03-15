<template lang="html">
  <main class="relative flex flex-col items-center h-screen">
    <div class="flex items-center">
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="play">play</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="reverse">reverse</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="setPlaybackRate">setPlaybackRate</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="pause">pause</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="restart">restart</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="stop">stop</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="seek">seek</button>
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
import { useAnimateable } from '@baleada/composition/vue'

export default {
  setup() {
    const el = ref(null),
          control1 = { x: 0.215, y: 0.61 },
          control2 = { x: 0.355, y: 1 },
          // control1 = { x: 0, y: 0 },
          // control2 = { x: 1, y: 1 },
          keyframes = [
            { 
              progress: 0.75,
              data: {
                translate: 0,
              },
            },
            { 
              progress: 0,
              data: {
                backgroundColor: 'hsla(242, 100%, 97%, 1.0)',
                textContent: [],
              },
              timing: [
                { x: 0, y: 0 },
                { x: 1, y: 1 },
              ]
            },
            { 
              progress: 1,
              data: {
                translate: 150,
              },
            },
            { 
              progress: .5,
              data: {
                backgroundColor: 'hsla(247, 61%, 60%, 1.0)',
                textContent: 'baleada'.split(''),
              },
            },
          ],
          animateable = useAnimateable(
            // Keyframes
            keyframes,
            // Options
            {
              duration: 5000,
              timing: [
                control1,
                control2,
              ],
              iterations: 1,
            },
          )
    
    function handleFrame (frame) {
      const { data: { translate, backgroundColor, textContent } } = frame
      el.value.style.transform = `translateX(${translate}%`
      el.value.style.backgroundColor = backgroundColor
      el.value.textContent = textContent.join('')
    }

    function play () {
      animateable.value.play(handleFrame)
    }

    function reverse () {
      animateable.value.reverse(handleFrame)
    }

    function setPlaybackRate () {
      animateable.value.setPlaybackRate(4)
    }

    function pause () {
      animateable.value.pause()
    }

    function restart () {
      animateable.value.restart()
    }

    function stop () {
      animateable.value.stop()
    }

    function seek () {
      animateable.value.seek(1.25, handleFrame)
    }

    function log () {
      console.log(JSON.stringify(animateable.value.time, null, 2))
      console.log(JSON.stringify(animateable.value.progress, null, 2))
    }

    return {
      el,
      play,
      reverse,
      pause,
      setPlaybackRate,
      restart,
      stop,
      seek,
      log,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
