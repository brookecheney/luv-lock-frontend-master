<template>
    <v-app fluid>
        <Header />
        <v-content>
            <router-view></router-view>
            <!-- <router-view></router-view> -->
        </v-content>
        <Footer />
    </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'App',

    components: {
        Header,
        Footer,
    },

    data: () => ({
        ipAddress: '127.0.0.1',
    }),
    
};
</script>

