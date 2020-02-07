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
  _0sdp = this._getSize(0);
  _42sdp = this._getSize(42);
  _16sdp = this._getSize(16);
  _1sdp = this._getSize(1);
  _170sdp = this._getSize(170);
  _10sdp = this._getSize(10);
  _66sdp = this._getSize(66);
  _20sdp = this._getSize(20);
  _33sdp = this._getSize(33);
  _25sdp = this._getSize(25);
  _15sdp = this._getSize(15);
  _40sdp = this._getSize(40);
  _48sdp = this._getSize(48);
  _129sdp = this._getSize(129);
  _52sdp = this._getSize(52);
  _17_5sdp = this._getSize(17.5);
  _14sdp = this._getSize(14);
  _127sdp = this._getSize(127);
  _30sdp = this._getSize(30);
  _11sdp = this._getSize(11);
  _35sdp = this._getSize(35);
  _4sdp = this._getSize(4);
  _5sdp = this._getSize(5);
  _13sdp = this._getSize(13);
  _23_75sdp = this._getSize(23.75);
  _19sdp = this._getSize(19);
  _24sdp = this._getSize(24);
  _12sdp = this._getSize(12);
  _18sdp = this._getSize(18);
  _2sdp = this._getSize(2);
  _32sdp = this._getSize(32);
  _58sdp = this._getSize(58);
  _7sdp = this._getSize(7);
  _22_5sdp = this._getSize(22.5);
  _38sdp = this._getSize(38);
  _9sdp = this._getSize(9);
  _6sdp = this._getSize(6);
  _74sdp = this._getSize(74);
  _27sdp = this._getSize(27);
  _3sdp = this._getSize(3);
  _81_25sdp = this._getSize(81.25);
  _65sdp = this._getSize(65);
  _200sdp = this._getSize(200);
  _70sdp = this._getSize(70);
  _80sdp = this._getSize(80);
  _60sdp = this._getSize(60);
  _96sdp = this._getSize(96);
  _21sdp = this._getSize(21);
  _50sdp = this._getSize(50);
  _18_2sdp = this._getSize(18.2);
_statusbar_height = Platform.OS === 'ios' ? (isIphoneX() ? this._40sdp : this._20sdp) : (Platform.Version >= 21 ? (StatusBar.currentHeight ? StatusBar.currentHeight : 0) : 0);
   _header_height = this._statusbar_height + this._50sdp;
   _footerbar_height =(isIphoneX() ? this._20sdp : 0);
}
export default sizes;