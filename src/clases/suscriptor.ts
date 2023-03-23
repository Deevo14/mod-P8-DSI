import { Observer } from "../interfaces/observer";
import { Observable } from "../interfaces/observable";
import { Revista } from "./revista";

/**
 * Clase Suscriptor
 */
export class Suscriptor implements Observer{
    private name: string;
    private id: number;

    /**
     * Constructor de la clase Suscriptor
     * @param name nombre del suscriptor
     * @param id id del suscriptor
     */
    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }

    /**
     *  Getter de Name
     * @returns nombre del suscriptor
     */
    getName(){
        return this.name;
    }

    /**
     * Getter de Id
     * @returns id del suscriptor
     */
    getId(){
        return this.id;
    }

    /**
     * Método que actualiza al suscriptor
     * @param observable Observable que se va a actualizar
     * @returns string con el mensaje de actualización
     */
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