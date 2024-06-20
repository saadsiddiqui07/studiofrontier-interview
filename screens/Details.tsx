import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HEIGHT, WIDTH } from '../constants';
import Animated from 'react-native-reanimated';

const DetailsScreen = ({ route }: any) => {
  const { plant } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: '#9CE5CB',
          padding: 18,
          height: HEIGHT * 0.4,
          borderBottomRightRadius: 400,
          borderBottomLeftRadius: 50,
        }}>
        <Text>Air purifier {plant.id}</Text>
        <Text style={{ fontSize: 38, fontWeight: '700' }}>{plant.name}</Text>
        <View style={{}}>
          <Text style={{ fontWeight: '800', color: 'gray' }}>Price</Text>
          <Text style={{ fontSize: 16, fontWeight: '700' }}>
            ${plant.price}
          </Text>
          <Animated.Image
            source={{ uri: plant.image }}
            style={{
              height: HEIGHT * 0.5,
              width: WIDTH * 0.5,
              position: 'absolute',
              right: 10,
              top: -30,
            }}
            resizeMode="contain"
            sharedTransitionTag={`plant-${plant.id}`}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailsScreen;
