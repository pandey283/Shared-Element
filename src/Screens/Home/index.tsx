import {View, Text, Platform, Alert, ToastAndroid} from 'react-native';
import React, {useContext, useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {
  height,
  normalize,
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/responsiveSize';
import HomeCard from '../../Component/Card';
import {COLORS} from '../../Utils/Color';
import {ApiContext} from '../../../App';
import {getFirstCharFromString} from '../../Utils/function';

const Home = () => {
  const todayDate = new Date();
  const {data, fetchRandomContent} = useContext(ApiContext);
  // console.log('home data', data);
  return (
    <View
      style={{flex: 1, paddingHorizontal: 16, backgroundColor: COLORS.white}}>
      <Text
        style={{
          color: COLORS.grey2,
          fontWeight: '600',
          fontSize: respFontSize(12),
        }}>
        Monday 21 NOVEMBER
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontSize: 34,
            fontWeight: '700',
            color: COLORS.black,
            textAlign: 'center',
          }}>
          Today
        </Text>
        <View
          style={{
            borderRadius: 30,
            backgroundColor: COLORS.lightGray,
            height: responsiveHeight(40),
            width: responsiveWidth(40),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '900',
              color: COLORS.blackk2,
              textAlign: 'center',
            }}>
            {getFirstCharFromString(data?.userName || '')}
          </Text>
        </View>
      </View>
      <View style={{height: height / 1.7, marginTop: normalize(10)}}>
        <HomeCard data={data} />
      </View>
    </View>
  );
};

export default Home;
