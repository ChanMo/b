import React, {Component} from 'react'
import {Alert, StyleSheet, AsyncStorage, TouchableOpacity, View, TextInput, Text, Button} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import colors from '../colors'

export default class PasswordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: null,
      input: null,
      valid: false,
      fetching: false,
      to: null
    }
  }

  componentDidMount() {
    let to = this.props.navigation.getParam('to')
    this.setState({to:to})
    this._getPassword()
  }

  _getPassword = async() => {
    const password = await AsyncStorage.getItem('password')
    this.setState({password: password})
  }

  _setPassword(value) {
    this.setState({
      input: value
    })
  }

  _submit= () => {
    if (this.state.input !== this.state.password) {
      Alert.alert('密码错误')
    } else {
      this.props.navigation.navigate(this.state.to)
    }
  }

  _renderHeader = () => (
    <View style={{height:44,backgroundColor:'white',alignItems:'center',flexDirection:'row',elevation:3,marginTop:20,shadowColor:'grey',shadowOffset:{width:0,height:2,shadowOpacity:1,shadowRadius:1}}}>
      <TouchableOpacity
        style={{flex:1.7,paddingLeft:15}}
        onPress={()=>this.props.navigation.goBack()}>
        <Icon name='x' size={22} color='black' />
      </TouchableOpacity>
      <View style={{flex:6.6,alignItems:'flex-start'}}>
        <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>
          输入密码</Text>
      </View>
      <View style={{flex:1.7}}></View>
    </View>
  )

  _renderButton = () => {
    return <Button title='确定' onPress={this._submit}/>
  }

  render() {
    const {navigate, goBack} = this.props.navigation
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        {this._renderHeader()}
        <View style={{flex:1,padding:30}}>
          <Text style={styles.label}>密码</Text>
          <View style={styles.input}>
            <TextInput
              value={this.state.input}
              keyboardType='numeric'
              onChangeText={(value)=>this._setPassword(value)}
              height={40} />
          </View>
          {this._renderButton()}
        </View>
      </View>
    )
  }
}

const styles = {
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightgrey,
    borderRadius: 2,
    marginBottom: 15,
    paddingHorizontal:10,
  }

}