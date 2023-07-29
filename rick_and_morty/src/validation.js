const validation = (data) => {

    let errors = {};

    if(!data.email.includes("@")){
        errors.e1 = "Email is not valid"
    }
    
    if(!data.email){
        errors.e2 = "Ingrese un email"
    }
     if(data.email.length >= 35){
        errors.e3 = "El email no puede tener mas de 35 caracteres";
    }
    
    if(!/\d/.test(data.password)){
        errors.p1 = "La contraseña debe tener algun caracter numerico";
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = "La contraseña debe ser entre 6 y 10 caracteres";
    }
   
    return errors;
}
export default validation;