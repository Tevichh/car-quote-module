export const login = () => {
    const queryParams = new URLSearchParams(window.location.search);
    let cc = queryParams.get("cc");

    // Si no se proporciona 'cc', solicita al usuario que lo ingrese
    while (!cc) {
        cc = prompt("Parámetros insuficientes... Ingresar placa:");
    }

    return cc;
};
