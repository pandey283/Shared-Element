import {View, Text, StatusBar, Alert, Platform} from 'react-native';
import React, {createContext, useEffect, useState} from 'react';
import Navigator from './src/Navigation';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from './src/Constant/endPoint';
import {
  IContent,
  IContentAPiResponse,
  ITokenAPiResponse,
} from './src/Screens/Home/type';
import {COLORS} from './src/Utils/Color';

export const ApiContext = createContext({
  data: {
    text: '',
    logo: '',
    mainImage: '',
    subTitle: '',
    thumbNailImage: '',
    title: '',
    userName: '',
  },
  fetchRandomContent: () => {},
});

const App = () => {
  const [data, setData] = useState<IContent>({});
  useEffect(() => {
    // For Android devices
    if (Platform.OS === 'android') {
      NetInfo.fetch().then(async isConnected => {
        if (isConnected) {
          const token = await AsyncStorage.getItem('token');
          if (token && token !== null) {
            getData();
          } else {
            getApiToken();
          }
        } else {
          Alert.alert(
            'Network Issue!',
            'Please check your network connection',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          );
        }
      });
    }
  }, []);
  const getApiToken = async () => {
    try {
      const response: ITokenAPiResponse = await axios({
        method: 'post',
        url: API.getToken,
        data: {
          email: 'gtak026@gmail.com',
        },
      });
      if (response.status === 200) {
        await AsyncStorage.setItem('token', response.data?.token);
        setTimeout(() => {
          getData();
        }, 40);
      }
    } catch (error) {
      console.warn('token error', error);
    }
  };
  const getData = async () => {
    const token: any = await AsyncStorage.getItem('token');
    try {
      const response: IContentAPiResponse = await axios({
        method: 'get',
        url: API.getContent,
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        setData(response.data?.content);
      }
    } catch (error) {
      console.warn('get data api error', error);
    }
  };
  const fetchRandomContent = () => {
    getData();
  };
  return (
    <ApiContext.Provider value={{data, fetchRandomContent}}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={COLORS.white} barStyle={'light-content'} />
        <Navigator />
      </View>
    </ApiContext.Provider>
  );
};

export default App;
