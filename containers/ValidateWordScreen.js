import React, {Component} from 'react'
import {AsyncStorage,ImageBackground,Alert, TouchableOpacity, View, Text,Dimensions} from 'react-native'

export default class UserScreen extends Component {
    static navigationOptions = {
        title: '钱包工具'
      }
      constructor(props) {
        super(props)
        this.state = {
            words:[],
            messyWords:['text','number','window','value']
        }
    }

  _clear = async() => {
    try {
      await AsyncStorage.clear()
      this.props.navigation.navigate('Auth')
    } catch(error) {
    }
  }

  _backWord = (item,index) => {
    this.setState({
        messyWords:this.state.messyWords.concat([item]),
        words:this.state.words.filter(word=>word!=item)
    })
  }

  _selectWord = (item,index) => {
    this.setState({
        words:this.state.words.concat([item]),
        messyWords:this.state.messyWords.filter(word=>word!=item)
    })
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#f7f6fc',paddingLeft:10,paddingRight:10}}>
        <Text style={{color:'#212b66',fontSize:16,fontWeight:'bold',textAlign:'center',paddingTop:20}}>确认你的钱包助记词</Text>
        <Text style={{fontSize:14,color:'#808080',paddingTop:24,lineHeight:18,textAlign:'center'}}>请按顺序点击助记词，确认你的备份助记词正确</Text>
        <View style={{backgroundColor:'#ffffff',height:140,marginTop:30,padding:5,borderRadius:5,display:"flex",flexDirection:'row',flexWrap:'wrap'}}>
            {this.state.words.map((item,index)=>
                    <Text style={{padding:5}} onPress={()=>this._backWord(item,index)}>
                        {this.state.words[index]}
                    </Text>
            )}
        </View>
        <View style={{height:80,display:"flex",flexDirection:'row',flexWrap:'wrap'}}>
            {this.state.messyWords.map((item,index)=>
                    <Text style={{padding:5}} onPress={()=>this._selectWord(item,index)}>
                        {this.state.messyWords[index]}
                    </Text>
            )}
        </View>
        
        <TouchableOpacity onPress={()=>{}}>
            <ImageBackground
                style={{height:42,margin:30,marginTop:20}}
                imageStyle={{height:42,alignItems:'center'}}
                source={require('../images/wallet-btn.png')}>
                <View style={{alignItems:'center',justifyContent:'center',height:42}}>
                    <Text style={{fontSize:12,color:'#ffffff',alignSelf:'center'}}>确认</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    </View>
    )
  }
}