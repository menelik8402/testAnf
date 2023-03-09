
const { createApp } = Vue

createApp({
  el : '#app',
  data() {
    return {  
        name : '',
        surname : '',
        age  : 0,
        sex : '',
        email : '',
      userList : [],      
    }
  },
  methods : {
      addUser (){
          this.userList.push({name:this.name,surname:this.surname,
                            age:this.age,sex:this.sex,email:this.email})
      }
  }
}).mount('#app')
