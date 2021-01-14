<template>
    <v-container class="spacing-playground px-9 mx-auto"  justify="center">
        <v-container class="bodytwo">
            <v-row class="condition" justify="center">
    
                <h1 class="text">Privacy Policy</h1>
            </v-row>

          <v-row class="condition" justify="center">
                <p class="text">
                  We value your privacy.  Information you provide when creating a lock is never shared with with 3rd parties.
                </p>
          </v-row>

          <v-row class="condition" justify="center">
                <h1 class="text">Information We Collect</h1>
          </v-row>

          <v-row class="condition" justify="center">
                <p class="text">
                  The picture and information you provide when creating your Luv Lock will be available publicly.  You are not required to share any personal identifying during the creation of your lock.  No other data is collected about you beyond the information you share with creating the lock.
                </p>
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

// import Phone from "./Phone.vue"



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

    },





}
</script>


<style>


h1 {
    color: black;
  display: inline;
  align-content: center;
  padding: 20px;
  text-shadow: none;
}

p {
  display: inline;
}



.text {
    color: black;
  display: inline;
  padding: 30px;
  text-shadow: none;
}

.bodytwo {
    padding: 20px;
}
</style>
