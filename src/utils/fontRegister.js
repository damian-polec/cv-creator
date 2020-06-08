import { Font } from '@react-pdf/renderer';
import RobotoRegular from '../fonts/Roboto-Regular.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';


export const fontRegister = () => {
  // Font.register({ family: 'Roboto', src: RobotoRegular })
  // Font.register({ family: 'Roboto-Bold', src: RobotoBold })
  Font.register({
    family: 'Roboto',fonts: [
      {src: RobotoRegular, fontStyle: 'normal', fontWeight: 'normal'},
      {src: RobotoBold, fontStyle: 'normal', fontWeight: 'bold'}
    ]})
  Font.registerHyphenationCallback(word => {
    return [word];
  });
};