<template>
  <main>
    <div><button type="button" name="button" @click="() => fetchable.fetch()">Fetch</button></div>

    <div><span>fetching: {{ fetchable.fetching }}</span></div>

    <div><span>response:</span></div>
    <pre><code>{{ response }}</code></pre>

    <div><span>responseJson:</span></div>
    <pre><code>{{ responseJson }}</code></pre>
  </main>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import useFetchable from '~/assets/js/composition/useFetchable'

export default {
  setup() {
    const count = ref(0),
          fetchable = useFetchable('https://httpbin.org/get', {
            method: 'get',
          }),
          response = computed(() => {

            return JSON.stringify(fetchable.response, null, 2)
          }),
          responseJson = computed(() => {
            console.log('responseJson:')
            console.log(fetchable.responseJson)
            return JSON.stringify(fetchable.responseJson, null, 2)
          })


    console.log(fetchable.responseJson)
    return {
      fetchable,
      response,
      responseJson
    }
  },
}
</script>
