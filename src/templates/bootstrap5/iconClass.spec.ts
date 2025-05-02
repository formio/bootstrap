import iconClass from './iconClass';
import {expect} from 'chai';
describe('iconClass', () => {
    it('should output bootstrap icon classes if iconset is bi', () => {
        const classOutput = iconClass('bi', 'remove', false);
        expect(classOutput).to.equal('bi bi-trash')
    });
});
