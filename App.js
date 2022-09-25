import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from './src/screens/News';
import { FontAwesome5 } from '@expo/vector-icons';

const NewsStack = createNativeStackNavigator();

const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <NewsStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#023020'
            },
            headerTitleStyle: {
              color: '#b7dcc8'
            }
          }}
        >
          <NewsStack.Screen name="HackerNews" component={News} options={{
            title: "Hacker News",
            headerRight: () => <FontAwesome5 name="hacker-news" size={24} color="#b7dcc8" />
          }} />
        </NewsStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;