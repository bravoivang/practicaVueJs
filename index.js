// agregando un store a lo redux con VUEX
const store = new Vuex.Store({
    state: {
        datoEnStore : 100
    },
    mutations: {
        aumentarDato(state){
            state.datoEnStore++;
        },
        disminuirDato(state,cantidad = 0){
            console.log(cantidad);
            state.datoEnStore -= cantidad;
        }
    }
});


// inspirado en el patron MVVM Modelo- vista- vistaModelo: la vista esta separada del modelo de negocios.
// Cada componente de vue es una nueva instancia, el unico que difiere es el rootInstance

Vue.component('saludo', {
    /**
     * un componente siempre tiene un template porque vos queres que estructure algo
    */
    template : /*html*/`<h1>{{saludo}}</h1>`,
    data(){
       return {
           saludo: "holitas!"
       } 
    }
});



const app = new Vue({
    el: '#app',
    /**
     * linkear store
     */
    store : store,
    /**
     * data no puede tener data con logica
     * no pueden llamar a funciones aca
     * Vue’s reactivity system => cuando una prop cambia raecciona el modelo (2 way binding)
     * Solo la data declarada es ractiva, si se agrega al modelo mas props no serán reactivas
     */
    data: {  //este data no es una funcion, ya que se llama 1 sola vez en la app(es el root) Para componentes DEBE ser una funcion
        titulo: "Holitas", //interpolacion para llevarlo al html
        coleccion: [1,2,3,4,5,6,7,8], //interpolación de coleciones
        cssFondo: "bg-warning" , //css
        cssEnable: false, //el html admite expresiones
        counter: 600,
        porcentaje: 0,
    },
    /**
     * metodos con el prefijo $ son los ya previamente declarados por VUE
     */
    /**
     * funciones que contiene la logica de los eventos
     */
    methods:{
        changeAndCount(){
            this.cssEnable = !this.cssEnable;
            this.porcentaje++;
        }
    },
    /**
     * van a quedar cacheadas en el navegador
     * son funciones que devuelven valores
     */
    computed : {
        colorPorcentaje(){
            return {
                'bg-danger' : this.porcentaje == 0,
                'bg-info' : this.porcentaje > 0 && this.porcentaje < 10,
                'bg-warning': this.porcentaje > 10
            };
        },
        /**
         * DONT USE arrow functions to props. Causa error de contexto ya que va a tomar el this del padre y 
         * puede no ser el this (instancia de vue) que se necesita en ese scope
         */
        funcionASDF : ()=> ("asdf")
    },
/**
 * Ciclo de vida de VUE
 * new VUE()
 * beforeCreate
 */
    beforeCreate() {

    },
    created(){

    },
    beforeMount(){

    },
    mounted(){

    },
    beforeUpdate(){

    },
    updated(){

    },
    beforeDestroy(){

    },
    destroyed(){

    },


});


