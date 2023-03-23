import { Observer } from "../interfaces/observer";
import { Observable } from "../interfaces/observable";
import { Revista } from "./revista";

export class Suscriptor implements Observer{
    private name: string;
    private id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    update(observable: Observable): string {
        if(observable instanceof Revista){
            console.log(`Hola ${this.name}, la revista ${observable.getName()} ha sacado una nueva edición: ${observable.getEditions()[observable.getEditions().length - 1]}`)
            return `Hola ${this.name}, la revista ${observable.getName()} ha sacado una nueva edición: ${observable.getEditions()[observable.getEditions().length - 1]}`;
        }
        else{
            throw new Error("Observable no es una instancia de Revista");
        }
    }
}