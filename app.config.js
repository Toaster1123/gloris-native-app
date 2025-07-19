import 'dotenv/config';

export default {
  expo: {
    name: 'Gloris',
    slug: 'gloris-app',
    version: '1.0.0',
    android: {
      package: 'com.gloris.scheduleapp',
    },
    extra: {
      SCHEDULE_URL: process.env.SCHEDULE_URL,
      URL_KEY: process.env.URL_KEY,
    },
    plugins: [['expo-build-properties']],
  },
};
