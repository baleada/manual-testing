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
import { EvaActivity } from '@baleada/vue-icons/eva-icons'
import { SimpleGitLab } from '@baleada/vue-icons/simple-icons'
import { HeroiconsGlobe } from '@baleada/vue-icons/heroicons'

import { EvaGlobe2 } from '@baleada/vue-icons'
import { SimpleTwitter } from '@baleada/vue-icons'
import { HeroiconsCashOutline } from '@baleada/vue-icons'


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