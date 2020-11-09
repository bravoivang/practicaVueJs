Vue.component('saludo2', {
    /**
     * un componente siempre tiene un template porque vos queres que estructure algo
     * puede consumir del store directamente
    */
    template : /*html*/`
        <div>
            <h1>{{saludo}} | Dato consumido del store:</h1>
            <h5>Directo: {{$store.state.datoEnStore}}</h5>
            <h5>Encapsulado por computed: {{getDatoEnStore}}</h5>
            <h5>Mapeado: {{datoEnStore}}</h5>
        </div>
    `
    ,
    data(){
       return {
           saludo: "holitas!"
       } 
    },
    computed: {
        getDatoEnStore(){
            /**
             * NOTA: solo se usa el $store cuando se toma desde el html (debe tener que ver con que 
             * se lee en elDOM desde las propiesdad disponibles). 
             * De alguna manera vue se encarga de hacer
             * store = $store en .js
             */
            
            return store.state.datoEnStore
        },
        /**
         * vamos mapear todo el state: mapState nos va a devolver las propiedad 
         * que estamos pidiendo mapeadas por nombre. Asi que datoEnStore esta disponible para consumir
         */
        ...Vuex.mapState(['datoEnStore'])
    },

});