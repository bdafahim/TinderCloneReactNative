import React from "react";
import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import { Profile } from "./Profile";
import { render } from "react-dom";

export default class Profiles extends React.PureComponent<
    ProfilesProps,
    ProfileState
> {
    constructor(props: ProfilesProps) {
        super(props);
        const { profiles } = props;
        this.state = { profiles };
    }

    render() {
        const {
            profiles: [lastProfile, ...profiles]
        } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Icon name="user" size={32} color="gray" />
                    <Icon name="message-circle" size={32} color="gray" />
                </View>
                {/* <View style={styles.cards}>
          {
              profiles.reverse().map(profile => (
                <Card key={profile.id} {...{ profile }} />
              ))
          }
          <PanGestureHandler
            onHandlerStateChange={onGestureEvent}
            {...{ onGestureEvent }}
          >
            <Animated.View {...{ style }}>
              <Card profile={lastProfile} {...{ likeOpacity, nopeOpacity }} />
            </Animated.View>
          </PanGestureHandler>
        </View> */}
                <View style={styles.footer}>
                    <View style={styles.circle}>
                        <Icon name="x" size={32} color="#ec5288" />
                    </View>
                    <View style={styles.circle}>
                        <Icon name="heart" size={32} color="#6ee3b4" />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fbfaff"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16
    },
    cards: {
        flex: 1,
        margin: 8,
        zIndex: 100
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 16
    },
    circle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "gray",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 2
    }
});
