
<script>
  import GridComp from '@/components/GridComp.vue'
  import { mapMutations, mapState  } from 'vuex';

  export default{
    components:{
      GridComp
    }, 
    methods:{
      ...mapMutations(['showSites', 'setFalse'])
    },
    computed:{
      ...mapState(['activo'])
    }
    
  }
</script>

<template>
  <div class="main" @click="setFalse($event)">

  
    <GridComp></GridComp>
    
  </div>
  
</template>


