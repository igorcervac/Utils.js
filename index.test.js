
const { parseBoolean } = require('./index');

test('Unique', () => {
    expect([1,2,2].unique()).toStrictEqual([1,2]);
});

test('Insert', () => {
    expect([1,2,5,8].insert(2,3)).toStrictEqual([1,2,3,5,8]);
});

test('Random', () => {
    expect([1,2,3,5]).toContain([1,2,3,5].random());
});

test('Capitalize', () => {
    expect('canada'.capitalize()).toBe('Canada');
});

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