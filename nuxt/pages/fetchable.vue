<template lang="html">
  <main class="relative flex flex-col items-center h-screen">
    <div class="flex items-center">
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="fetch">fetch</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="log">log</button>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import { useFetchable } from '@baleada/composition-vue'

export default {
  setup() {
    const el = ref(null),
          fetchable = useFetchable('https://httpbin.org/get')

    function fetch () {
      fetchable.value.fetch({ method: 'post' })
        .then(() => {
          console.log(fetchable.value.response)
        })
    }

    function log () {
      console.log(JSON.stringify(fetchable.value.status, null, 2))
      console.log(JSON.stringify(fetchable.value.responseJson, null, 2))
    }

    return {
      el,
      fetch,
      log,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
