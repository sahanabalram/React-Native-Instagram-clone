import React, {Component} from "react";
import {StyleSheet, Text, View, ScrollView} from "react-native";

import {Container, Content,Icon, Thumbnail, Header,Body, Left, Right} from "native-base";
import CardComponent from "../CardComponent";
class HomeTab extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }
    render(){
        return(
           <Container style={styles.container}>
            <Header style={{backgroundColor: "white",marginTop: 20}}>
                <Left><Icon style={{paddingLeft: 10}} name="ios-camera-outline"/></Left>
                <Body><Text style={{fontSize: 20, alignItems:"center", justifyContent: "center"}}>Instagram</Text></Body>
                <Right><Icon style={{paddingRight: 10,}} name="ios-send-outline"/></Right>
            </Header>
                <Content>
                <View style={{height:100}}>
                    <View style={{flex:1, flexDirection: "row",justifyContent: "space-between", alignItems: "center", paddingHorizontal:7}}>
                        <Text style={{fontWeight:"bold"}}> Stories </Text>
                        <View style={{flexDirection:"row", alignItems: "center"}}>
                            <Icon name="md-play" style={{fontSize:14}}/>
                            <Text style={{fontWeight:"bold"}}> Watch All </Text>
                        </View>
                        
                    </View>
                    <View style={{flex:3}}>
                        <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center',
                                paddingStart: 5,
                                paddingEnd: 5
                            }}
                        >
                            <Thumbnail style={{marginHorizontal:5, borderColor:"green",borderWidth: 2}} source={require("../../assets/storiesHeader/1.jpg")}/>
                            <Thumbnail style={{marginHorizontal:5, borderColor:"green",borderWidth: 2}} source={require("../../assets/storiesHeader/2.jpg")}/>
                            <Thumbnail style={{marginHorizontal:5, borderColor:"green",borderWidth: 2}} source={require("../../assets/storiesHeader/3.jpg")}/>
                            <Thumbnail style={{marginHorizontal:5, borderColor:"green",borderWidth: 2}} source={require("../../assets/storiesHeader/4.jpg")}/>
                            <Thumbnail style={{marginHorizontal:5, borderColor:"green",borderWidth: 2}} source={require("../../assets/storiesHeader/5.jpg")}/>
                            <Thumbnail style={{marginHorizontal:5, borderColor:"green",borderWidth: 2}} source={require("../../assets/storiesHeader/6.jpg")}/>
                            <Thumbnail style={{marginHorizontal:5, borderColor:"green",borderWidth: 2}} source={require("../../assets/storiesHeader/7.jpeg")}/>
                        </ScrollView>
                    </View>
                </View>
                    <CardComponent imageSource="1" likes="101"/>
                    <CardComponent imageSource="2" likes="10"/>
                    <CardComponent imageSource="3" likes="20"/>
                </Content>
           </Container>
        )
    }
}
export default HomeTab;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : "white"
    }
});