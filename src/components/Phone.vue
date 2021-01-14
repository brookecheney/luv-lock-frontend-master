<template>
    <v-container class="body">
        <v-container class="spacing-playground px-16 mx-auto real" fluid>
            <v-row class="steps">
    
                <v-col :key="n" cols="12" lg="9" md="9" sm="12">
    
    
    
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
    
    
    
    
                    <v-col cols="12" lg="9" md="9" sm="12">
    
                        <h2 class="headline font-weight-bold mb-3">
    
                            There are 4,432 geocaches around Utah.
                        </h2>
                        <p class="intro">
                            To get started, create a free ceocaching account and download the official Luv Lock app or use a GPS device.</p>
                    </v-col>
    
    
    
                    <v-row>
    
                        <v-col cols="12" sm="4" lg="4" md="4">
                            <a href="https://www.apple.com/ios/app-store/">
                                <v-img src="/images/googleplay.png">
                                </v-img>
                            </a>
    
    
                        </v-col>
                        <v-col cols="12" sm="4" lg="4" md="4">
                            <a href="https://play.google.com/store?&utm_source=na_Med&utm_medium=hasem&utm_content=Jul0119&utm_campaign=Evergreen&pcampaignid=MKT-DR-na-us-1000189-Med-hasem-py-Evergreen-Jul0119-Text_Search_BKWS-id_100740_%7cEXA%7cONSEM_kwid_43700045371544913&gclid=EAIaIQobChMI18WIsqHc6gIVDdbACh1K3w3EEAAYASAAEgIOo_D_BwE&gclsrc=aw.ds">
                                <v-img src="/images/applestore.png">
                                </v-img>
                            </a>
    
                        </v-col>
    
    
    
                    </v-row>
    
    
                </v-col>
                <v-col lg="3" md="3">
    
                    <img :src="image" class="vector" />
                    <!-- <lock /> -->
    
                </v-col>
    
    
    
            </v-row>
            <br>
            <br>
    
            <v-row justify="left">
    
    
                <h2 class="threeSteps">3 Steps to begin your adventure</h2>
    
    
            </v-row>
            <br>
            <v-row class="steps">
                <v-col :key="n" cols="12" lg="4" md="4" sm="12">
                    <v-card class="pa-2" flat>
                        <img :src="defaultImage" class="img">
    
                        <h2 class="locks">1. Create an account</h2>
    
                        <p class="steps">Create an account online or through the Luv Lock app to view a map of luv Locks near you.</p>
    
                    </v-card>
                </v-col>
                <v-col :key="n" cols="12" lg="4" md="4" sm="12">
                    <v-card class="pa-2" flat>
                        <img :src="logoone" class="img">
                        <h2 class="locks">2. Find a Luv Lock</h2>
                        <p class="steps">Use the app to navigate to a geocache nearby. Don’t forget to bring a pen!</p>
                    </v-card>
                </v-col>
                <v-col :key="n" cols="12" lg="4" md="4" sm="12">
                    <v-card class="pa-2" flat>
                        <img :src="logotwo" class="img">
                        <h2 class="locks">3. Share your experience</h2>
                        <p class="steps">Once you find the Love Lock, sign and date the logbook. Place the Love Lock back where you found it and log your experience online.</p>
                    </v-card>
                </v-col>
            </v-row>
            <br>
            <br>
            <br>
            <br>
    
            <v-row>
                <v-col :key="n" cols="12" lg="6" md="6" sm="12">
                    <v-card class="mx-auto" max-width="490">
                        <v-card-title>What's New?</v-card-title>
                        <v-img class="white--text align-end" height="200px" src="/images/lock2.png">
    
                        </v-img>
    
    
                        <v-card-text class="text--primary">
                            <div>New CO Dashboard</div>
    
                            <div>Whitsunday Island, Whitsunday Islands</div>
                        </v-card-text>
    
                        <!-- <v-card-actions>
                                        <v-btn color="orange" text>
                                            Share
                                        </v-btn>
    
                                        <v-btn color="orange" text>
                                            Explore
                                        </v-btn>
                                    </v-card-actions> -->
                    </v-card>
    
                </v-col>
                <v-col :key="n" cols="12" lg="6" md="6" sm="12">
                    <v-card class="mx-auto" max-width="490">
                        <v-card-title>Learn about Luv Locking</v-card-title>
                        <v-img class="white--text align-end" height="200px" src="/images/lock.png">
    
                        </v-img>
    
    
                        <v-card-text class="text--primary">
                            <div>Whitehaven Beach</div>
    
                            <div>Whitsunday Island, Whitsunday Islands</div>
                        </v-card-text>
                        <!--
                                    <v-card-actions>
                                        <v-btn color="orange" text>
                                            Share
                                        </v-btn>
    
                                        <v-btn color="orange" text>
                                            Explore
                                        </v-btn>
                                    </v-card-actions> -->
                    </v-card>
                </v-col>
            </v-row>
    
    
    
    
    
    
    
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
    name: 'Phone',

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


        }
    }


}
</script>

<style scoped>
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
    color: black;
}

p {
    color: white;
}

.vector {
    width: 245px;
}

.img {
    width: 140px;
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
</style>







