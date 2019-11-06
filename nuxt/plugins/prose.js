import Vue from 'vue'
import ProseArticle from '~/components/prose/ProseArticle.vue'
import ProseAside from '~/components/prose/ProseAside.vue'
import ProseBlockquote from '~/components/prose/ProseBlockquote.vue'
import ProseCodeblock from '~/components/prose/ProseCodeblock.vue'
import ProseColumnheader from '~/components/prose/ProseColumnheader.vue'
import ProseGrid from '~/components/prose/ProseGrid.vue'
import ProseGridcell from '~/components/prose/ProseGridcell.vue'
import ProseHeading from '~/components/prose/ProseHeading.vue'
import ProseNav from '~/components/prose/ProseNav.vue'
import ProseRow from '~/components/prose/ProseRow.vue'
import ProseRowgroup from '~/components/prose/ProseRowgroup.vue'
import ProseTable from '~/components/prose/ProseTable.vue'
import ProseTableOfContents from '~/components/prose/ProseTableOfContents.vue'
import ProseUpdatedAt from '~/components/prose/ProseUpdatedAt.vue'
import ProseThreeColumnLayout from '~/components/prose/ProseThreeColumnLayout.vue'

Vue.component('ProseArticle', (resolve, reject) => resolve(ProseArticle))
Vue.component('ProseAside', (resolve, reject) => resolve(ProseAside))
Vue.component('ProseBlockquote', (resolve, reject) => resolve(ProseBlockquote))
Vue.component('ProseCodeblock', (resolve, reject) => resolve(ProseCodeblock))
Vue.component('ProseColumnheader', (resolve, reject) => resolve(ProseColumnheader))
Vue.component('ProseGrid', (resolve, reject) => resolve(ProseGrid))
Vue.component('ProseGridcell', (resolve, reject) => resolve(ProseGridcell))
Vue.component('ProseHeading', (resolve, reject) => resolve(ProseHeading))
Vue.component('ProseNav', (resolve, reject) => resolve(ProseNav))
Vue.component('ProseRow', (resolve, reject) => resolve(ProseRow))
Vue.component('ProseRowgroup', (resolve, reject) => resolve(ProseRowgroup))
Vue.component('ProseTable', (resolve, reject) => resolve(ProseTable))
Vue.component('ProseTableOfContents', (resolve, reject) => resolve(ProseTableOfContents))
Vue.component('ProseUpdatedAt', (resolve, reject) => resolve(ProseUpdatedAt))
Vue.component('ProseThreeColumnLayout', (resolve, reject) => resolve(ProseThreeColumnLayout))
