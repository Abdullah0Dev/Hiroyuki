import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4b3b6a734ef146e2c8d7f9961456efda@o4507329620213760.ingest.us.sentry.io/4507329624276992",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
  
  // Correct placement of the telemetry option
  telemetry: false,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
});

