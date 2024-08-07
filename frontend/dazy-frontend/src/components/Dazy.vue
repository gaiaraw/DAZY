<template>
        <div>
            <p>salut</p>
            <p>{{ props.test.truc }}</p>
        </div>
        <div>
            <router-link to="/new">
                <img id="dazy" src="@/assets/daz.svg" alt="dazy" title="dazy">
            </router-link>
            
        </div>
</template>

<script setup>

const props = defineProps(['test']);

</script> 

<style>
#dazy{
    width: 50%;
    transition: filter 0.5s ease;
}
#dazy:hover {
            transform: scale(1.15); /* Agrandit légèrement l'image */
            filter: drop-shadow(10px 10px 10px rgb(255, 242, 0)); /* Ombre jaune */
        }

</style>