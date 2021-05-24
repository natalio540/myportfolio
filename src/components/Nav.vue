<template lang="">
    <div>
        <nav>
            <router-link to="/"><img src="@/assets/images/logo.svg" alt="logo" class="logo"></router-link>
            <!-- <a href="index.html"></a> -->
                
            <ul class="menu">   
                <li> <a href="/#about">about</a> </li>  
                <li> <a href="/#work">work</a> </li>
                <li> <a href="/#contact">contact</a> </li>

               
            </ul>  

            <div class="responsive-buttons">
                <button class="next" @click="prevPage()">
                    <img src="@/assets/images/arrow-left-solid.svg" alt="next">
                </button>
                <button class="next" @click="nextPage()">
                    <img src="@/assets/images/arrow-right-solid.svg" alt="next">
                </button>
            </div>
            
            <!-- <router-link :to="{path:'/' + next}"><img src="#" alt="logo" class="next">#</router-link> -->
        </nav>
    </div>
</template>
<script>

export default {
    name:'Nav',
    methods:{
    prevPage(){
     this.$router.push({name: this.$router.currentRoute.value.meta.prev })
        },
    nextPage(){
     this.$router.push({name: this.$router.currentRoute.value.meta.next })
    }
}
}
</script>
<style lang="">
    /* @import './assets/styles/styles.css'; */
</style>