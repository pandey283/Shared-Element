import * as React from 'react';
import {useWindowDimensions, ScrollView, TouchableOpacity} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {View, Text} from 'react-native';
import {ApiContext} from '../../../App';
import HomeCard from '../../Component/Card';
import {
  height,
  normalize,
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/responsiveSize';
import {COLORS} from '../../Utils/Color';
import FastImage from 'react-native-fast-image';

const Detail = () => {
  const {width} = useWindowDimensions();
  const {data, fetchRandomContent} = React.useContext(ApiContext);
  const source = {
    html: `${data.text}`,
  };
  return (
    <ScrollView
      style={{backgroundColor: COLORS.white}}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingTop: 8,
        flexGrow: 1,
      }}>
      <View
        style={{
          height: height / 1.7,
          borderBottomWidth: 0.5,
          borderBlockColor: COLORS.lightGray,
        }}>
        <View>
          <FastImage
            source={{uri: data?.thumbNailImage}}
            resizeMode="cover"
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: normalize(16),
        }}>
        <RenderHtml contentWidth={width} source={source} />
      </View>
      <View style={{flex: 1}}>
        <FastImage
          source={{uri: data?.mainImage}}
          resizeMode="cover"
          style={{
            height: height / 1.8,
            width: '100%',
            backgroundColor: COLORS.black,
          }}
        />
        <View
          style={{
            flex: 1,
            width: '100%',
            padding: normalize(16),
            marginTop: 20,
            backgroundColor: COLORS.lightGray,
          }}>
          <View
            style={{
              alignSelf: 'center',
            }}>
            <View>
              <FastImage
                source={{uri: data.logo}}
                style={{
                  height: responsiveHeight(80),
                  width: responsiveWidth(80),
                  borderRadius: normalize(14),
                  alignSelf: 'center',
                }}
                resizeMode="cover"
              />
            </View>

            <View style={{gap: 5, paddingTop: 5}}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: respFontSize(14),
                  fontWeight: '600',
                  color: COLORS.blackGray,
                  textAlign: 'center',
                }}>
                {data?.title}
              </Text>
              <Text
                style={{
                  fontSize: respFontSize(10),
                  fontWeight: '400',
                  color: COLORS.gray1,
                  textAlign: 'center',
                }}
                numberOfLines={1}>
                {data?.subTitle}
              </Text>
            </View>
            <View style={{justifyContent: 'center', paddingTop: 12}}>
              <View
                style={{
                  borderRadius: 20,
                  backgroundColor: COLORS.blue,
                  justifyContent: 'center',
                  height: 30,
                  paddingHorizontal: 10,
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: respFontSize(12),
                    fontWeight: '600',
                    color: COLORS.white,
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
                  alignSelf: 'center',
                  paddingTop: 2,
                }}>
                In-App Purchase
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.lightGray,
          paddingVertical: normalize(6),
          alignSelf: 'center',
          // paddingTop: normalize(20),
          justifyContent: 'center',
          alignItems: 'center',
          width: responsiveWidth(120),
          height: responsiveHeight(40),
          marginVertical: 20,
          borderRadius: 5,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: COLORS.blue,
            fontSize: respFontSize(14),
          }}>
          Share
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Detail;
2;
