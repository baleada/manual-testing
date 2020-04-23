<template lang="html">
  <main class="p-8 bg-gray-8 h-screen w-screen flex flex-col items-center justify-center text-gray-4 space-x-4">
    <input 
      ref="baleada"
      class="bg-gray-9 text-gray-4 p-4"
      type="string"
      :value="completeable.string"
      @input="handleInput"
      @select="handleSelect"
      @blur="handleBlur"
      @focus="handleFocus"
      @click="handleClick"
      @keydown.up="handleArrow"
      @keydown.right="handleArrow"
      @keydown.down="handleArrow"
      @keydown.left="handleArrow"
    />
    <span class="h-em-1">{{ completeable.segment }}</span>
    <pre class=""><code>{{ jsonSelection }}</code></pre>
    <button type="button" @click="complete">complete</button>
  </main>
</template>

<script>
import { watchEffect, computed, ref } from '@vue/composition-api'
import { useCompleteable } from '@baleada/vue-composition'

export default {
  setup () {
    const completeable = useCompleteable('Baleada: a toolkit for building web apps', { segment: { from: 'divider', to: 'divider' } }),
          baleada = ref(null),
          jsonSelection = computed(() => JSON.stringify(completeable.value.selection)),
          status = ref('ready')

    function handleInput (event) {
      const { target: { value, selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event

      completeable.value.setString(value)
      completeable.value.setSelection({ start, end, direction })
    }
    
    function handleSelect (event) {
      const { target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event

      console.log(event)
      
      // Guard against infinite watch loop triggered by setSelectionRange
      if (completeable.value.selection.start !== start || completeable.value.selection.end !== end) { 
        completeable.value.setSelection({ start, end, direction })
      }
    }

    function handleClick (event) {
      const { target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event
      status.value = 'focused'
      completeable.value.setSelection({ start, end, direction })
    }

    function handleArrow (event) {
      // const {
      //   target: {
      //     selectionStart: start, 
      //     selectionEnd: end, 
      //     selectionDirection: direction
      //   },
      //   shiftKey,
      // } = event

      // if (!shiftKey) {
      //   console.log('here')
      //   completeable.value.setSelection({ start, end, direction })
      //   console.log(completeable.value.selection)
      // }
    }

    function handleBlur () {
      status.value = 'blurred'
    }

    function handleFocus ({ target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } }) {
      switch (status.value) {
      case 'ready':
      case 'blurred':
        status.value = 'focused'

        switch (completeable.value.status) {
        case 'ready':
        case 'set':
          const { target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event
          completeable.value.setSelection({ start, end, direction })
          break
        case 'completed':
          // do nothing. Watcher will set selection range after complete is called.
          break
        }
        break
      case 'focused':
        //do nothing
        break
      }
    }
    
    function complete () {
      completeable.value.complete('baleada', { newSelection: 'completion' })
    }

    watchEffect(
      () => {
        if (baleada.value !== null) {
          switch (status.value) {
          case 'ready':
          case 'blurred':
            switch (completeable.value.status) {
            case 'ready':
            case 'set':
              // do nothing
              break
            case 'completed':
              baleada.value.focus()
              baleada.value.setSelectionRange(
                completeable.value.selection.start,
                completeable.value.selection.end,
                completeable.value.selection.direction,
              )
            }
            break
          case 'focused':
            switch (completeable.value.status) {
            case 'ready':
            case 'set':
              baleada.value.setSelectionRange(
                completeable.value.selection.start,
                completeable.value.selection.end,
                completeable.value.selection.direction,
              )
              break
            case 'completed':
              // do nothing
              break
            }
          }
        }
      }
    )
    
    return {
      baleada,
      completeable,
      handleInput,
      handleSelect,
      jsonSelection,
      complete,
      handleBlur,
      handleClick,
      handleFocus,
      handleArrow,
    }
  }
}
</script>
