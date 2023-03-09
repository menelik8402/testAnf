
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
      totAge : 0 ,
      contPerMale : 0, 
      contPerFamele : 0,
      younguestPerson : 0,
      olderPerson : 0,
      inputName : '',
      nationality : ''
    }
  },
  methods : {
      addUser (){
          this.userList.push({name:this.name,surname:this.surname,
                            age:this.age,sex:this.sex,email:this.email});
        this.name = '';
        this.surname = '';
        this.age  = 0;
        this.sex = '';
        this.email = '';
        this.avgAge();
        this.getYooungAndOlderPerson();
      },
      avgAge(){
        let suma = 0;
        this.contPerMale =0;
        this.contPerFamele =0;
        for(var x = 0; x <  this.userList.length; x++){
            suma = parseInt(suma) + parseInt(this.userList[x].age);

             if(this.userList[x].sex == "Male"){
                this.contPerMale++;
             }
             else{
                this.contPerFamele++;   
             }

          }
          this.totAge = suma 
      }, 
      getYooungAndOlderPerson(){
            const sortResult = this.userList.sort((a,b) =>{
            return Number.parseInt(b.age) - Number.parseInt(a.age)
          });
          this.younguestPerson = sortResult[this.userList.length-1].name;
          this.olderPerson = sortResult[0].name;

      },
      async userNationatity(){
        const url = "https://api.nationalize.io/?name=" + this.inputName;
        const r = await fetch(url);
        const jsonresult = await r.json();

       // this.nationality = country;
       const sortResult = jsonresult.country.sort((a,b) =>{
        return Number.parseInt(b.probability) - Number.parseInt(a.probability)
      });
      
      this.nationality = sortResult[0].country_id;


      }   
      
  }
}).mount('#app')
