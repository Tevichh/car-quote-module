const paint = "Default";
const layer = "Monocapa";
const line = "Baslac";
const varnish = "40-22";

class Part {
    constructor(paint, layer, line, varnish) {
        this.paint = paint;
        this.layer = layer;
        this.line = line;
        this.varnish = varnish;
    }
}

class PartExtra {  //PARA RIN - LUZ - ESPEJO
    constructor(damage = 0) {
        this.damage = damage
    }
}

export class ModelSelected {
    constructor(id = "", name, color = "AMARILLO") {
        this.id = id;
        this.name = name;
        this.color = color;
        this.RIGHTDOORF = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.RIGHTDOORB = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.LEFTDOORF = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.LEFTDOORB = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.ROOF = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.HOOD = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.TRUNK = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.BUMPERF = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.BUMPERB = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.FENDERRF = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.FENDERRB = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.FENDERLF = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.FENDERLB = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish),
            P4: new Part(paint, layer, line, varnish),
            P5: new Part(paint, layer, line, varnish)
        };

        this.RUNBOARDL = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish)
        };

        this.RUNBOARDR = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish)
        };

        this.WINDOWFRAMEL = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish)
        };

        this.WINDOWFRAMER = {
            P1: new Part(paint, layer, line, varnish),
            P2: new Part(paint, layer, line, varnish),
            P3: new Part(paint, layer, line, varnish)
        };

        this.LIGHT = {
            FL: new Part(paint, layer, line, varnish),
            FR: new Part(paint, layer, line, varnish),
            BL: new Part(paint, layer, line, varnish),
            BR: new Part(paint, layer, line, varnish)
        };

        this.RIN = {
            FL: new PartExtra(),
            FR: new PartExtra(),
            BL: new PartExtra(),
            BR: new PartExtra()
        };

        this.MIRRORL = {
            P1: new PartExtra()
        };

        this.MIRRORR = {
            P1: new PartExtra()
        };
    }
}
