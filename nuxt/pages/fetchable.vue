<template lang="html">
  <main class="relative flex flex-col items-center h-screen">
    <div class="flex items-center">
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="fetch">fetch</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="post">post</button>
      <button class="p-2 rounded-full bg-blue-6 text-blue-1" type="button" @click="log">log</button>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import { useFetchable } from '@baleada/vue-composition'

export default {
  setup() {
    const el = ref(null),
          fetchable = useFetchable('https://httpbin.org/get'),
          postable = useFetchable('https://httpbin.org/post')

    function fetch () {
      fetchable.value.fetch({ method: 'get' })
        .then(() => {
          console.log(fetchable.value.response)

          fetchable.value.json.then(resolveable => console.log(resolveable))
        })
    }

    function post () {
      postable.value.post()
        .then(() => {
          console.log(postable.value.response)
        })
    }

    function log () {
      console.log(fetchable.value.status)
      console.log(JSON.stringify(fetchable.value.json, null, 2))
    }

    return {
      el,
      fetch,
      post,
      log,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
