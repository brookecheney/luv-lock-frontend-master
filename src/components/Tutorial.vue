<!-- OR ON PAGE LOAD THIS BELOW DEPENDING ON WEB ADDRESS -->
<template>
    <v-container class="body" justify="center">
        <v-container class="spacing-playground px-16 mx-auto real" fluid justify="center">
            <v-row class="steps" justify="center">
                <v-col lg="12" md="12">
                    <v-card class="mx-auto" max-width="800" outlined v-for="(cardData, index) in info" :key="index">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <v-row>
                                    <v-list-item-title class="headline mb-3">
                                        <img :src="cardData.lock_image_url" alt="" style="width: 80px; height: 80px"> {{ cardData.user_id }}
                                    </v-list-item-title>
                                </v-row>
                                <div class="overline mb-4">
                                    {{cardData.date_locked}}
                                </div> <br>
                                <br>
                                <v-list-item-subtitle>
                                    {{ cardData.message }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                        <!-- <v-card-actions>
                                <div text>Distance: {{ }}</div><br>
                                <div text>Pace: {{ }}</div>
                            </v-card-actions> -->
                        <v-row>
                            <v-col cols="12" sm="6" lg="6" md="6">
                                <img :src="cardData.lock_image_url" alt="" style="width: 300px; height: 400px">
                            </v-col>
                            <v-col cols="12" sm="6" lg="6" md="6">
                                <iframe width="300" height="400" frameborder="0" style="border:0" :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyBwsk-82icJPc2VCgKh9phGhAMaBW5soB8
                                            &q=${cardData.latitude},${cardData.longitude}`" allowfullscreen>
                                    </iframe>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <br>
                <br>
                <br>
                <br>
                <v-row justify="center">
                    <p class="intro" justify="center">
                      To get started download the free Luv Lock app from Google or Apple.
                    </p>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" sm="3" lg="3" md="3">
                        <a href="https://www.apple.com/ios/app-store/">
                            <v-img src="@/images/googleplay.png" class="button"></v-img>
                        </a>
                    </v-col>
                    <v-col cols="12" sm="3" lg="3" md="3">
                        <a href="https://play.google.com/store?&utm_source=na_Med&utm_medium=hasem&utm_content=Jul0119
                            &utm_campaign=Evergreen&pcampaignid=MKT-DR-na-us-1000189-Med-hasem-py-Evergreen-Jul0119-Text_Search_BKWS-id_100740_%7cEXA%7cONSEM_kwid_43700045371544913
                            &gclid=EAIaIQobChMI18WIsqHc6gIVDdbACh1K3w3EEAAYASAAEgIOo_D_BwE&gclsrc=aw.ds">
                            <v-img src="@/images/applestore.png" class="button"></v-img>
                        </a>
                    </v-col>
                </v-row>
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
</template>

<script>
import logo from "../images/logo.png"
import image from "../images/iphone.png"
import defaultImage from "../images/Signal.png"
import logoone from "../images/IphoneLOGO.png"
import logotwo from "../images/notebook.png"
// import axios from 'axios'

// import lock from "./lock.vue"
export default {

    el: '#app',
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
            info: [{
                id: 9,
                user_id: 1,
                latitude: 40.47,
                longitude: -111.92,
                date_locked: "2020-02-25",
                names: "",
                lock_icon: "lock_pin",
                lock_image_url: "https://lovelockappcc.s3.amazonaws.com/lock_images/lock_image_9_1582655393.png",
                message: "Message here",
                status: 1,
                created_at: "2020-02-25 18:29:53",
                updated_at: "2020-02-25 18:29:53"
            }, ]
        }


    },
    filters: {
        currencydecimal(value) {
            return value.toFixed(2)
        }
    },
}
</script>

<style>
.avatar {
    padding: 3px;
}

.button {
    width: 230px;
}

.body {}

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

.img {}

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







