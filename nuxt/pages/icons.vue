<template lang="html">
  <div class="m-10">
    <EvaActivity :class="'h-10 w-10'"/>
    <EvaGlobe2 :class="'h-10 w-10'"/>

    <SimpleGitLab :class="'h-10 w-10'"/>
    <SimpleTwitter :class="'h-10 w-10'"/>

    <HeroiconsGlobe :class="'h-10 w-10 fill-current'" />
    <HeroiconsCashOutline :class="'h-10 w-10 fill-current'" />
  </div>
</template>

<script>
import { EvaActivity } from '@baleada/icons-vue/eva-icons'
import { SimpleGitLab } from '@baleada/icons-vue/simple-icons'
import { HeroiconsGlobe } from '@baleada/icons-vue/heroicons'

import { EvaGlobe2 } from '@baleada/icons-vue'
import { SimpleTwitter } from '@baleada/icons-vue'
import { HeroiconsCashOutline } from '@baleada/icons-vue'


export default {
  components: {
    SimpleGitLab,
    SimpleTwitter,
    EvaActivity,
    EvaGlobe2,
    HeroiconsGlobe,
    HeroiconsCashOutline,
  },
  setup () {
    
  }
}
</script>