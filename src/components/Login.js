import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    checkPass() {
        if ((this.state.username == 'Admin') && (this.state.password === '123456')) {
            Actions.contentfeed();
        } else {
            Alert.alert(
                'Wrong Username or Password ',
                'Wrong Username or Password, please try again.',
                [
                    { text: 'Try Again' }
                ],
                { cancelable: false }

            );
        }
    }
    render() {
        return (
            <Image source={require('../Images/55997-O8ISIC-126.jpg')}
                style={[styles.loginBG, {
                    backgroundColor: 'transparent'
                }]}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    padding: 20
                }}>
                    <Image source={require('../Images/Sanrio_logo.svg')} style={{
                        width: 300,
                        height: 91,
                        alignSelf:'center',
                        marginBottom:20
                    }} />
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={styles.viewHalf}>
                            <Text style={styles.strongLabel}>Username :</Text>
                        </View>
                        <View style={styles.view2_3}>
                            <TextInput
                                placeholder="Username"
                                onChangeText={(username) => this.setState({ username })}
                                style={styles.loginInput}
                            />
                        </View>

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 10
                    }}>
                        <View style={styles.viewHalf}>
                            <Text style={styles.strongLabel}>Password :</Text>
                        </View>
                        <View style={styles.view2_3}>
                            <TextInput
                                placeholder="Password"
                                onChangeText={(password) => this.setState({ password })}
                                style={styles.loginInput}
                                secureTextEntry={true}
                            />
                        </View>

                    </View>

                    <View style={{
                        marginTop: 20
                    }}>
                        <Button block primary 
                            onPress={this.checkPass.bind(this)}
                        >
                            <Text style={{
                                fontWeight: 'bold',
                                color: '#ffffff',
                                fontSize: 16
                            }}>Login</Text>
                        </Button>
                    </View>
                </View>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    loginBG: {
        flex: 1,
        width: null,
        justifyContent: 'center',
        height: null
    },
    viewHalf: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginRight: 10
    },
    view2_3: {
        flex: 2,
        backgroundColor: 'transparent'
    },
    strongLabel: {
        fontWeight: 'bold',
        color: '#1c63b7',
        fontSize: 16
    },
    loginInput: {
        height: 40,
        padding: 10,
         color: '#243a49',
        backgroundColor: 'rgba(255,255,255,0.3)',
        fontSize: 16
    },
});
export default Login;