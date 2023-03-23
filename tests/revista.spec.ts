import 'mocha';
import {expect} from 'chai';
import {Revista} from '../src/clases/revista';

describe('Revista Tests', () => {
    it('Get name', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        expect(revista.getName()).to.be.equal('Revista');
    }
    );
    it('Get editions', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        expect(revista.getEditions()).to.be.eql([1, 2, 3]);
    }
    );
    it('Get release year', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        expect(revista.getReleaseYear()).to.be.equal(2020);
    }
    );
    it('Get budget', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        expect(revista.getBudget()).to.be.equal(1000);
    }
    );
    it('Add edition', () => {
        const revista = new Revista('Revista', [1, 2, 3], 2020, 1000);
        revista.addEdition(4);
        expect(revista.getEditions()).to.be.eql([1, 2, 3, 4]);
    }
    );
});
