import 'mocha';
import {expect} from 'chai';
import {Revista} from '../src/clases/revista';
import {Suscriptor} from '../src/clases/suscriptor';

describe('Revista Tests', () => {
    it('Subscribe', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        const suscriptor = new Suscriptor('Pepe', 1);
        revista.subscribe(suscriptor);
        expect(revista.getNumberOfObservers()).to.be.equal(1);
    });
    it('Suscribe error', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        const suscriptor = new Suscriptor('Pepe', 1);
        revista.subscribe(suscriptor);
        expect(() => revista.subscribe(suscriptor)).to.throw('The observer had already been subscribed');
    });
    it('Unsubscribe', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        const suscriptor = new Suscriptor('Pepe', 1);
        revista.subscribe(suscriptor);
        revista.unsubscribe(suscriptor);
        expect(revista.getNumberOfObservers()).to.be.equal(0);
    }
    );
    it('Unsubscribe error', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        const suscriptor = new Suscriptor('Pepe', 1);
        expect(() => revista.unsubscribe(suscriptor)).to.throw('The observer has not been subscribed');
    });
    it('Notify', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        const suscriptor = new Suscriptor('Pepe', 1);
        revista.subscribe(suscriptor);
        revista.addEdition(4);
        expect(suscriptor.update(revista)).to.be.equal('Hola Pepe, la revista Revista ha sacado una nueva edición: 4');
    });
    it('Notify error', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        const suscriptor = new Suscriptor('Pepe', 1);
        expect(suscriptor.update(revista)).to.throw('Observable no es una instancia de Revista');
    });
});

