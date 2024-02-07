import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {app} from './firebaseConfig';

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

  