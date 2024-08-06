<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'dazy',
    data() {
        return {
            msg : ''
        }
    },
    methods: {
        getResponse(){
            const path = 'http://127.0.0.1:5000/dazy';
            axios.get(path)
            .then ((res) => {
                console.log(res.data)
                this.msg = res.data;
            })
            .catch ((err) => {
                console.error(err);
            });
        },
    },
    created(){
        this.getResponse();
    }
}
</script>