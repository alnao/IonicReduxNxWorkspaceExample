import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'it.alnao',
  appName: 'alnaoIonic',
  webDir: '../../dist/apps/exampleapp/',
  bundledWebRuntime: false,
  plugins : {
    SplashScreen:{
      launchShowDuration:0
    }
  },
  cordova : {},
  server:{
    allowNavigation : ['18.161.111.62']
  }
};
export default config;