import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { WIDTH } from '../constants';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      const response = await fetch(
        'https://create.blinkapi.io/api/eSphKNzwb9EJBt6GBjKx7Q',
      );
      const data = await response.json();
      setData(data);
    };
    handleFetch();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          gap: 40,
          paddingHorizontal: 10,
          paddingVertical: 15,
        }}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('details', { plant: item })}
            style={{
              backgroundColor: '#56D1A7',
              paddingHorizontal: 10,
              paddingVertical: 18,
              borderTopRightRadius: 200,
              borderTopLeftRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: WIDTH * 0.85,
            }}>
            <View style={{ padding: 10 }}>
              <Text>Air purifier</Text>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: '700',
                  color: '#002140',
                  lineHeight: 39,
                }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 15 }}>
                ${item.price}
              </Text>
            </View>
            <Image
              source={{ uri: item.image }}
              style={{
                height: WIDTH * 0.35,
                width: WIDTH * 0.35,
                position: 'absolute',
                right: -WIDTH * 0.1,
                top: -30,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
