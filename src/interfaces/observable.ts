import { Observer } from './observer';

/**
 * Interfaz Observable
 */
export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
  }