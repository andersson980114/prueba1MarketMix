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
        clave:""
        
    },
    methods:{
        calcularEdad(){ 
           
            const hoy = new Date();
            this.edad = parseInt(hoy.getFullYear()) - parseInt(this.fechaNac.substring(0,4));
            const  month = parseInt(hoy.getMonth()) - parseInt(this.fechaNac.substring(5,7)) 
            const  day = parseInt(this.fechaNac.substring(8,10))
           
            if (month < 0  && hoy.getDate() < day ) {
                this.edad--;
                
            }
            
        },

        generarClave(){

        },

        agregarUsuario(){
            usuarios.push({
                'nombres': this.nombres,
                'apellidos': this.apellidos,
                'nombreCompleto': this.nombres +" "+ this.apellidos,
                'edad': this.edad,
                'clave': this.clave
            })

        },
        
    },
     
    
})