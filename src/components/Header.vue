<template>
    <v-app-bar dark app>
        <!-- <v-container class="myheader" fluid> -->
        <v-row>
            <router-link to="/" class="vector">
                <v-img :src="logo" class="logo"></v-img>
            </router-link>
            <v-spacer></v-spacer>
            <p class="d-inline pa-2" style="padding: 2em .3em 1em .3em" v-responsive.lg.xl.md>
                <router-link v-responsive.lg.xl.md to="/TermsCondition" justify="right" class="links">
                    Terms & Conditions
                </router-link>
            </p>
    
            <p class="d-inline pa-2" style="padding: 2em 0.3em 1em .3em" v-responsive.lg.xl.md>
                <router-link v-responsive.lg.xl.md to="/PublicPrivacy" justify="right" class="links">
                    <v-spacer><span class="tab">|</span> Privacy Policy</v-spacer>
                </router-link>
            </p>
        </v-row>
  
        <br>
        <br>
        <!-- </v-container> -->
    </v-app-bar>
</template>

<script>
import logo from "@/images/logo.png"
import image from "@/images/iphone.png"
import defaultImage from "@/images/Signal.png"
import logoone from "@/images/IphoneLOGO.png"
import logotwo from "@/images/notebook.png"

export default {
    name: 'HelloWorld',

    components: {
        // Phone,

    },

    data: function() {
        return {
            logo,
            logoone,
            logotwo,
            defaultImage,
            image: [image],
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }
    }
}
</script>


<style>
.tab {
    padding-right: 10px;
}

.links {
    padding-top: 1px;
    color: white;
    text-decoration-line: underline;
}

.links2 {
    padding-top: .4px;
    color: white;
    font-size: 12px;
    text-decoration-line: underline;
}

.landingPage {
    font-size: 44px;
}

h1 {
    text-shadow: 4px 4px 8px #000000;
}

.footer {
    color: black;
}

.display-2 {
    font-size: 30px;
}

.real {
    margin-right: 300px;
}

.intro {
    color: black;
}

.rows {
    margin-left: 10%;
    margin-right: 10%;
}

.app {
    width: 300px;
    height: 100px;
}

.myheader {
    background-image: url('../images/day4.png');
    width: 100%;
    height: 550px;
    opacity: 88%;
}

.steps {
    margin: auto;
}

.steps {
    margin: auto;
}

.top {
    height: 30px;
}

.imgtop {
    width: 40px;
}

.day {
    width: 100%;
    height: 100%;
}

h1 {
    color: white;
}

h2 {
    color: black;
}

p {
    color: white;
}

.vector {
    width: 330px;
}

.img {
    width: 140px;
}

.steps {
    color: black;
}

.logo {
    width: 200px;
    margin: 4%;
}

.color {
    color: #C50909;
}
</style>
