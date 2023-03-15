import  crypto  from   'crypto' ;

function generarHashContraseña(contraseña) {
    const hash = crypto.createHash('sha256').update(contraseña).digest('hex');
    return hash;
}

function validarContraseña(contraseña, hash) {
    const hashContraseña = generarHashContraseña(contraseña);
    return hashContraseña === hash;
}

export { generarHashContraseña };