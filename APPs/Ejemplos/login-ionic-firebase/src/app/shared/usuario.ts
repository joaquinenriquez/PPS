export class Usuario {
    private email: string;
    private password: string;

    public get Email(): string {
        return this.email;
    }
    public set Email(value: string) {
        this.email = value;
    }

    public get Password(): string {
        return this.password;
    }
    public set Password(value: string) {
        this.password = value;
    }


}
