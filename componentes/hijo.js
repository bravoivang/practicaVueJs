Vue.component('hijo',{
    template: /*html */`
    <div class="py-5 text-white">
        <h4>Componente hijito: {{datoPadre}}</h4>
        <h3>Data viajera: {{datoHijo}}</h3>
        <button @click="datoPadre++" class="btn btn-warning">+</button>
    </div>
    `
    ,
    props: ['datoPadre'],
    data(){
        return {
            datoHijo : "Ivan"
        }
    },
    mounted(){
        this.$emit('transladarHijo', this.datoHijo);
    }
/**
 * el "datoPadre++" que esta modificando la prop solo lo hace de manera local
 * no afecta al dato en el padre. Es oneWayBinding => Vue arroja un error en consola al realizar ese cambio
 */
});