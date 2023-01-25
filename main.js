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
        //cambiar booleano para poder visualizar la clave del usuario
        verClave(index){
            this.usuarios[index].ver= !this.usuarios[index].ver
        },

        //
        agregarUsuario(){

            //calculamos la edad del usuario
            const hoy = new Date();
            this.edad = parseInt(hoy.getFullYear()) - parseInt(this.fechaNac.substring(0,4));
            const  month = parseInt(hoy.getMonth()) - parseInt(this.fechaNac.substring(5,7)) 
            const  day = parseInt(this.fechaNac.substring(8,10))

            if (month < 0  && hoy.getDate() < day ) {
                this.edad--;
            }
            //generamos el numero random para la clave del usuario
            const random = Math.floor(Math.random() * 9999);
            if(random <1000){
                random+=1000
            }

           //verificamos que los campos estén llenos
            if(this.nommres!=="" && this.apellidos!=="" && this.usuario!=="" && this.fechaNac!==""){
                //variable de control
                let duplicado = 0;
                //creamos un objeto usuario con los datos ingresados
                let nuevoUsuario={
                    'nombres': this.nombres,
                    'apellidos': this.apellidos,
                    'nombreCompleto': this.nombres +" "+ this.apellidos,
                    'usuario': this.usuario,
                    'edad': this.edad,
                    'clave': this.nombres.substring(0, 2) + this.apellidos.substring(0,2) + random,
                    'ver': false
                    }   
                //boscamos si existe el mismo usuario en el array
                this.usuarios.map((user) =>{
                    if(user.usuario === this.usuario){
                        duplicado++
                    }
                })
                //si no tenemos el usuario duplicado lo almacenamos
                if (duplicado == 0) {
                    this.usuarios.push(nuevoUsuario)
                    console.log("nombres: ",this.nombres
                                ,"\napellidos: ",this.apellidos
                                ,"\nnombreCompleto: "+nuevoUsuario.nombreCompleto
                                ,"\nusuario: ",this.usuario
                                ,"\nedad: ",this.edad
                                ,"\nclave: "+nuevoUsuario.clave
                    )
                    //reseteamos los campos
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