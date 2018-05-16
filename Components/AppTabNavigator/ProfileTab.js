import React, {Component} from "react";
import {StyleSheet, Text, View, Image, Dimensions} from "react-native";

import {Icon, Container, Content, Header, Left, Body, Right, Button} from "native-base";
import EntyopIcon from "react-native-vector-icons/Entypo";
import CardComponent from "../CardComponent";

let images = [
    require("../../assets/feed_images/1.jpg"),
    require("../../assets/feed_images/2.jpeg"),
    require("../../assets/feed_images/3.jpg"),
]
let {width, height} = Dimensions.get("window");

class ProfileTab extends Component {
    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" style={{ color: tintColor }} />
        )
    }
    // setting state for button-icons in the user below section
    constructor(props) {
        super(props)
            this.state ={
                activeIndex:0
        }
    } 
    // segmentClicked method
    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        });
    }

    renderSection = () => {
        if(this.state.activeIndex == 0) {
            return(
                <View style={{flexDirection:"row",flexWrap:"wrap"}}>
                    {this.renderSectionOne()}
                </View>
            )
        } else if(this.state.activeIndex == 1) {
            return(
                <View>
                    <CardComponent imageSource = "1" likes="100"/>
                    <CardComponent imageSource = "2" likes="10"/>
                    <CardComponent imageSource = "3" likes="20"/>
                </View>
            )
        } else if(this.state.activeIndex == 2) {
            return(
                <View>
                    <Text> No tagged images</Text>
                </View>
            )
        } else if(this.state.activeIndex == 3) {
            return(
                <View>
                    <Text>No saved images or videos </Text>
                </View>
            )
        }
    }

    renderSectionOne = () => {
        return (images.map((image,index)=>{
            return(
                <View key={index} style={[{width:(width)/ 3}, {height: (height) / 3}, index % 3 !== 0 ? {paddingLeft:2}: {paddingLeft:0}, {marginBottom:2}
                ]}>
                    <Image style={{flex:1, width:undefined, height:undefined}} source={image}/>
                </View>
            )
        }))
    }
    render(){
        return(
            <Container style={{flex:1, backgroundColor: "white"}}>
                <Header style={{backgroundColor: "white",marginTop: 20}}>
                    <Left><Icon style={{paddingLeft: 10}} name="md-person-add"/></Left>
                    <Body><Text>sahanas2008</Text></Body>
                    <Right><EntyopIcon style={{paddingRight: 10,fontSize:32}} name="back-in-time"/></Right>
                </Header>
                <Content>
                    <View style={{paddingTop:10}}>
                        {/* user details */}
                        <View style={{flexDirection: "row"}}>
                            <View style={{flex:1, alignItems: "center"}}>
                                <Image source={require("../../assets/sahana.jpg")} style={{width:75, height: 75, borderRadius:37.5}}/>
                            </View>
                            {/* user stats */}
                            <View style={{flex:3}}>
                                <View style={{flexDirection: "row" , justifyContent:"space-around"}}>
                                     <View style={{alignItems: "center"}}>
                                            <Text>81</Text>
                                            <Text style={{fontSize:10, color: "grey"}}>posts</Text>
                                        </View>
                                        <View style={{alignItems: "center"}}>
                                             <Text>89</Text>
                                            <Text style={{fontSize:10, color: "grey"}}>followers</Text>
                                        </View>
                                        <View style={{alignItems: "center"}}>
                                            <Text>138</Text>
                                            <Text style={{fontSize:10, color: "grey"}}>following</Text>
                                        </View>
                                </View>
                                {/**Edit profile and Settings Buttons **/}
                                <View style={{flexDirection: "row", paddingTop:10}}>
                                    <Button bordered dark style={{flex:3, marginLeft: 10, justifyContent:"center",height:30}}><Text>Edit Profile</Text></Button>

                                    <Button bordered dark style={{flex:1,height:30, marginLeft:5, marginRight:10, justifyContent: "center"}}><Icon style={{color:"black"}} name="settings"/></Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{paddingVertical:10, paddingHorizontal:10}}>
                        <Text style={{fontWeight: "bold"}}> Sahana Balram</Text>
                        <Text> Life is like a game of chess strive to win it</Text>
                    </View>
                    {/*Bottom section of profile section*/}
                    <View>
                            {/*icons*/}
                        <View style={{flexDirection: "row", justifyContent: "space-around", borderTopWidth:1,borderTopColor: "#eae5e5"}}>
                            <Button onPress={()=>this.segmentClicked(0)} transparent  active={this.state.activeIndex == 0}><Icon name="ios-apps-outline" style={[this.state.activeIndex == 0 ?{}: {color: "grey"}]}/></Button>
                            <Button onPress={()=>this.segmentClicked(1)} transparent active={this.state.activeIndex == 0}><Icon name="ios-list-outline" style={[this.state.activeIndex == 1 ?{}: {color: "grey"}]}/></Button>
                            <Button  onPress={()=>this.segmentClicked(2)} transparent active={this.state.activeIndex == 0}><Icon name="ios-people-outline" style={[this.state.activeIndex == 2 ?{}: {color: "grey"}]}/></Button>
                            <Button onPress={()=>this.segmentClicked(3)}  transparent active={this.state.activeIndex == 0}><Icon name="ios-bookmark-outline" style={[this.state.activeIndex == 3 ?{}: {color: "grey"}]}/></Button>
                        </View>
                        {this.renderSection()}
                    </View>
                </Content>
            </Container>
        )
    }
}
export default ProfileTab;

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});