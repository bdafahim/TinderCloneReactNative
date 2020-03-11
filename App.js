import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Asset, AppLoading } from "expo";

type AppState = {
    ready: boolean
};

export default class App extends React.Component<{}, AppState> {
    state = {
        ready: false
    };

    async componentDidMount() {
        await Promise.all(
            profiles.map(profile => Asset.loadAsync(profile.profile))
        );
        this.setState({ ready: true });
    }

    render() {
        const { ready } = this.state;
        if (!ready) {
            return <AppLoading />;
        }
        return <Profiles {...{ profiles }} />;
    }
}
