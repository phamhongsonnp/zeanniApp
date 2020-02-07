import React from "react";
import {View,Image,Text} from "react-native";
import { ViewStyle, TextStyle } from "react-native/Libraries/StyleSheet/StyleSheet";
import { type } from "os";

type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type props = {
  style?:ViewStyle | ViewStyle[],
  backgroundimage?:string,
  _styleimage?:object,
  resizemode?:ImageResizeMode
};
type propsText = {
  style?:TextStyle | TextStyle[],
  backgroundimage?:string,
  _styleimage?:object,
  resizemode?:ImageResizeMode
};
export class ViewBase extends React.Component<props>{
  render(){
    let mH:number = this.props.style&&this.props.style.minHeight?(this.props.style.minHeight):0;
    let alignSelf:'' | FlexAlignType = this.props.style&&this.props.style.alignSelf?this.props.style.alignSelf:'';
    let urlBackgroundImage:string = this.props.backgroundimage?this.props.backgroundimage:'';
    let resizeMode:ImageResizeMode = this.props.resizemode?this.props.resizemode:'cover';
    return (
      mH!=0||urlBackgroundImage!=''?
      <View style={{...this.props.style,...{flexDirection: "column"}}}>
        {
          urlBackgroundImage!=''&&
          <Image 
            style={{...{resizeMode: resizeMode,width:'100%',position:'absolute',left: 0,right: 0,top: 0,bottom: 0,},...(this.props._styleimage?this.props._styleimage:{})}}
            source={{uri:urlBackgroundImage}}
          />
        }
        <View style={alignSelf==''?{flexDirection: "row",flexWrap: "wrap"}:{flexWrap: "wrap",alignSelf:alignSelf}}>
         {this.props.children}
        </View>
      </View>
      :
      <View style={this.props.style}>
        {this.props.children}
      </View>
    );
  }
}

export class TextBase extends React.Component<propsText>{
  render(){
    let urlBackgroundImage:string = this.props.backgroundimage?this.props.backgroundimage:'';
    let resizeMode:ImageResizeMode = this.props.resizemode?this.props.resizemode:'cover';
    return (
      urlBackgroundImage!=''?
      <Text style={{...this.props.style,backgroundColor:'#ccc'}}>
        {/* <Text style={{
          ...this.props.style,width:20,height:20,position:'absolute',left: 0,top: -10,
          borderWidth:1,borderColor:'red',paddingTop:0,paddingLeft:0,backgroundColor:'red',marginTop:0
        }}> */}
        {/* <Image 
          style={[{
              resizeMode: resizeMode
            },(this.props._styleimage?this.props._styleimage:{})
          ]}
          source={{uri:urlBackgroundImage}}
        /> */}
        {/* </Text> */}
        {/* <Text style={{width:'100%',paddingLeft:0,backgroundColor:'red'}}> */}
          {this.props.children}
        {/* </Text> */}
      </Text>
      :
      <Text style={this.props.style}>
        {this.props.children}
      </Text>
    )
  }
}