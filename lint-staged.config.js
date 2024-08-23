module.exports = {
  '**/*.{js,jsx,ts,tsx}': (filenames) => [`yarn eslint --fix ${filenames.join(' ')}`],
  '**/*.ts?(x)': () => `yarn build:types`,
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
