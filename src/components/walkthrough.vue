<template>
    <v-container class="body" justify="center">
        <v-container class="spacing-playground px-16 mx-auto real" fluid justify="center">
            <div class="mb-6 titlepage">
    
                <v-img v-responsive.lg.xl.md src="@/images/howto.png" width="430" class="buttonone"></v-img>
            </div>
            <div v-responsive.sm.xs class="titlepage2">
                <v-img v-responsive.sm.xs src="@/images/howto.png" width="570px" class="buttonone"></v-img>
            </div>
            <div>
                <v-row>
    
                    <v-card class="d-flex flex-row mb-6 card" flat tile width="400" height="600">
                        <v-card :elevation="0" v-for="n in 1" :key="n" class="pa-2" tile>
                            <h2 justify>Step One</h2>
                            <p class="graph">
                                Pull the app up and click on the lock icon on the bottom of the screen.
                            </p>
                            <v-img src="@/images/iphoneScreen03.png" max-width="800" class="button"></v-img>
    
                        </v-card>
    
                    </v-card>
    
                    <v-card class="d-flex flex-row-reverse card" flat tile width="400" height="600">
                        <v-card :elevation="0" v-for="n in 1" :key="n" class="pa-2" tile>
                            <h2 justify="center">Step Two</h2>
                            <p class="graphthree">
                                After selecting an image you can add locks and stickers by clicking the buttons at the bottom of the screen. </p>
    
                            <v-img src="@/images/iphoneScreen04.png" max-width="800" class="button"></v-img>
    
                        </v-card>
                    </v-card>
                </v-row>
            </div>
            <br>
            <div>
                <v-row>
                    <v-card class="d-flex flex-row card" flat width="400" height="600">
                        <v-card :elevation="0" v-for="n in 1" :key="n" class="pa-2">
                            <h2 justify>Step Three</h2>
                            <p class="graph">
                                You can set an address by dragging the map around, or entering a specific location
                            </p>
                            <v-img src="@/images/iphoneScreen05.png" max-width="800" class="button"></v-img>
    
                        </v-card>
    
                    </v-card>
                    <v-card class="d-flex flex-row-reverse card" flat :elevation="0" width="400" height="600">
                        <v-card :elevation="0" v-for="n in 1" :key="n" class="pa-2">
                            <h2 justify="center">Step Four</h2>
                            <p class="graph">
                                After entering any extra data you want on your lock, you lock is ready to go.
                            </p>
    
                            <v-img src="@/images/iphoneScreen02.png" max-width="800" class="button"></v-img>
    
                        </v-card>
                    </v-card>
                </v-row>
            </div>
    
        </v-container>
    </v-container>
</template>

<script>

</script>

<style scoped>
.titlepage {
    margin: auto;
    padding: 10%;
}

.titlepage2 {
    padding-bottom: 20%;
}

.luv {
    margin: auto;
    width: 350px;
}

h1 {
    color: black;
    text-shadow: none;
    font-size: 33px;
    padding: 3%;
    margin: auto;
}

h2 {
    font-size: px;
    color: black;
    font-weight: 500;
}

h3 {
    padding: 4px;
    color: #c50909;
    font-size: 20px;
    margin: auto;
}

.right {
    float: right;
    color: black;
}

.card {
    elevation: none;
    padding: 5px;
    outline: none;
}

.graph {
    padding: 7.2%;
    color: black;
    font-weight: 300;
}

.graphthree {
    padding: 4%;
    color: black;
    font-weight: 300;
}

.button {
    width: 200px;
    margin: auto;
}

.buttonone {
    margin: auto;
}
</style>