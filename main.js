const app = new Vue({
    el: '#app',
    data:{
        usuarios:[],
        nombres: "",
        apellidos:"", 
        usuario:"",
        usuario:"",
        fechaNac:"",
        edad: 0,
        
    },
    methods:{ 
 
        agregarUsuario(){
            const hoy = new Date();
            this.edad = parseInt(hoy.getFullYear()) - parseInt(this.fechaNac.substring(0,4));
            const  month = parseInt(hoy.getMonth()) - parseInt(this.fechaNac.substring(5,7)) 
            const  day = parseInt(this.fechaNac.substring(8,10))
            const random = Math.floor(Math.random() * 9999);
            if (month < 0  && hoy.getDate() < day ) {
                this.edad--;
            }

            //console.log(this.edad)
            this.usuarios.push({
                'nombres': this.nombres,
                'apellidos': this.apellidos,
                'nombreCompleto': this.nombres +" "+ this.apellidos,
                'usuario': this.usuario,
                'edad': this.edad,
                'clave': this.nombres.substring(0, 3) + this.apellidos.substring(0,3) + random
                
            })
 
        },
        
    },
 
     
    
})