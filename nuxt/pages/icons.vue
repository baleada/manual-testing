<template lang="html">
  <div class="m-10">
    <EvaActivity :class="'h-10 w-10'"/>
    <SimpleGitLab :class="'h-10 w-10'"/>
    <EvaGlobe2 :class="'h-10 w-10'"/>
    <SimpleTwitter :class="'h-10 w-10'"/>
  </div>
</template>

<script>
import { EvaActivity } from '@baleada/icons-vue/eva-icons'
import { SimpleGitLab } from '@baleada/icons-vue/simple-icons'
import { EvaGlobe2 } from '@baleada/icons-vue'
import { SimpleTwitter } from '@baleada/icons-vue'

export default {
  components: {
    EvaActivity,
    SimpleGitLab,
    EvaGlobe2,
    SimpleTwitter,
  },
  setup () {
    
  }
}
</script>