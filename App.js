/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 import { Quiz } from './src/smart/quiz/Quiz';
 
 const App = () => {
   return (
       <SafeAreaView>
         <Quiz />
       </SafeAreaView>
   );
 }
 
 const styles = {
   divider: {
     marginVertical: 10,
   },
 };
 
 export default App;
 