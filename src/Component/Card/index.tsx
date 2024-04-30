import {View, Text, ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {IContent} from '../../Screens/Home/type';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

type IContentProps = {
  data: IContent;
  mainStyle?: ViewStyle;
  onRefresh?: () => void;
};
const HomeCard = ({data, onRefresh}: IContentProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailScreen');
      }}
      style={[styles.mainView]}>
      <FastImage
        source={{uri: data?.thumbNailImage}}
        resizeMode="cover"
        style={styles.thumbImage}
      />
      <View style={styles.bottomView}>
        <View style={styles.flexRowSpaceBetween}>
          <View style={{flex: 0.2}}>
            <FastImage
              source={{uri: data?.logo}}
              style={styles.logoImg}
              resizeMode="cover"
            />
          </View>

          <View style={styles.textView}>
            <Text numberOfLines={1} style={styles.titleTxt}>
              {data?.title}
            </Text>
            <Text style={styles.subTitleTxt} numberOfLines={1}>
              {data?.subTitle}
            </Text>
          </View>
          <View style={styles.refreshView}>
            <TouchableOpacity
              onPress={() => {
                onRefresh();
              }}
              style={styles.refreshBtn}>
              <Text style={styles.refreshTxt}>REFRESH</Text>
            </TouchableOpacity>
            <Text style={styles.inAppTxt}>In-App Purchase</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
