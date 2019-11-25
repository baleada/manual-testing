<template lang="html">
<ProseArticle>
  <component :is="article" />
</ProseArticle>
</template>

<script>
import article from '~/assets/md/prose.md'
export default {
  layout: 'ProseLayoutThreeColumn',
  setup () {
    return {
      article
    }
  }
}
</script>

<style>
[role="grid"] {
  display: table;
}

[role="rowgroup"] {
  display: table-row-group;
}

[role="rowgroup"]:first-child {
  display: table-header-group;
}

[role="row"] {
  display: table-row;
}

[role="columnheader"],
[role="gridcell"] {
  display: table-cell;
  border: 1px solid black;
  padding: 1rem;
}

[role="columnheader"]:focus,
[role="gridcell"]:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}
</style>
