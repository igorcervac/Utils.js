require('./index');

describe('string', () => {
    test('Capitalize', () => {
        expect('canada'.capitalize()).toBe('Canada');
    });

    test('Capitalize for empty string returns empty string', () => {
        expect(''.capitalize()).toBe('');
    });
})
