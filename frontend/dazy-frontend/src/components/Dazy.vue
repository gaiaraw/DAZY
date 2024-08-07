<template>
        <div>
            <p>salut</p>
            <p>{{ props.test.truc }}</p>
        </div>
        <div>
            <router-link to="/new">
                <img id="dazy" src="@/assets/DAZ_LOGO_FLEUR.svg" alt="dazy" title="dazy">
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
    filter: brightness(0) saturate(100%) invert(12%) sepia(100%) saturate(1800%) hue-rotate(250deg) brightness(100%) contrast(100%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ajoute une ombre */
}

</style>