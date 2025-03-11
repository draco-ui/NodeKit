import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import { getRemoteConfig, fetchAndActivate, getValue } from 'firebase/remote-config';
import { tracked } from '@glimmer/tracking';

const firebaseConfig = {
  apiKey: "AIzaSyB85ozNZwExGF0Qg3mRfJ5t_C_zXJ18yHQ",
  authDomain: "dracoui.firebaseapp.com",
  projectId: "dracoui",
  storageBucket: "dracoui.firebasestorage.app",
  messagingSenderId: "935257972731",
  appId: "1:935257972731:web:9c4f75433e087b369f755e",
  measurementId: "G-3LW61NGCL8"
};

export default class FirebaseService extends Service {
  @tracked corinvoDeveloperLogin = null;
  @tracked isRemoteConfigReady = false;

  constructor() {
    super(...arguments);
    this.initializeFirebaseRemoteConfig();
  }

  async initializeFirebaseRemoteConfig() {
    try {
      const app = initializeApp(firebaseConfig);
      const remoteConfig = getRemoteConfig(app);

      remoteConfig.settings.minimumFetchIntervalMillis = 43200;
      remoteConfig.defaultConfig = {
        corinvoDeveloperLogin: true
      };

      await fetchAndActivate(remoteConfig);
      this.corinvoDeveloperLogin = getValue(remoteConfig, 'corinvoDeveloperLogin').asBoolean();
      this.isRemoteConfigReady = true;
    } catch (error) {
      this.isRemoteConfigReady = true;
    }
  }

  getCorinvoDeveloperLoginValue() {
    return this.corinvoDeveloperLogin;
  }
}
