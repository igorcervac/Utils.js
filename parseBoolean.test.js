const ut = require('./index');

describe('parseBoolean', () => {
    test("parseBoolean parses 'true' as true", () => {
        expect(ut.parseBoolean('true')).toBe(true);
    });

    test("parseBoolean parses 'false' as false", () => {
        expect(ut.parseBoolean('false')).toBe(false);
    });

    test("parseBoolean parses null as false", () => {
        expect(ut.parseBoolean(null)).toBe(false);
    });

    test("parseBoolean parses undefined as false", () => {
        expect(ut.parseBoolean(undefined)).toBe(false);
    });

    test('parseBoolean throws error when argument is object', () => {
        expect(() => { ut.parseBoolean({}); }).toThrow(new TypeError('invalid argument'));    
    });

    test('parseBoolean throws error when argument is array', () => {
        expect(() => { ut.parseBoolean([]); }).toThrow(new TypeError('invalid argument'));    
    });

    test("parseBoolean parses '1' as true", () => {
        expect(ut.parseBoolean('1')).toBe(true);
    });

    test("parseBoolean parses '0' as false", () => {
        expect(ut.parseBoolean('0')).toBe(false);
    });

    test("parseBoolean parses 'string' as false", () => {
        expect(ut.parseBoolean('string')).toBe(false);
    });
})