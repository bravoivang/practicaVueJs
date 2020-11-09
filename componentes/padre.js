Vue.component('padre',{
    template: /*html*/`
    <div class="p-5 bg-dark text-white">
        <h2>En el padre: {{numeroPadre}}
            <button @click="numeroPadre++" class="btn btn-primary">+</button>
            <hijo datoPadre="numeroPadre"></hijo>
            <hijo :datoPadre="numeroPadre"></hijo>
            </h2>
        <h2>Lo que viene del hijo    
            {{valorFromHijo}}
            <hijo :datoPadre="numeroPadre" @transladarHijo="valorFromHijo = $event"></hijo>
        </h2>        
    </div>
    `
    ,
    data(){
        return {
            numeroPadre: 0, //notar que el :numero esta haciendo un bind de vue
            valorFromHijo: '' //alojamos el valor que viene del hijo en nuestra data
            //¿Se podran tener datos onthefly?
            /*Este método tiene el problema uqe sufre React tambien, ¿Y si tengo muchos niveles de anidacion
            * como hago todo el pasa manos? un quilombex y muy especifico. La solucion es un redux de vue => Vuex
            */
        }
    }
})