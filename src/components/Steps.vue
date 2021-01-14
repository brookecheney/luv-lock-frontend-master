<template>
    <v-app class="rows">
    
        <v-container class="spacing-playground px-16 mx-auto" fluid>
            <v-row justify="left">
                <h2 class="threeSteps">3 Steps to begin your adventure</h2>
            </v-row>
            <br>
            <v-row class="steps">
                <v-col :key="n" cols="12" lg="4" md="4" sm="12">
                    <v-card class="pa-2" flat>
                        <img :src="defaultImage" class="img">
                        <h3 class="locks">1. Create an account</h3>
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
                <v-card class="mx-auto" max-width="400">
                    <v-card-title>What's New?</v-card-title>
                    <v-img class="white--text align-end" height="200px" src="/images/lock2.png"></v-img>
                    <v-card-text class="text--primary">
                        <div>New CO Dashboard</div>
                        <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>
                </v-card>
                <v-card class="mx-auto" max-width="400">
                    <v-card-title>Learn about Luv Locking</v-card-title>
                    <v-img class="white--text align-end" height="200px" src="/images/lock.png"></v-img>
                    <v-card-text class="text--primary">
                        <div>Whitehaven Beach</div>
                        <div>Whitsunday Island, Whitsunday Islands</div>
                    </v-card-text>
                </v-card>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import logo from "../images/logo.png"
import image from "../images/iphone.png"
import defaultImage from "../images/Signal.png"
import logoone from "../images/IphoneLOGO.png"
import logotwo from "../images/notebook.png"
export default {
    name: 'Steps',




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
h3 {
    font-weight: 400;
    font-size: 12px;
    opacity: 70%;
    padding-bottom: 4%;
}

.locks {
    font-weight: 400;
    font-size: 17px;
    opacity: 70%;
    padding-bottom: 4%;
}

.real {
    background-color: none;
}

.rows {
    margin-left: 7%;
    margin-right: 7%;
}

.app {
    width: 300px;
    height: 100px;
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

.container {
    margin: 200px;
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
    width: 300px;
}

.img {
    max-width: 300px;
}

.real {
    background: none;
}

.steps {
    color: black;
}
</style>
