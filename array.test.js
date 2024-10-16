require('./index');

describe('array', () => {
    test('Unique', () => {
        expect([1,2,2].unique()).toStrictEqual([1,2]);
    });

    test('Insert', () => {
        expect([1,2,5,8].insert(2,3)).toStrictEqual([1,2,3,5,8]);
    });

    test('Random', () => {
        expect([1,2,3,5]).toContain([1,2,3,5].random());
    });
});