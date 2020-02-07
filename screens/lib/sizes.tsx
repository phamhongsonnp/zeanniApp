//best desing in
//iphone 6 (w:375)
//android (w:420)
import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper'
const sizes = new class {
   width = Dimensions.get('window').width < Dimensions.get('window').height ? Dimensions.get('window').width : Dimensions.get('window').height;
   os = Platform.OS;
   _screen_width = Dimensions.get('window').width;
   _screen_height = Dimensions.get('window').height;
   _getSize = (value: number) => {
       return (value * this.width / (this.os === 'ios' ? 375 : 375));
   }
   widthScale = this._getSize(1);
   _20sdp = this._getSize(20);
   _40sdp = this._getSize(40);
   _50sdp = this._getSize(50);
  
   _statusbar_height = Platform.OS === 'ios' ? (isIphoneX() ? this._40sdp : this._20sdp) : (Platform.Version >= 21 ? (StatusBar.currentHeight ? StatusBar.currentHeight : 0) : 0);
   _header_height = this._statusbar_height + this._50sdp;
   _footerbar_height =(isIphoneX() ? this._20sdp : 0);
}
export default sizes;