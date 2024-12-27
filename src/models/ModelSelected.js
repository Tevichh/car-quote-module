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
    constructor(damage = 0, colorDefault = 0x000000) {
        this.damage = damage
        this.colorDefault = colorDefault
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
            FL: new PartExtra(),
            FR: new PartExtra(),
            BL: new PartExtra(0, 0x721C15),
            BR: new PartExtra(0, 0x721C15)
        };

        this.RIN = {
            FL: new PartExtra(0, 0xffffff),
            FR: new PartExtra(0, 0xffffff),
            BL: new PartExtra(0, 0xffffff),
            BR: new PartExtra(0, 0xffffff)
        };

        this.MIRRORL = {
            P1: new PartExtra()
        };

        this.MIRRORR = {
            P1: new PartExtra()
        };
    }
}
