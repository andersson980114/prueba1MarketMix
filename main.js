const app = new Vue({
    el: '#app',
    data:{
        usuarios:[],
        nombres: "",
        apellidos:"", 
        usuario:"", 
        fechaNac:"",
        edad: 0,
        
        
    },
    methods:{ 
        verClave(index){
            this.usuarios[index].ver= !this.usuarios[index].ver
        },
        agregarUsuario(){
            const hoy = new Date();
            this.edad = parseInt(hoy.getFullYear()) - parseInt(this.fechaNac.substring(0,4));
            const  month = parseInt(hoy.getMonth()) - parseInt(this.fechaNac.substring(5,7)) 
            const  day = parseInt(this.fechaNac.substring(8,10))
            const random = Math.floor(Math.random() * 9999);
            if(random <1000){
                random+=1000
            }

            if (month < 0  && hoy.getDate() < day ) {
                this.edad--;
            }

           

            if(this.nommres!=="" && this.apellidos!=="" && this.usuario!=="" && this.fechaNac!==""){
                let duplicado = 0;
                let nuevoUsuario={
                    'nombres': this.nombres,
                    'apellidos': this.apellidos,
                    'nombreCompleto': this.nombres +" "+ this.apellidos,
                    'usuario': this.usuario,
                    'edad': this.edad,
                    'clave': this.nombres.substring(0, 2) + this.apellidos.substring(0,2) + random,
                    'ver': false
                    }   
                
                this.usuarios.map((user) =>{
                    if(user.usuario === this.usuario){
                        duplicado++
                    }
                })
                if (duplicado == 0) {
                    this.usuarios.push(nuevoUsuario)
                    console.log("nombres: ",this.nombres
                                ,"\napellidos: ",this.apellidos
                                ,"\nnombreCompleto: "+nuevoUsuario.nombreCompleto
                                ,"\nusuario: ",this.usuario
                                ,"\nedad: ",this.edad
                                ,"\nclave: "+nuevoUsuario.clave
                    )
                    
                    this.nombres=""
                    this.apellidos=""
                    this.usuario=""
                    this.fechaNac=""
                } else {
                    alert('El usuario ya existe');
                    
                }

                
            }else{
                alert("llena todos los campos")
            }
            
        },
        
    },
 
     
    
})