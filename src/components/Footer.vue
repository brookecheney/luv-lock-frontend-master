
<template>
    <v-footer dark padless>
        <v-row justify="center" no-gutters>
            <v-col class=" py-4 text-center white--text" cols="12">
                <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                  <router-link to="/TermsCondition" class="none">Terms & Conditions</router-link><br>
                  
                </v-btn>
                 <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
                  <router-link to="/PublicPrivacy" class="none">Privacy Policy</router-link><br>
                  
                </v-btn>
            </v-col>
            <v-col class=" py-4 text-center white--text" cols="12">
                {{ new Date().getFullYear() }} — <strong>Luv Lock</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>




<script>
export default {
    data: () => ({
        links: [
            'Home',
           
        ],
       
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>

<style scoped>
.footer {
    position: relative;
    bottom: 0px;
    width: 100%;
}
</style>