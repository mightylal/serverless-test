const assert = require('assert');

describe('Tests', () => {
    it('says Hello World', () => {
        assert.equal('hello world', 'hello world');
    });

    it('fails to work', () => {
        assert.equal('hello', 'bye');
    });
});