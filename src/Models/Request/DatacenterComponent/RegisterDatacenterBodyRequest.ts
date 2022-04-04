export default class RegisterDatacenterBodyRequest {
    public name: string;
    public description: string;
    public type: number;

    constructor(name: string, description: string, type: number) {
        this.name = name;
        this.description = description;
        this.type = type;
    }
}