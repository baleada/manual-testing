<template lang="html">
  <main class="p-8 bg-gray-8 h-screen w-screen flex flex-col items-center justify-center text-gray-4 space-x-4">
    <!-- <input 
      ref="input"
      class="bg-gray-9 text-gray-4 p-4 w-full max-w-2"
      type="string"
      :value="completeable.string"
    />
    <span class="mt-3 block w-full max-w-2 h-em-1">{{ completeable.segment }}</span>
    <pre class="mt-3 block w-full max-w-2"><code>{{ resultsJson }}</code></pre>
    <ul ref="datalist" role="listbox">
      <li 
        v-for="result in navigateable.array"
        :key="result"
        :value="result"
        role="option"
      ></li>
    </ul> -->
  </main>
</template>

<script>
// import { ref, computed } from '@vue/composition-api'
// import { useCompleteableInput, useAutocomplete } from '@baleada/vue-features'
// import { useCompleteable } from '@baleada/vue-composition'

// export default {
//   setup () {
//     const input = ref(null),
//           datalist = ref(null),
//           resultsOptions = ['tortilla', 'beans', 'aguacate', 'huevito', 'queso', 'mantequilla'],
//           { completeable, searchable, navigateable } = useAutocomplete({
//             completeable: ['', { segments: { from: 'divider', to: 'divider' } }],
//             searchable: [ resultsOptions, { threshold: 0.6 } ],
//             navigateable: [resultsOptions],
//             input,
//             options,
//             // toQuery
//           }),
//           resultsJson = computed(() => JSON.stringify(searchable.value.results, null, 2))
          
//     function complete () {

//     }

//     return {
//       input,
//       completeable,
//       resultsJson,
//       complete,
//       navigateable,
//     }
//   }
// }
</script>
