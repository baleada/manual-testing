<template lang="html">
  <section>
    <input type="text" @input="handleInput" :value="query" />
    <button @click="handleClick">
      Search
    </button>
    <ul>
      <li
        v-for="(result, index) in searchable.results"
        :key="index"
      >
        {{ result }}
      </li>
    </ul>
  </section>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import { useSearchable } from '@baleada/composition-vue'

export default {
  setup () {
    const searchable = useSearchable([
            'tortilla',
            'beans',
            'huevito',
            'aguacate',
            'mantequilla',
          ]),
          query = ref(''),
          handleInput = ({ target: { value } }) => (query.value = value),
          handleClick = () => {
            searchable.value.search(query.value)
            console.log(searchable.value.results)
          }

    return {
      searchable,
      query,
      handleInput,
      handleClick,
    }
  }
}
</script>