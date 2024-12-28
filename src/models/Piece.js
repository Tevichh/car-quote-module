export class Piece {
    /**
     * Constructor de la clase Piece
     * @param {string} group - El grupo al que pertenece la pieza.
     * @param {string} part - La parte específica de la pieza.
     * @param {string} paint - El tipo de pintura. Valor por defecto: "Default".
     * @param {string} layer - La capa de pintura. Valor por defecto: "Monocapa".
     * @param {string} line - La línea de pintura. Valor por defecto: "Baslac".
     * @param {string} varnish - El barniz utilizado. Valor por defecto: "40-22".
     * @param {string} latoneria - La latonería de la pieza. Valor por defecto: "cualquier cosa".
     */
    constructor(group, part, paint = "Default", layer = "Monocapa", line = "Baslac", varnish = "40-22", latoneria = "cualquier cosa") {
        if (!group || !part) {
            throw new Error("El 'group' y 'part' son obligatorios.");
        }

        this.group = group;
        this.part = part;
        this.paint = paint;
        this.layer = layer;
        this.line = line;
        this.varnish = varnish;
        this.latoneria = latoneria;
    }

    generateJson() {
        return {
            paint: this.paint,
            layer: this.layer,
            line: this.line,
            varnish: this.varnish,
            latoneria: this.latoneria
        };
    }
}
