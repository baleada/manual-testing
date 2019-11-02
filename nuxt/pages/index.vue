<template>
  <main>
    <button @click="doStuff">
      do stuff
    </button>
    <button @click="doOtherStuff">
      do other stuff
    </button>
    <button @click="() => instance.login('baleada-example@alexvipond.dev', 'password')">
      login
    </button>
    <pre><code>{{ responsesJson }}</code></pre>
    <pre><code>{{ user }}</code></pre>
  </main>
</template>

<script>
import { ref, computed, onMounted } from '@vue/composition-api'
import useIdentifiableGoTrue from '~/assets/js/composition/useIdentifiableGoTrue'

export default {
  setup() {
    const userData = ref(null)
    const instance = useIdentifiableGoTrue({
            onGetUserData: data => (userData.value = data),
            APIUrl: 'https://baleada.netlify.com/.netlify/identity',
            setCookie: true,
          }),
          responsesJson = computed(() => JSON.stringify(instance.responses, null, 2)),
          user = computed(() => JSON.stringify(instance.user, null, 2))


    function doStuff () {
      console.log(instance.userData)
      console.log(instance)
      // instance.login('baleada-example@alexvipond.dev', 'password')
    }
    function doOtherStuff () {
      console.log(userData.value)
    }

    return {
      instance,
      responsesJson,
      user,
      doStuff,
      doOtherStuff,
    }
  },
}
</script>

<style media="screen">
  body {
    background-color: #333;
    color: #fafafa;
    padding: 100px;
  }
</style>
