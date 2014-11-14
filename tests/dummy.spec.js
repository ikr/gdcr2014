describe('dummy', function () {
    'use strict';

    var assert = require('assert'),
        dummy = require('../src/dummy');

    it('is a function', function () {
        assert.strictEqual(typeof dummy, 'function');
    });

    it('is identical', function () {
        assert.strictEqual(dummy('moo'), 'moo');
    });
});
