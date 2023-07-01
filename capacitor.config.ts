import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'my.first.project',
  appName: 'my-first-project',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
