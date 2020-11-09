/**
 * no aceptaCamelCase ya que no hay  camel case en html!
 */
Vue.component('botonmutador',{
    /**
     * palabra recervada = commit
     * toma como dato el nombre de la mutación
     */
    template:/*html*/`
    <div>
        <h4>Mutando el state:</h4>
        <span>Directo <button @click="$store.commit('aumentarDato')">Mutar</button></span>
        <span>mapMutaions <button @click="aumentarDato()">Mutar</button></span>
        
        <h4>Mutando el state con params:</h4>
        <span>mapMutaions <button @click="disminuirDato()">Mutar</button></span>
        <span>mapMutaions + param<button @click='disminuirDato("13")'>Mutar</button></span>
    </div>
    `
    ,//notar que si quiero pasar strings por params tengo que poner las comillas dobles, sino es number
    methods: {
        //cuando mapeamos solamente agregamos los nombres a mapear.
        ...Vuex.mapMutations(['aumentarDato','disminuirDato'])
    }
});