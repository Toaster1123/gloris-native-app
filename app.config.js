import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      ...config.extra,
      SCHEDULE_URL: process.env.SCHEDULE_URL,
      URL_KEY: process.env.URL_KEY,
      eas: {
        projectId: '3605cb9c-c8a8-4146-86b8-79a432d81b23',
      },
    },
  };
};
