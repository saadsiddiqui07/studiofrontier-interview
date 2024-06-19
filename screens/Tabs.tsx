import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { Image, TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomIcon = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require('../assets/images/home.png')}
        style={{ height: 20, width: 20 }}
      />
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <BottomIcon />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
