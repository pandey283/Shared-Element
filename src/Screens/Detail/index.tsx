import * as React from 'react';
import {
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  Share,
  Alert,
} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {View, Text} from 'react-native';
import {ApiContext} from '../../../App';
import Animated from 'react-native-reanimated';

import {COLORS} from '../../Utils/Color';
import FastImage from 'react-native-fast-image';
import {styles} from './style';

const Detail = ({navigation}: any) => {
  const {width} = useWindowDimensions();
  const {data} = React.useContext(ApiContext);
  const source = {
    html: `${data?.text}`,
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: data.mainImage || data.title,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: 'gray',
    },
    title: {
      color: 'black',
    },
    p: {
      color: COLORS.grey2,
      fontSize: 16,
    },
  };

  return (
    <View style={{backgroundColor: COLORS.white}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.closeBtn}>
        <Text style={styles.closeTxt}>X</Text>
      </TouchableOpacity>
      <ScrollView
        style={{backgroundColor: COLORS.white}}
        contentContainerStyle={styles.scrollContainer}>
        <Animated.View sharedTransitionTag="sharedCard">
          <View style={styles.mainImageView}>
            <View>
              <FastImage
                source={{uri: data?.thumbNailImage}}
                resizeMode="cover"
                style={styles.fullSize}
              />
            </View>
          </View>

          <View style={styles.logotView}>
            <View>
              <FastImage
                source={{uri: data?.logo}}
                style={styles.logo}
                resizeMode="cover"
              />
            </View>

            <View style={styles.titleView}>
              <Text numberOfLines={1} style={styles.titleText}>
                {data?.title}
              </Text>
              <Text style={styles.subTitle} numberOfLines={1}>
                {data?.subTitle}
              </Text>
            </View>
            <View style={styles.refreshView}>
              <TouchableOpacity onPress={() => {}} style={styles.refreshBtn}>
                <Text style={styles.refreshText}>REFRESH</Text>
              </TouchableOpacity>
              <Text style={styles.inAppText}>In-App Purchase</Text>
            </View>
          </View>
        </Animated.View>

        <View style={styles.paddingHorizontal}>
          <RenderHtml
            contentWidth={width}
            source={source}
            tagsStyles={tagsStyles}
          />
        </View>
        <View style={styles.flexOne}>
          <FastImage
            source={{uri: data?.mainImage}}
            resizeMode="cover"
            style={styles.mainImage}
          />

          <View style={styles.bottomView}>
            <View style={styles.alignCenter}>
              <View>
                <FastImage
                  source={{uri: data.logo}}
                  style={styles.logoImg}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.bottomTitleView}>
                <Text numberOfLines={1} style={styles.bottomTitle}>
                  {data?.title}
                </Text>
                <Text style={styles.bottomSubTitleTxt} numberOfLines={1}>
                  {data?.subTitle}
                </Text>
              </View>
              <View style={styles.bottomRefreshTxtView}>
                <TouchableOpacity style={styles.refreshTxtBtn}>
                  <Text style={styles.bottomRefreshTxt}>REFRESH</Text>
                </TouchableOpacity>
                <Text style={styles.bottomInApp}>In-App Purchase</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            onShare();
          }}
          style={styles.shareView}>
          <FastImage
            style={styles.shareImg}
            source={require('../../Assets/Images/share1.png')}
          />
          <Text style={styles.shareTxt}>Share Story</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Detail;
2;
