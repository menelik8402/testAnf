
  const { createApp } = Vue

  createApp({
    el : '#app',
    data() {
      return {
        message: 'Hello Vue!',
        frutas : [
            {nombre:'Pera',status:true,cantidad:10},
            {nombre:'mango',status:false,cantidad:8},
            {nombre:'naranja',status:true,cantidad:9}
        ],
        nuevafruta: ''
      }
    },
    methods : {
        agregarFruta (){
            this.frutas.push({nombre:this.nuevafruta,status:false,cantidad:0})
        }
    }
  }).mount('#app')
