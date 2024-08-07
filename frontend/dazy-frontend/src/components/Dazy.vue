<template>
        <div>
            <p>salut</p>
            <p>{{ props.test.truc }}</p>
        </div>
        <div>
            <router-link to="/new">
                <img src="@/assets/Fiore_01.svg" alt="DAzyzyz" style="width: 50%;">
            </router-link>
            
        </div>
</template>

<script setup>

const props = defineProps(['test']);

</script> 