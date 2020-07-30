<template>
  <div id="app"> 
    <div class="mergely-full-screen-8">
      <div class="mergely-resizer">
        <div id="mergely"></div>
      </div>
    </div>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import 'mergely/lib/mergely.css'
import 'mergely'

export default {
  name: 'App',
  mounted () {
    jQuery('#mergely').mergely({
      lhs: (setValue) => {
        setValue('the quick red fox\njumped over the hairy dog');
      },
      rhs: (setValue) => {
        setValue('the quick brown fox\njumped over the lazy dog');
      }
    });
  }
}
</script>

<style lang="scss">
</style>
