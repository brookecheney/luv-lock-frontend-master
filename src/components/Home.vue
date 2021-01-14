<template>
    <v-container class="spacing-playground  mb-auto" fluid>
        <v-card class="myheader" width="100%">
            <v-row>
                <v-spacer></v-spacer>
            </v-row>
            <v-row class="text-center">
                <v-col cols="12">
                    <v-img class="my-3" contain height="175" />
                </v-col>
                <v-col class="mb-4">
                    <h1 v-responsive.lg.xl.md class="landingPage">
                        Luv Lock
                    </h1>
                      <h5 v-responsive.xs.sm>
                        Join the world's 
                        Love Lock
                    </h5>
                    <p class="subheading font-weight-regular" v-responsive.lg.xl.md>
                        Place Luv Locks for any occasion, for any reason you want.<br>
                        All around the world.
                    </p>
                     <p class="subheading font-weight-regular home" v-responsive.xs.sm>
                        Place Luv Locks for any occasion, for any reason you want.
                        All around the world.
                    </p>
                </v-col>
            </v-row>
        </v-card>
        <v-container class="spacing-playground px-16 mx-auto" fluid>
            <v-container class="body">
    
                <v-row justify="right">
                    <v-col cols="12" lg="4" md="4" sm="12">
                        <img :src="image" width="100%" />
                    </v-col>
                    <v-col cols="12" lg="8" md="8" sm="12">
                        <br>
                        <br>
                        <h3 class="start"></h3>
                        <p class="intro">
                            To get started download the free Luv Lock app from Google or Apple.
                        </p>
                        <v-row>
                            <v-col cols="12" lg="5" md="5" sm="5">
                                <a href="https://play.google.com/store?&utm_source=na_Med&utm_medium=hasem&utm_content=Jul0119&utm_campaign=Evergreen&pcampaignid=MKT-DR-na-us-1000189-Med-hasem-py-Evergreen-Jul0119-Text_Search_BKWS-id_100740_%7cEXA%7cONSEM_kwid_43700045371544913&gclid=EAIaIQobChMI18WIsqHc6gIVDdbACh1K3w3EEAAYASAAEgIOo_D_BwE&gclsrc=aw.ds">
                                    <v-img src="@/images/googleplay.png" class="goog"></v-img>
                                </a>
                            </v-col>
                            <v-col cols="12" lg="5" md="5" sm="5">
                                <a href="https://www.apple.com/ios/app-store/">
                                    <v-img src="@/images/applestore.png" class="goog">
                                    </v-img>
                                </a>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <br>
                <br>
                <br>
                <br>
                <v-row justify="left">
                    <h2 class="threeSteps">3 Steps to begin your adventure</h2>
                </v-row>
                <br>
                <v-row class="steps">
                    <v-col :key="n" cols="12" lg="4" md="4" sm="12">
                        <v-card class="pa-2" flat>
                            <img :src="defaultImage" width="190px">
                            <h2 class="locks">1. Download the App</h2>
                            <p class="steps">Download the free Luv Lock app from Google or Apple App Stores</p>
                        </v-card>
                    </v-col>
                    <v-col :key="n" cols="12" lg="4" md="4" sm="12">
                        <v-card class="pa-2" flat>
                            <img :src="logoone" width="190px">
                            <h2 class="locks">2. Create a Luv Lock</h2>
                            <p class="steps">Create a Luv Lock.  Add a picture, a digital lock and decorate your image with stickers.</p>
                        </v-card>
                    </v-col>
                    <v-col :key="n" cols="12" lg="4" md="4" sm="12">
                        <v-card class="pa-2" flat>
                            <img :src="logotwo" width="190px">
                            <h2 class="locks">3. Place your Luv Lock and share with your friends</h2>
                            <p class="steps">Digitally place your Luv Lock anywhere in the world.  The share your digital luv lock with friends and family.</p>
                        </v-card>
                    </v-col>
                </v-row>
                <br>
                <br>
                <br>
                <br>
            </v-container>
        </v-container>
    </v-container>
</template>

<script>
import logo from "../images/logo.png"
import image from "../images/iphone.png"
import defaultImage from "../images/Signal.png"
import logoone from "../images/IphoneLOGO.png"
import logotwo from "../images/notebook.png"

// import lock from "./lock.vue"
export default {
    name: 'Steps',

    components: {
        // lock,
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
            directions: ['t', 'b', 'l', 'r', 'x', 'y', 'a'],
            sizes: ['auto', '0', '1', '2', '3', '4', '5'],
            paddingDirection: 'a',
            paddingSize: '2',
            marginDirection: 'a',
            marginSize: '2'


        }
    },
    computed: {
        computedPadding() {
            return `p${this.paddingDirection}-${this.paddingSize}`
        },
        computedMargin() {
            return `m${this.marginDirection}-${this.marginSize}`
        }
    }


}
</script>

<style>

.home {
    margin: 5%;
    font-size: 16px;
}
.spacing-playground .v-select .v-input__prepend-outer,
.spacing-playground .v-select .v-input__append-outer {
    margin-top: 0.55rem;
    margin-right: 0.2rem;
}

.luv {
    width: 240px;
    margin: auto;
}

.iphone {
    width: 310px;
}

.start {
    font-size: 27px;
}

.app {
    width: auto;
    height: auto;
}

.steps {
    margin: auto;
}

.top {
    height: 30px;
}

.v-application a {
    color: white !important;
    text-decoration: none;
}

.head {
    padding-left: 40px;
    padding-top: 20px;
    font-size: 26px;
    font-weight: 600;
    color: white;
}

.imgtop {
    width: 40px;
}

.intro {
    color: black;
}

.day {
    width: 100%;
    height: 100%;
}

h1 {
    color: white;
}
h2 {
    color: white;
}

h5 {
    color: white;
    font-size: 36px;
     text-shadow: 2px 2px #000000;
}

p {
    color: white;
}

.vector {
    width: 245px;
}

.img {
    width: 190px;
}

.real {
    background: none;
}

.steps {
    color: black;
}

.locks {
    font-weight: 600;
    font-size: 21px;
    opacity: 90%;
    padding-bottom: 4%;
}

.real {
    background-color: none;
}

.threeSteps {
    font-size: 27px;
    font-weight: 700;
}

.myheader {
    background-image: url('../images/day4.png') ;
   
    width: 100%;
    opacity: 88%;
    
}
.landingpage {
    padding: 3px;
}

.body {
    padding-left: 8%;
    padding-right: 8%;
}
</style>







