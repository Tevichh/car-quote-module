import { userModelOrder } from "../App";

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
export const send = async () => {

    const dataOrder = userModelOrder;

    let data = 'ID=' + userModelOrder.id + '&ESTADO=1&MODELO=' + dataOrder.name
        + '&BUMPERB_P1=' + JSON.stringify(dataOrder.BUMPERB.P1)
        + '&BUMPERB_P2=' + JSON.stringify(dataOrder.BUMPERB.P2)
        + '&BUMPERB_P3=' + JSON.stringify(dataOrder.BUMPERB.P3)
        + '&BUMPERB_P4=' + JSON.stringify(dataOrder.BUMPERB.P4)
        + '&BUMPERB_P5=' + JSON.stringify(dataOrder.BUMPERB.P5)
        + '&BUMPERF_P1=' + JSON.stringify(dataOrder.BUMPERF.P1)
        + '&BUMPERF_P2=' + JSON.stringify(dataOrder.BUMPERF.P2)
        + '&BUMPERF_P3=' + JSON.stringify(dataOrder.BUMPERF.P3)
        + '&BUMPERF_P4=' + JSON.stringify(dataOrder.BUMPERF.P4)
        + '&BUMPERF_P5=' + JSON.stringify(dataOrder.BUMPERF.P5)
        + '&FENDERLB_P1=' + JSON.stringify(dataOrder.FENDERLB.P1)
        + '&FENDERLB_P2=' + JSON.stringify(dataOrder.FENDERLB.P2)
        + '&FENDERLB_P3=' + JSON.stringify(dataOrder.FENDERLB.P3)
        + '&FENDERLB_P4=' + JSON.stringify(dataOrder.FENDERLB.P4)
        + '&FENDERLB_P5=' + JSON.stringify(dataOrder.FENDERLB.P5)
        + '&FENDERLF_P1=' + JSON.stringify(dataOrder.FENDERLF.P1)
        + '&FENDERLF_P2=' + JSON.stringify(dataOrder.FENDERLF.P2)
        + '&FENDERLF_P3=' + JSON.stringify(dataOrder.FENDERLF.P3)
        + '&FENDERLF_P4=' + JSON.stringify(dataOrder.FENDERLF.P4)
        + '&FENDERLF_P5=' + JSON.stringify(dataOrder.FENDERLF.P5)
        + '&FENDERRB_P1=' + JSON.stringify(dataOrder.FENDERRB.P1)
        + '&FENDERRB_P2=' + JSON.stringify(dataOrder.FENDERRB.P2)
        + '&FENDERRB_P3=' + JSON.stringify(dataOrder.FENDERRB.P3)
        + '&FENDERRB_P4=' + JSON.stringify(dataOrder.FENDERRB.P4)
        + '&FENDERRB_P5=' + JSON.stringify(dataOrder.FENDERRB.P5)
        + '&FENDERRF_P1=' + JSON.stringify(dataOrder.FENDERRF.P1)
        + '&FENDERRF_P2=' + JSON.stringify(dataOrder.FENDERRF.P2)
        + '&FENDERRF_P3=' + JSON.stringify(dataOrder.FENDERRF.P3)
        + '&FENDERRF_P4=' + JSON.stringify(dataOrder.FENDERRF.P4)
        + '&FENDERRF_P5=' + JSON.stringify(dataOrder.FENDERRF.P5)
        + '&HOOD_P1=' + JSON.stringify(dataOrder.HOOD.P1)
        + '&HOOD_P2=' + JSON.stringify(dataOrder.HOOD.P2)
        + '&HOOD_P3=' + JSON.stringify(dataOrder.HOOD.P3)
        + '&HOOD_P4=' + JSON.stringify(dataOrder.HOOD.P4)
        + '&HOOD_P5=' + JSON.stringify(dataOrder.HOOD.P5)
        + '&LEFTDOORB_P1=' + JSON.stringify(dataOrder.LEFTDOORB.P1)
        + '&LEFTDOORB_P2=' + JSON.stringify(dataOrder.LEFTDOORB.P2)
        + '&LEFTDOORB_P3=' + JSON.stringify(dataOrder.LEFTDOORB.P3)
        + '&LEFTDOORB_P4=' + JSON.stringify(dataOrder.LEFTDOORB.P4)
        + '&LEFTDOORB_P5=' + JSON.stringify(dataOrder.LEFTDOORB.P5)
        + '&LEFTDOORF_P1=' + JSON.stringify(dataOrder.LEFTDOORF.P1)
        + '&LEFTDOORF_P2=' + JSON.stringify(dataOrder.LEFTDOORF.P2)
        + '&LEFTDOORF_P3=' + JSON.stringify(dataOrder.LEFTDOORF.P3)
        + '&LEFTDOORF_P4=' + JSON.stringify(dataOrder.LEFTDOORF.P4)
        + '&LEFTDOORF_P5=' + JSON.stringify(dataOrder.LEFTDOORF.P5)
        + '&LIGHT_BL=' + JSON.stringify(dataOrder.LIGHT.BL)
        + '&LIGHT_BR=' + JSON.stringify(dataOrder.LIGHT.BR)
        + '&LIGHT_FL=' + JSON.stringify(dataOrder.LIGHT.FL)
        + '&LIGHT_FR=' + JSON.stringify(dataOrder.LIGHT.FR)
        + '&MIRRORL_P1=' + JSON.stringify(dataOrder.MIRRORL.P1)
        + '&MIRRORR_P1=' + JSON.stringify(dataOrder.MIRRORR.P1)
        + '&RIGHTDOORB_P1=' + JSON.stringify(dataOrder.RIGHTDOORB.P1)
        + '&RIGHTDOORB_P2=' + JSON.stringify(dataOrder.RIGHTDOORB.P2)
        + '&RIGHTDOORB_P3=' + JSON.stringify(dataOrder.RIGHTDOORB.P3)
        + '&RIGHTDOORB_P4=' + JSON.stringify(dataOrder.RIGHTDOORB.P4)
        + '&RIGHTDOORB_P5=' + JSON.stringify(dataOrder.RIGHTDOORB.P5)
        + '&RIGHTDOORF_P1=' + JSON.stringify(dataOrder.RIGHTDOORF.P1)
        + '&RIGHTDOORF_P2=' + JSON.stringify(dataOrder.RIGHTDOORF.P2)
        + '&RIGHTDOORF_P3=' + JSON.stringify(dataOrder.RIGHTDOORF.P3)
        + '&RIGHTDOORF_P4=' + JSON.stringify(dataOrder.RIGHTDOORF.P4)
        + '&RIGHTDOORF_P5=' + JSON.stringify(dataOrder.RIGHTDOORF.P5)
        + '&RIN_BL=' + JSON.stringify(dataOrder.RIN.BL)
        + '&RIN_BR=' + JSON.stringify(dataOrder.RIN.BR)
        + '&RIN_FL=' + JSON.stringify(dataOrder.RIN.FL)
        + '&RIN_FR=' + JSON.stringify(dataOrder.RIN.FR)
        + '&ROOF_P1=' + JSON.stringify(dataOrder.ROOF.P1)
        + '&ROOF_P2=' + JSON.stringify(dataOrder.ROOF.P2)
        + '&ROOF_P3=' + JSON.stringify(dataOrder.ROOF.P3)
        + '&ROOF_P4=' + JSON.stringify(dataOrder.ROOF.P4)
        + '&ROOF_P5=' + JSON.stringify(dataOrder.ROOF.P5)
        + '&RUNBOARDL_P1=' + JSON.stringify(dataOrder.RUNBOARDL.P1)
        + '&RUNBOARDL_P2=' + JSON.stringify(dataOrder.RUNBOARDL.P2)
        + '&RUNBOARDL_P3=' + JSON.stringify(dataOrder.RUNBOARDL.P3)
        + '&RUNBOARDR_P1=' + JSON.stringify(dataOrder.RUNBOARDR.P1)
        + '&RUNBOARDR_P2=' + JSON.stringify(dataOrder.RUNBOARDR.P2)
        + '&RUNBOARDR_P3=' + JSON.stringify(dataOrder.RUNBOARDR.P3)
        + '&TRUNK_P1=' + JSON.stringify(dataOrder.TRUNK.P1)
        + '&TRUNK_P2=' + JSON.stringify(dataOrder.TRUNK.P2)
        + '&TRUNK_P3=' + JSON.stringify(dataOrder.TRUNK.P3)
        + '&TRUNK_P4=' + JSON.stringify(dataOrder.TRUNK.P4)
        + '&TRUNK_P5=' + JSON.stringify(dataOrder.TRUNK.P5)
        + '&WINDOWFRAMEL_P1=' + JSON.stringify(dataOrder.WINDOWFRAMEL.P1)
        + '&WINDOWFRAMEL_P2=' + JSON.stringify(dataOrder.WINDOWFRAMEL.P2)
        + '&WINDOWFRAMEL_P3=' + JSON.stringify(dataOrder.WINDOWFRAMEL.P3)
        + '&WINDOWFRAMER_P1=' + JSON.stringify(dataOrder.WINDOWFRAMER.P1)
        + '&WINDOWFRAMER_P2=' + JSON.stringify(dataOrder.WINDOWFRAMER.P2)
        + '&WINDOWFRAMER_P3=' + JSON.stringify(dataOrder.WINDOWFRAMER.P3)
        + '&Color=' + dataOrder.color
        + '&Gramos=' + dataOrder.gramos
        + '&Horas=' + dataOrder.horas;

    console.log(data);
    fetch('https://itpa-sigtac.com/webgo/controlador/actualizarCotizacion.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    }).then(function (response) {
        if (response.ok) {
            alert('Actualización exitosa');
        } else {
            alert('Hubo un error al actualizar');
        }
    }).catch(function (error) {
        console.error('Error en la solicitud:', error);
    });
};