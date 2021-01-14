
mounted() {
    let $this = this
    for(let i = 1; i < 19 ; i ++){
        console.log(i)
        let url = 'https://api.luvsapps.com/api/locks/' + i
        axios
        .get(url)
        .then(response => {
            $this.info.push(response.data);
            console.log(response.data)
        })
        .catch(error => console.log(error))
    }
    for(let item in $this.info){
        console.log(item)
    }
},






<iframe
                            width="600"
                            height="450"
                            frameborder="0" style="border:0"
                            src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                                &q=Space+Needle,Seattle+WA" allowfullscreen>
                            </iframe>