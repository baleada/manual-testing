<template lang="html">
  <main class="p-8 bg-gray-8 h-screen w-screen flex flex-col items-center justify-center text-gray-4 space-x-4">
    <input 
      ref="baleada"
      class="bg-gray-9 text-gray-4 p-4 w-full max-w-2"
      type="string"
      :value="completeable.string"
    />
    <span class="mt-3 block w-full max-w-2 h-em-1">{{ completeable.segment }}</span>
    <span class="mt-3 block w-full max-w-2 h-em-1">inputStatus: {{ inputStatus }}</span>
    <span class="mt-3 block w-full max-w-2 h-em-1">valueStatus: {{ valueStatus }}</span>
    <span class="mt-3 block w-full max-w-2 h-em-1">arrowStatus: {{ arrowStatus }}</span>
    <pre class="mt-3 block w-full max-w-2"><code>{{ jsonSelection }}</code></pre>
    <button type="button" class="mt-3 border-4 border-gray-4 p-2 rounded-5" @click="complete">complete</button>
  </main>
</template>

<script>
import { watchEffect, watch, computed, ref, onMounted } from '@vue/composition-api'
import { useCompleteable, useListenable } from '@baleada/vue-composition'

function nextTick (callback) {
  setTimeout(callback, 0)
}

export default {
  setup () {
    // Create shared state for handlers
    const completeable = useCompleteable('Baleada: a toolkit for building web apps', { segment: { from: 'selection', to: 'selection' } }),
          baleada = ref(null),
          jsonSelection = computed(() => JSON.stringify(completeable.value.selection)),
          inputStatus = ref('ready'), // ready|focused|blurred
          valueStatus = ref('ready'), // ready|selecting|selected
          arrowStatus = ref('ready') // ready|pressed|handled

    // Define handler logic
    function handleInput (event) {
      const { target: { value, selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event
      completeable.value.setString(value)
      completeable.value.setSelection({ start, end, direction })
    }
    
    function handleSelect (event) {
      switch (valueStatus.value) {
      case 'ready':
        // unreachable
        break
      case 'selecting':
        // do nothing. This event was triggered programmatically, not by the user.
        break
      case 'selected':
        const { target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event
        completeable.value.setSelection({ start, end, direction })
        break
      }
    }

    function handleMouseup (event) {
      const { target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event

      switch (inputStatus.value) {
      case 'ready':
      case 'blurred':
        inputStatus.value = 'focused'
        nextTick(completeable.value.setSelection({ start, end, direction }))
        break
      case 'focused':
        nextTick(completeable.value.setSelection({ start, end, direction }))  
        break
      }      
    }

    function handleArrowKeyup (event) {
      const { shiftKey, metaKey, target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event
      if (!shiftKey) { // Breaks for remapped keyboards :'(
        completeable.value.setSelection({ start, end, direction })
      }
    }

    function handleArrowKeydown (event) {
      const { metaKey } = event
      if (metaKey) {
        arrowStatus.value = 'unhandled'
      }
    }

    function handleMeta (event) {
      const { shiftKey, target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event
      if (!shiftKey) { // Breaks for remapped keyboards :'(
        switch (arrowStatus.value) {
        case 'ready':
        case 'handled':
          // do nothing
          break
        case 'unhandled':
          arrowStatus.value = 'handled'
          completeable.value.setSelection({ start, end, direction })
        }
        completeable.value.setSelection({ start, end, direction })
      }
    }

    function handleFocus ({ target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } }) {
      switch (inputStatus.value) {
      case 'ready':
      case 'blurred':
        switch (valueStatus.value) {
        case 'selecting':
          // do nothing. This event was triggered programmatically, not by the user.
          break
        case 'ready':
        case 'selected':
          inputStatus.value = 'focused'
          const { target: { selectionStart: start, selectionEnd: end, selectionDirection: direction } } = event
          completeable.value.setSelection({ start, end, direction })
          break
        }
        break
      case 'focused':
        // unreachable
        break
      }
    }

    function handleBlur () {
      inputStatus.value = 'blurred'
    }

    // Set up listenables
    const input = useListenable('input'),
          select = useListenable('select'),
          mouseup = useListenable('mouseup'),
          arrowKeyup = useListenable('arrow', { keycombo: 'up' }),
          arrowKeydown = useListenable('arrow'),
          meta = useListenable('cmd', { keycombo: 'up' }),
          focus = useListenable('focus'),
          blur = useListenable('blur'),
          listenables = [
            { listenable: input, handler: handleInput },
            { listenable: select, handler: handleSelect },
            { listenable: mouseup, handler: handleMouseup },
            { listenable: arrowKeyup, handler: handleArrowKeyup },
            { listenable: arrowKeydown, handler: handleArrowKeydown },
            { listenable: meta, handler: handleMeta },
            { listenable: focus, handler: handleFocus },
            { listenable: blur, handler: handleBlur },
          ]

    onMounted(() => {
      listenables.forEach(({ listenable, handler }) => {
        listenable.value.listen(handler, { target: baleada.value })
      })
    })
    
    // Define completion and selection logic
    function complete () {
      completeable.value.complete('baleada', { newSelection: 'completion' })
    }

    watch(
      () => completeable.value.selection.start + completeable.value.selection.end,
      () => {
        if (baleada.value !== null) {
          switch (inputStatus.value) {
          case 'ready':
          case 'blurred':
            // Completeable was changed by a button click
            valueStatus.value = 'selecting'
            baleada.value.focus()
            baleada.value.setSelectionRange(
              completeable.value.selection.start,
              completeable.value.selection.end,
              completeable.value.selection.direction,
            )
            nextTick(() => (valueStatus.value = 'selected'))
            break
          case 'focused':
            // Completeable was changed by an input event or a keycombo
            valueStatus.value = 'selecting'
            baleada.value.setSelectionRange(
              completeable.value.selection.start,
              completeable.value.selection.end,
              completeable.value.selection.direction,
            )
            nextTick(() => (valueStatus.value = 'selected'))
            break
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
      handleMouseup,
      handleFocus,
      handleArrowKeyup,
      handleArrowKeydown,
      handleMeta,
      inputStatus,
      valueStatus,
      arrowStatus,
    }
  }
}
</script>
