import { formWCNameCount, formWCWithoutWT, formWTNameCount, formWTWithoutWC } from './compare-wc-wt-form';

describe('vergelijk', () => {
    it('verifieer', () => {
        expect(true).toEqual(true);
        expect(formWCNameCount).toEqual(13);
        expect(formWTNameCount).toEqual(13);
        expect(formWCWithoutWT).toStrictEqual([]);
        expect(formWTWithoutWC).toStrictEqual([]);
    });
});
