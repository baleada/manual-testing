<template>
  <div class="m-10">
    <SimpleTwitter class="h-10 w-10"/>
    <SimpleGitLab class="h-10 w-10"/> 
  </div>
</template>

<script>
import { SimpleTwitter, SimpleGitLab } from '@baleada/vue-simple-icons'

export default {
  components: {
    SimpleTwitter,
    SimpleGitLab,
  },
  setup () {
    
  }
}
</script>