import React, { Component } from "react";
import { Image, StyleSheet, ScrollView, TypographyInput } from "react-native";
import Slider from "@react-native-community/slider";

import { theme, mocks } from "../constants";

class Settings extends Component {
  state = {
    budget: 850,
    monthly: 1700,
    notifications: true,
    newsletter: false,
    editing: null,
    profile: {},
  };

  componentDidMount() {
    this.setState({ profile: this.props.profile });
  }

  handleEdit(name, Typography) {
    const { profile } = this.state;
    profile[name] = Typography;

    this.setState({ profile });
  }

  toggleEdit(name) {
    const { editing } = this.state;
    this.setState({ editing: !editing ? name : null });
  }

  renderEdit(name) {
    const { profile, editing } = this.state;

    if (editing === name) {
      return (
        <TypographyInput
          defaultValue={profile[name]}
          onChangeTypography={(Typography) =>
            this.handleEdit([name], Typography)
          }
        />
      );
    }

    return <Typography bold>{profile[name]}</Typography>;
  }

  render() {
    const { profile, editing } = this.state;

    return (
      <Block>
        <Block flex={false} row center space="between" style={styles.header}>
          <Typography h1 bold>
            Settings
          </Typography>
          <Button>
            <Image source={profile.avatar} style={styles.avatar} />
          </Button>
        </Block>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Block style={styles.inputs}>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Typography gray2 style={{ marginBottom: 10 }}>
                  Username
                </Typography>
                {this.renderEdit("username")}
              </Block>
              <Typography
                medium
                secondary
                onPress={() => this.toggleEdit("username")}
              >
                {editing === "username" ? "Save" : "Edit"}
              </Typography>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Typography gray2 style={{ marginBottom: 10 }}>
                  Location
                </Typography>
                {this.renderEdit("location")}
              </Block>
              <Typography
                medium
                secondary
                onPress={() => this.toggleEdit("location")}
              >
                {editing === "location" ? "Save" : "Edit"}
              </Typography>
            </Block>
            <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
              <Block>
                <Typography gray2 style={{ marginBottom: 10 }}>
                  E-mail
                </Typography>
                <Typography bold>{profile.email}</Typography>
              </Block>
            </Block>
          </Block>

          <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

          <Block style={styles.sliders}>
            <Block margin={[10, 0]}>
              <Typography gray2 style={{ marginBottom: 10 }}>
                Budget
              </Typography>
              <Slider
                minimumValue={0}
                maximumValue={1000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={this.state.budget}
                onValueChange={(value) => this.setState({ budget: value })}
              />
              <Typography caption gray right>
                $1,000
              </Typography>
            </Block>
            <Block margin={[10, 0]}>
              <Typography gray2 style={{ marginBottom: 10 }}>
                Monthly Cap
              </Typography>
              <Slider
                minimumValue={0}
                maximumValue={5000}
                style={{ height: 19 }}
                thumbStyle={styles.thumb}
                trackStyle={{ height: 6, borderRadius: 6 }}
                minimumTrackTintColor={theme.colors.secondary}
                maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                value={this.state.monthly}
                onValueChange={(value) => this.setState({ monthly: value })}
              />
              <Typography caption gray right>
                $5,000
              </Typography>
            </Block>
          </Block>

          <Divider />

          <Block style={styles.toggles}>
            <Block
              row
              center
              space="between"
              style={{ marginBottom: theme.sizes.base * 2 }}
            >
              <Typography gray2>Notifications</Typography>
              <Switch
                value={this.state.notifications}
                onValueChange={(value) =>
                  this.setState({ notifications: value })
                }
              />
            </Block>

            <Block
              row
              center
              space="between"
              style={{ marginBottom: theme.sizes.base * 2 }}
            >
              <Typography gray2>Newsletter</Typography>
              <Switch
                value={this.state.newsletter}
                onValueChange={(value) => this.setState({ newsletter: value })}
              />
            </Block>
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

Settings.defaultProps = {
  profile: mocks.profile,
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  inputRow: {
    alignItems: "flex-end",
  },
  sliders: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: theme.colors.secondary,
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2,
  },
});
