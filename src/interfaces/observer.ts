import { Observable } from './observable';

export interface Observer {
  update(observable: Observable): void;
}
