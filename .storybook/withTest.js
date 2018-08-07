import jestTestResults from '../.out/jest-test-results.json';
import withTests from 'storybook-addon-jest';

export default withTests(jestTestResults, {
  filesExt: '.test.js',
});
