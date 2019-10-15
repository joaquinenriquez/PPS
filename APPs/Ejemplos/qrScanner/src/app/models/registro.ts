export class Registro {
    public formato: string;
    public texto: string;
    public tipo: string;
    public icono: string;
    public fechaCreacion: Date;

    constructor(formato: string, texto: string) {
        this.formato = formato;
        this.texto = texto;

        this.fechaCreacion = new Date();


        this.determinarTipo();
    }

    private determinarTipo() {
        // Lo vamos a determinar con el texto

        const prefijoTexto = this.texto.substr(0, 4);
        console.log(prefijoTexto);

        switch (prefijoTexto) {
            case 'http':
                this.tipo = 'http';
                this.icono = 'globe';
                break;
            case 'geo':
                this.tipo = 'geo';
                this.icono = 'pin';
                break;
            default:
                this.tipo = 'No reconocido';
                this.icono = 'create';
        }

    }


}
