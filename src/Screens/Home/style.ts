import {StyleSheet} from 'react-native';
import {
  height,
  normalize,
  respFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utils/responsiveSize';
import {COLORS} from '../../Utils/Color';

export const styles = StyleSheet.create({
  mainView: {flex: 1, paddingHorizontal: 16, backgroundColor: COLORS.white},
  dateText: {
    color: COLORS.grey2,
    fontWeight: '600',
    fontSize: respFontSize(14),
  },
  childView: {flexDirection: 'row', justifyContent: 'space-between'},
  todayTxt: {
    fontSize: 34,
    fontWeight: '700',
    color: COLORS.black,
    textAlign: 'center',
  },
  nameView: {
    borderRadius: 30,
    backgroundColor: COLORS.lightGray,
    height: responsiveHeight(40),
    width: responsiveWidth(40),
    justifyContent: 'center',
  },
  nameTxt: {
    fontSize: respFontSize(18),
    fontWeight: '900',
    color: COLORS.blackk2,
    textAlign: 'center',
  },
  cardView: {height: height / 1.7, marginTop: normalize(10)},
});
