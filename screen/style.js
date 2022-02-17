import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
    flexDirection: 'row',
  },

  main: {
    // flex: 1,
    padding: 20,
    // backgroundColor: 'white',
  },

  logo: {
    width: 66,
    height: 58,
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  head: {
    fontFamily: 'Rowdies-Bold',
    color: 'black',
  },

  subhead: {
    fontFamily: 'Rowdies-Regular',
    color: 'black',
  },
});

export default styles;
