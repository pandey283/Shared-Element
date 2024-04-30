import {View, Text} from 'react-native';
import React, {useContext} from 'react';

import HomeCard from '../../Component/Card';
import {ApiContext} from '../../../App';
import {getFirstCharFromString} from '../../Utils/function';
import Animated from 'react-native-reanimated';
import {styles} from './style';
const Home = () => {
  const date = new Date().getDate();
  const month = new Date().toLocaleString('defalut', {month: 'long'});
  const day = new Date().toLocaleString('locale', {weekday: 'long'});

  const {data, fetchRandomContent} = useContext(ApiContext);

  return (
    <View style={styles.mainView}>
      <Text style={styles.dateText}>{`${day} ${date} ${month}`}</Text>
      <View style={styles.childView}>
        <Text style={styles.todayTxt}>Today</Text>
        <View style={styles.nameView}>
          <Text style={styles.nameTxt}>
            {getFirstCharFromString(data?.userName || '')}
          </Text>
        </View>
      </View>
      <Animated.View style={styles.cardView}>
        <HomeCard
          data={data}
          onRefresh={() => {
            fetchRandomContent();
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Home;
