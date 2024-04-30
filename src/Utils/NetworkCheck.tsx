import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import {View, Text, Modal} from 'react-native';
import FastImage from 'react-native-fast-image';
import {normalize} from './responsiveSize';

export const NetworkCheck = () => {
  const [isNetworkConnected, setNetwork] = React.useState(true);

  React.useEffect(() => {
    NetInfo.fetch().then((res: any) => {
      updateNetworkState(res.isConnected);
    });

    const unsubscribe = NetInfo.addEventListener((state: any) => {
      updateNetworkState(state?.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, [isNetworkConnected]);

  const updateNetworkState = (status: boolean) => {
    setNetwork(status);
  };

  if (isNetworkConnected) return null;
  return (
    <Modal>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FastImage
          source={require('../Assets/Images/network.gif')}
          style={{
            width: normalize(250),
            height: normalize(250),
          }}
          resizeMode="contain"
        />
        <Text>No Network Connection</Text>
      </View>
    </Modal>
  );
};
