import React, {Component} from 'react'
import {AsyncStorage,ImageBackground,TextInput, TouchableOpacity, View, Text,Dimensions,Alert} from 'react-native'
import Toast from 'react-native-simple-toast'

export default class DelectWalletScreen extends Component {
    static navigationOptions = {
        title: '删除钱包',
        headerStyle:{
            borderBottomWidth:0,
            shadowOpacity:0,
            elevation:0,
        }
      }
    constructor(props) {
        super(props)
        this.state = {
            words:''
        }
    }

    _setMnemonic(value) {
      this.setState({words:value})
    }

    _validate = () =>{
      AsyncStorage.getItem('mnemonic').then(result =>{
        if(result == this.state.words){
          Alert.alert('删除钱包','钱包助记词验证已通过，确认是否删除钱包？',
          [
            {text: '取消', onPress: () => console.log('Ask me later pressed')},
            {text: '确定', onPress: () => {this._clear()}, style: 'cancel'}
          ])
        }
        else if(this.state.words==''){
          Toast.show('助记词不能为空',1)
        }
        else{
            Toast.show('助记词不匹配，请重新输入',1)
        }
      })
    }

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>console.log(1)} style={{flex:1}}>
        <Text style={{}}>{item.name}</Text>
    </TouchableOpacity>
  )

  _keyExtractor = (item,i) => i.toString()

  _clear = async() => {
    try {
      await AsyncStorage.clear()
      this.props.navigation.navigate('Auth')
    } catch(error) {
    }
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#f6f7fb',paddingLeft:10,paddingRight:10}}>
        <Text style={{color:'#212b66',fontSize:16,fontWeight:'bold',paddingTop:20}}>请输入备份的钱包助记词(12个英文单词)</Text>
        <View style={{backgroundColor:'#fff',height:140,marginTop:30,borderRadius:5}}>
            <TextInput
              placeholder='请输入备份的钱包助记词,按空格分隔'
              multiline={true}
              blurOnSubmit={false}
              value={this.state.words}
              onChangeText={(value)=>this._setMnemonic(value)}
              autoCapitalize='none'
              style={{textAlignVertical: 'top',paddingLeft:20,paddingRight:20,marginTop:15,paddingBottom:15}}></TextInput>
        </View>
        <TouchableOpacity style={{marginTop:100}} onPress={()=>this._validate()}>
            <ImageBackground
                style={{height:42,margin:30}}
                imageStyle={{height:42,alignItems:'center'}}
                source={require('../images/wallet-btn.png')}>
                <View style={{alignItems:'center',justifyContent:'center',height:42}}>
                    <Text style={{fontSize:12,color:'#ffffff',alignSelf:'center'}}>立即验证</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
            
    </View>
    )
  }
}
