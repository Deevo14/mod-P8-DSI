import { Observable } from './observable';

/**
 * Interfaz Observer
 */
export interface Observer {
  update(observable: Observable): void;
}
