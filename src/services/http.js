export const getInfoTable = async (id) => {
    try {
        const response = await fetch("https://itpa-sigtac.com/webgo/controlador/consultarCotizacion.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `ID=${id}`,
        });

        if (!response.ok) {
            throw new Error("Error en la solicitud: " + response.statusText);
        }

        const valores = await response.json();

        if (!valores[6]) {
            alert("Parámetros invalidos...");
            window.location.href = window.location.origin + window.location.pathname;
        }

        const infoDataModel = {
            SEDAN: valores[0],
            HATCHBACK: valores[1],
            PICKUP: valores[2],
            CAMIONETA: valores[3],
            COUPE: valores[4],
            CONVERTIBLE: valores[5],
        };

        const infoUser = valores[6];

        return [infoDataModel, infoUser];
    } catch (error) {
        console.error("Error fetching info table:", error);
        return [{}, null];
    }
};