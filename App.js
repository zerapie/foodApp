import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FirebaseContext } from './FirebaseContext';
import { useSelector, useDispatch } from 'react-redux';
import { afficheExemple } from './redux/Action/exemple';


function HomeScreen() {
  const {exemple} = useSelector(store => store)
  const dispatchExemple = useDispatch();
  console.log("exemple", exemple);
  const toggle = () => {
    dispatchExemple(afficheExemple(!exemple));
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ZERAPIE!</Text>
      {exemple&& <Text> ceci es mon exemple </Text> }
      <Button onPress={toggle} title="Afficher"/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  
  const context = useContext(FirebaseContext);
  console.log("context", context);


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}