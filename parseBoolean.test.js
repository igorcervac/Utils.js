const { parseBoolean } = require('./index');

describe('parseBoolean', () => {
    test("parseBoolean parses 'true' as true", () => {
        expect(parseBoolean('true')).toBe(true);
    });

    test("parseBoolean parses 'false' as false", () => {
        expect(parseBoolean('false')).toBe(false);
    });

    test("parseBoolean parses null as false", () => {
        expect(parseBoolean(null)).toBe(false);
    });

    test("parseBoolean parses undefined as false", () => {
        expect(parseBoolean(undefined)).toBe(false);
    });

    test('parseBoolean throws error when argument is object', () => {
        expect(() => { parseBoolean({}); }).toThrow(new TypeError('invalid argument'));    
    });

    test('parseBoolean throws error when argument is array', () => {
        expect(() => { parseBoolean([]); }).toThrow(new TypeError('invalid argument'));    
    });

    test("parseBoolean parses '1' as true", () => {
        expect(parseBoolean('1')).toBe(true);
    });

    test("parseBoolean parses '0' as false", () => {
        expect(parseBoolean('0')).toBe(false);
    });
})