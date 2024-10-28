export const ENV = {
  development: {
    MOCK_URL: 'https://6172cfe5110a740017222e2b.mockapi.io', // Just for Testing purposes
  },
  production: {
    URL: '',
  }
};

export default __DEV__ ? ENV.development : ENV.production;