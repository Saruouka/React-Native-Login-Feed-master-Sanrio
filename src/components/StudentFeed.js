import React, { Component } from 'react';
import { Text, ListView, Alert, Image, Linking, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Card, CardItem, Thumbnail } from 'native-base';
import {Actions} from 'react-native-router-flux';

const apiKey = 'AIzaSyAFYk7Kahr_8n-mTCE29K-x5lv2kgrd1aA';
const channelID = 'UCQBOAYwPdqzr1TxmjT-91Sg';
class StudentFeed extends Component {
    componentWillMount() {
        this.loadDataJson();

    }
    async loadDataJson() {
        try {
            const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=' + apiKey + '&channelId=' + channelID + '&part=snippet,id&order=date&maxResults=20');
            const responseJson = await response.json();
            this.setState({ dataSource: this.state.dataSource.cloneWithRows(responseJson.items) });
        } catch (error) {
            Alert.alert(
                'Cannot load data from this page',
                'Something went wrong.' + error,
                [
                    { text: 'Try Again' }
                ],
                { cancelable: false }

            );
        }
    }
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),
            channelImg: ''
        };
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>Actions.contentfeed()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title> Student </Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <Container>
                        <Content>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../Images/palm.jpg')} />
                                        <Body>
                                            <Text>นางสาวกฤติมา ยุระยงค์</Text>
                                            <Text note>57080501603</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../Images/ning.jpg')} />
                                        <Body>
                                            <Text>นางสาวธนกาญจน์ พีระธรณิศร์</Text>
                                            <Text note>57080501619</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={require('../Images/rakkiat.png')} />
                                        <Body>
                                            <Text>นายรักเกียรติ สมนิยาม</Text>
                                            <Text note>57080501672</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                </Content>
            </Container>
        );
    }
}

export default StudentFeed;