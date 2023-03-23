import 'mocha';
import {expect} from 'chai';
import {Suscriptor} from '../src/clases/suscriptor';

describe ('Suscriptor', () => {
    it('Suscriptor getName', () => {
        const suscriptor = new Suscriptor('Juan', 0);
        expect(suscriptor.getName()).to.equal('Juan');
    });
    it('Suscriptor getId', () => {
        const suscriptor = new Suscriptor('Juan', 0);
        expect(suscriptor.getId()).to.equal(0);
    });
});
