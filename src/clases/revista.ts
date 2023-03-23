import { Observable } from "../interfaces/observable";
import { Observer } from "../interfaces/observer";

/**
 * Clase Revista
 */
export class Revista implements Observable {
  private observers: Observer[] = [];
  private name: string;
  private editions: number[];
  private releaseYear: number;
  private budget: number;
  

  /**
   * Constructor de la clase Revista
   * @param name Nombre de la revista
   * @param editions Ediciones de la revista
   * @param releaseYear Año de publicación
   * @param budget Presupuesto de la revista
   */
  constructor(name: string, editions: number[], releaseYear: number, budget: number) {
    this.name = name;
    this.editions = editions;
    this.releaseYear = releaseYear;
    this.budget = budget;

  }

  /**
   * Getter de Name
   * @returns Nombre de la revista
   */
  getName() {
    return this.name;
  }

  /**
   * Getter de Editions
   * @returns Ediciones de la revista
   */
  getEditions() {
    return this.editions;
  }

  /**
   * Getter de ReleaseYear 
   * @returns Año de publicación
   */
  getReleaseYear() {
    return this.releaseYear;
  }

  /**
   *  Getter de Budget
   * @returns Presupuesto de la revista
   */
  getBudget() {
    return this.budget;
  }

  getNumberOfObservers() {
    return this.observers.length;
  }

  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error("The observer had already been subscribed");
    } else {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error("The observer has not been subscribed");
    } else {
      this.observers.splice(index, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  addEdition(edition: number) {
    this.editions.push(edition);
    this.notify();
  }
}
