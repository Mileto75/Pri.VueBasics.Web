
let app = new Vue({
    el: "#app",//bind the vue instance to an html element
    data: {
        pageTitle: "Our first vue app!",
        hoverTitle: `Today is ${new Date().toLocaleDateString()}`,
        url: "https://www.gazzetta.it",
        showAlertDanger: true,
        counter: 0,
        quoteVisible: false,
        showAddPersonForm: false,
        person: {name:"",city:""},
        people: [
            {name: "Bart",city: "Beernem"},
            {name: "Mileto",city: "Gent"},
            {name: "Joachim",city: "Brugge"},
        ],
        message: "",
        quote: "",
        quoteError: false,
        quoteErrorMessage: "",
        quoteUrl: "https://api.chucknorri.io/jokes/random"
    },
    created: async function() {
        //await this.getQuote();
    },
    methods: {
        increment: function() {
            this.counter++;
        },
        toggleAlert: function() {
            this.showAlertDanger = !this.showAlertDanger;
        },
        showPersonForm: function(){
            this.showAddPersonForm = !this.showAddPersonForm;
        },
        addPersonToPeople: function() {
            this.people.push({name:this.person.name,city: this.person.city});
            this.person.name = "";
            this.person.city = "";
        },
        getQuote: async function() {
           //fetch a quote from chucknorris api
           this.quoteError = false;
           this.quote = await axios.get(this.quoteUrl)
                    .then(response => response.data.value)
                    .catch(error => {
                        this.quoteError = true;
                        this.quoteErrorMessage = error
                        console.log(error);
                    });
        //    this.quote =  await fetch(this.quoteUrl)
        //                     .then(response => response.json())
        //                     .then(data => data.value)
        //                     .catch(error => 
        //                         {
        //                             this.quoteError = true;
        //                             this.quoteErrorMessage = error;
        //                         })
        }
    },
});