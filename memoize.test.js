const ut = require('./index');

describe('memoize tests', () => {

    test('memoize parseBoolean true result', () => {
        expect(ut.memoize(ut.parseBoolean)('true')).toBe(true);
    });  

    test('memoize parseBoolean false result', () => {
        expect(ut.memoize(ut.parseBoolean)('false')).toBe(false);
    });
});