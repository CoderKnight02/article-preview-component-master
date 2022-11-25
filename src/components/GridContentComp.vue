<script>
    import { mapMutations, mapState  } from 'vuex';

    export default{

        methods:{
            ...mapMutations(['showSites'])
        },
        computed:{
            ...mapState(['activo'])
        }

    }

</script>

<template>
    <div class="grid-cont">

                    
        <h1>
            Shift the overall look and feel by adding these wonderful 
            touches to furniture in your home
        </h1>
        <p>
            Ever been in a room and felt like something was missing? Perhaps 
            it felt slightly bare and uninviting. I’ve got some simple tips 
            to help you make any room feel complete.
        </p>

        <div class="grid-cont-avatar">
            <div class="grid-avatar">
                <img src="../assets/images/avatar-michelle.jpg" alt="Michelle">
            </div>
            <div>
                <p>Michelle Appleton</p>
                <p>28 Jun 2022</p>
            </div>
            
            <div class="places" :class="{'places-activo': activo}">
                <p>share</p>
                <img src="../assets/images/icon-facebook.svg" alt="facebook">    
                <img src="../assets/images/icon-pinterest.svg" alt="pinterest">    
                <img src="../assets/images/icon-twitter.svg" alt="tweeter"> 
                <div class="share2">
                    <img id="share" src="../assets/images/icon-share.svg" alt="Share">
                </div>    
            </div>
            

            <div class="share">
                <img id="share" src="../assets/images/icon-share.svg" alt="Share">
            </div>

        </div>

        
    </div>
</template>

<style lang="scss">
    .grid-cont{
        position: relative;
        top: 0;
        left: 0;
        padding: 30px ;

        > p{
            font-size: .85rem;
            color: hsl(214, 17%, 51%);
        }

        .grid-cont-avatar{
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            
            p{
                margin: 0;
                margin-bottom: 5px;
                font-size: .75rem;
            }

            .grid-avatar{

                img{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                
            }

            .share, .share2 {
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                background:  hsl(210, 46%, 95%);
                margin-left: auto;
                margin-right: 20px;
            }


        }
        
    }

    .places{

        display: flex;
        align-items: center;
        visibility: hidden;
        opacity: 0;
        transform: scale(.1) translateY(100px);
        transition: all .3s;
        transition-timing-function: cubic-bezier(0.6, -0.28, 0.74, 0.05);
        gap: 15px;

        p{
            margin:  0 !important;
            color:white;
            text-transform: uppercase;
            letter-spacing: .2rem;
        }

        // POSICION DE LA VENTANA MODAL
        height: 45px;
        position: absolute;
        right: -80px;
        top: -50px;
        background-color: rgb(45, 45, 45);
        border-radius: 10px;
        padding-inline: 35px;

        @media (max-width: 825px){
            border-radius: 0;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            position: absolute;
            left: -30px;
            top: unset;
            bottom: -30px;
            height: 0;
            width: min(400px, 90vw);

            scale: 1;
            transform: translateY(0);
            transition: height .3s;
            

            &::after{
                visibility: hidden;
            }
        }
    
        // ESTADOS DE LA VENTANA MODAL

        &::after{
            position: absolute;
            left: 50%;
            bottom: -10px;
            content: '';
            background: white;
            border-top: 10px solid rgb(45, 45, 45);
            border-left: 10px solid transparent;
            border-bottom: none;
            border-right: 10px solid transparent;
            transform: translateX(-50%);
        }        
    }

    .places-activo{

        visibility: visible;
        opacity: 1;
        transform: scale(1);

        @media (max-width: 825px){
            height: 82px;

        }
    }
    .share2{
        display: none !important;
        // visibility: hidden;
        @media (max-width: 825px){
            display: flex !important;
        }
    }

    
</style>