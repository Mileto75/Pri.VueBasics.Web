
let app = new Vue({
    el: "#app",//bind the vue instance to an html element
    data: {
        pageTitle: "Our first vue app!",
        hoverTitle: `Today is ${new Date().toLocaleDateString()}`,
        url: "https://www.gazzetta.it",
        showAlertDanger: true,
        counter: 0,
        showAddPersonForm: false,
        person: {name:"",city:""},
        people: [
            {name: "Bart",city: "Beernem"},
            {name: "Mileto",city: "Gent"},
            {name: "Joachim",city: "Brugge"},
        ],
        message: "",
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
    },
});