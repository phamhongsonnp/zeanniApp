import React, {Component} from 'react';
import { Image ,Alert} from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';
import MyImg2 from './MyImg2';

class MyImg extends Component {

    constructor(props) {
        super(props);
        let source = resolveAssetSource(props.source);
        let style = props.style || {};
        let _width = parseFloat(props.width) || null;
        let _height = parseFloat(props.height) || null;
        this.state = {
            data:(!source.width || !source.height || (!_width && !_height))
                ?<Image source={props.source} style={style} />
                :(
                    (_width)
                    ?<Image source={source} style={[style,{width:_width,height:(source.height*_width/source.width)}]} />
                    :<Image source={source} style={[style,{width:(source.width*_height/source.height),height:_height}]} />
                ),
            is_svg:false
        };
        if (source && source.uri && !source.uri.match('.svg') && (!source.width || !source.height)){
            if(_width){
                Image.getSize(source.uri, (width, height) => {
                    this.setState({data:<Image source={source} style={[style,{width:_width,height:(height*_width/width)}]} />});
                });
            }
            else if(_height){
                Image.getSize(source.uri, (width, height) => {
                    this.setState({data:<Image source={source} style={[style,{width:(width*_height/height),height:_height}]} />});
                });
            }
            else {
                // this.setState({data:<Image {...this.props} />});
            }
            
        }
    }

    render() {
        let source = resolveAssetSource(this.props.source);
        if (source && (source.uri && source.uri.match('.svg'))) {
            let _width = parseFloat(this.props.width) || null;
            let _height = parseFloat(this.props.height) || null;
            let style = this.props.style || {};
            delete style.height;
            delete style.width;
            if(_height && _width)
                return <MyImg2 source={source} width={_width} height={_height} style={{...style,width:_width,height:_height}} />;
            else if(_height)
                return <MyImg2 source={source} height={_height}  style={{...style,height:_height}}/>;
            else
                return <MyImg2 source={source} width={(_width||150)} style={style}/>;

        }
        else
            return this.state.data;
    }
};

export default MyImg;
