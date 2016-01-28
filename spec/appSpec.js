const app = require('../dist/app');

describe('app', () => {
  describe('results summary accuracy', () => {
    it('should return accurate hashtag and count', () => {
        expect(app.stringifySummary(4, 'foo')).toEqual('\nTWEETS: 4, HASHTAG: foo');
    });
  });
});