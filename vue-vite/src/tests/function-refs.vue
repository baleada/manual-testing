<template>
  <ul>
    <li
      v-for="{ item, index } in items"
      :ref="functionRef"
      :key="index"
    >{{ index }}</li>
  </ul>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const items = ref([1, 2, 3, 4, 5])

    function functionRef () {
      console.log(arguments)
    }

    return {
      items, functionRef,
    }
  }
}
</script>
