
<script>
    import GridContentComp from './GridContentComp.vue';
    export default{
        components:{
            GridContentComp
        }
    }

</script>

<template>
    <div class="grid-card">

        <div class="grid-img">
            <img src="@/assets/images/drawers.jpg" alt="Drawers jpg">
        </div>

        <GridContentComp></GridContentComp>
        
    </div>
</template>

<style lang="scss">
    .grid-card{
        background-color: white;
        display: grid;
        grid-template-columns: 40% 60%;
        width: 700px;
        border-radius: 10px;

        .grid-img{
            
            img{
                object-position: top ;
                object-fit: cover;
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                width: 100%;
                height: 100%;
                @media (max-width: 825px){
                    height: 280px;
                    border-radius: 0;
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
                    
                }
            }

        }
        @media (max-width: 825px) {
            grid-template-columns: auto;
            width: min(400px, 90vw) ;
        }
    }


</style>