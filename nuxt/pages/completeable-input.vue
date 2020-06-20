<template lang="html">
  <main class="p-8 bg-gray-8 h-screen w-screen flex flex-col items-center justify-center text-gray-4 space-x-4">
    <input type="text" @input="inputHandle" />
    <textarea 
      ref="baleada"
      class="bg-gray-9 text-gray-4 p-4 w-full max-w-2"
      type="string"
      :value="completeable.string"
    />
    <span class="mt-3 block w-full max-w-2 h-em-1">{{ completeable.segment }}</span>
    <pre class="mt-3 block w-full max-w-2"><code>{{ jsonSelection }}</code></pre>
    <button type="button" class="mt-3 border-4 border-gray-4 p-2 rounded-5" @click="complete">complete</button>
  </main>
</template>

<script>
import { ref, computed, onMounted, getCurrentInstance } from '@vue/composition-api'
import { useCompleteableInput } from '@baleada/vue-features'
import { useCompleteable } from '@baleada/vue-composition'

export default {
  setup () {
    const baleada = ref(null),
          completeable = useCompleteable('Baleada: a toolkit for building web apps', { segment: { from: 'divider', to: 'divider' }, divider: /\n/ }),
          jsonSelection = computed(() => JSON.stringify(completeable.value.selection))


    useCompleteableInput({
      completeable, 
      input: baleada  
    })

    function complete () {
      completeable.value.complete('> ' + completeable.value.segment.split('\n').join('\n> '))
    }

    function inputHandle (event) {
      console.log(event)
      console.log({
        ...event,
        target: {
          ...event.target,
          value: 'intercepted'
        }
      })
    }

    return {
      baleada,
      completeable,
      jsonSelection,
      complete,
      inputHandle,
    }
  }
}
</script>
