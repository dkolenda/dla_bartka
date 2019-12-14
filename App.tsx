/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import styled, { ThemeProvider } from 'styled-components/native'

class Test extends React.Component<{zbys:string}> {
  render(){
    console.log(this.props);
    return (
      <View style={this.props.style}>
        <Text>dupa dupa</Text>
      </View>
    )
  }
}

//style komponent

const StyledView = styled.View`
  background-color: papayawhip;
`
// to nie dziala
const StyledView2 = styled.View`
  background-color: red;

  View{
    background-color: blue;
  }
`

const StyledText = styled.Text<{ customColor: string }>`
  color: ${props => props.customColor};
`

const StyledText2 = styled(StyledText)`
  color: ${props => props.customColor};
`

const StyledText3 = styled(Test)<{bg: string}>`
  backgroundColor: ${props => props.bg};
`

const StyledTextObj = styled.Text<{sz:number}>({
    background: 'palevioletred',
    height: '50',
    width: '50%'
},(props)=>({
  fontSize:props.sz
}))

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <View style={styles.footer}></View>
          <StyledView>
            <StyledText3>dupa dupa dupa</StyledText3>
            <StyledText customColor={"test"} style={{backgroundColor:"blue"}}>Hello World!</StyledText>
            <StyledText2 customColor={"red"}>fdgfdgdfg</StyledText2>          
            <StyledTextObj sz={5}>ffdfgdfgdfgdfg</StyledTextObj>
          </StyledView>

          <StyledView2>
            <StyledView2>
              <Text>jhgjhgj</Text>
            </StyledView2>
          </StyledView2>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    backgroundColor:"red"
  },
});

export default App;
