import {NativeModules} from 'react-native';

const {ToastModule} = NativeModules;

export default {
  show: (message: string, duration: number) => {
    ToastModule.show(message, duration);
  },
  SHORT: 0,
  LONG: 1,
};
