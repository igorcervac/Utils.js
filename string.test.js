require('./index');

describe('string', () => {
    test('Capitalize', () => {
        expect('canada'.capitalize()).toBe('Canada');
    });
})
