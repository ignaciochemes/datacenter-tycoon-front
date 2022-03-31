export class LoginBodyRequest {
    public email: string;
    public password: string;
    public rol: number;

    constructor(email: string, password: string, rol: number) {
        this.setEmail(email);
        this.setPassword(password);
        this.setRol(rol);
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getRol(): number {
        return this.rol;
    }

    public setRol(rol: number): void {
        this.rol = rol;
    }

}