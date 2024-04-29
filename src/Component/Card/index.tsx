import {View, Text, ViewStyle} from 'react-native';
import React, {useContext} from 'react';
import FastImage from 'react-native-fast-image';
import {COLORS} from '../../Utils/Color';
import {
  normalize,
  respFontSize,
  responsiveWidth,
} from '../../Utils/responsiveSize';
import {ApiContext} from '../../../App';
import {IContent} from '../../Screens/Home/type';
import {styles} from './style';

type IContentProps = {
  data: IContent;
  detail?: boolean;
  mainStyle?: ViewStyle;
};
const HomeCard = ({data, detail = true}: IContentProps) => {
  // const {data, fetchRandomContent} = useContext(ApiContext);

  // console.log('Homecard data', data);
  return (
    <View
      style={[
        styles.mainView,
        detail && {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.5,
          shadowRadius: 12.35,

          elevation: 19,
        },
      ]}>
      <FastImage
        source={{uri: data?.thumbNailImage}}
        resizeMode="cover"
        style={{
          flex: 8,
          width: '100%',
          backgroundColor: COLORS.black,
          borderTopLeftRadius: normalize(detail ? 20 : 0),
          borderTopRightRadius: normalize(detail ? 20 : 0),
        }}
      />
      <View
        style={{
          flex: 1.2,
          padding: normalize(16),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 0.2}}>
            <FastImage
              source={{uri: data?.logo}}
              style={{
                height: '100%',
                width: responsiveWidth(60),
                borderRadius: normalize(14),
                alignSelf: 'flex-start',
              }}
              resizeMode="cover"
            />
          </View>

          <View style={{justifyContent: 'center', flex: 0.56}}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: respFontSize(14),
                fontWeight: '600',
                color: COLORS.blackGray,
              }}>
              {data?.title}
            </Text>
            <Text
              style={{
                fontSize: respFontSize(10),
                fontWeight: '400',
                color: COLORS.gray1,
              }}
              numberOfLines={1}>
              {data?.subTitle}
            </Text>
          </View>
          <View style={{flex: 0.24, justifyContent: 'center'}}>
            <View
              style={{
                borderRadius: 20,
                backgroundColor: COLORS.gray3,
                justifyContent: 'center',
                height: 30,
                paddingHorizontal: 10,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  fontSize: respFontSize(12),
                  fontWeight: '600',
                  color: COLORS.blue,
                }}>
                REFRESH
              </Text>
            </View>
            <Text
              style={{
                fontSize: respFontSize(6),
                fontWeight: '400',
                color: COLORS.gray1,
                textAlign: 'center',
                position: 'absolute',
                bottom: 4,
                alignSelf: 'center',
              }}>
              In-App Purchase
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;
