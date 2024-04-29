import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../Utils/Color';
import {responsiveSize} from '../../Utils/responsiveSize';

const Divider = (dividerStyles: any) => {
  return <View style={[styles.hr, dividerStyles || {}]} />;
};
const styles = StyleSheet.create({
  hr: {
    backgroundColor: COLORS.lightGray,
    height: responsiveSize(1),
    marginVertical: responsiveSize(2),
  },
});
export default Divider;
