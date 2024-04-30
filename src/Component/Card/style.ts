import {StyleSheet} from 'react-native';
import {
  normalize,
  respFontSize,
  responsiveWidth,
} from '../../Utils/responsiveSize';
import {COLORS} from '../../Utils/Color';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderRadius: normalize(20),
    backgroundColor: COLORS.white,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  thumbImage: {
    flex: 8,
    width: '100%',
    backgroundColor: COLORS.black,
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  bottomView: {
    flex: 1.2,
    padding: normalize(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRowSpaceBetween: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoImg: {
    height: '100%',
    width: responsiveWidth(60),
    borderRadius: normalize(14),
    alignSelf: 'flex-start',
    borderWidth: 0.4,
    borderColor: COLORS.gray1,
  },
  textView: {justifyContent: 'center', flex: 0.56},
  titleTxt: {
    fontSize: respFontSize(14),
    fontWeight: '600',
    color: COLORS.blackGray,
  },
  subTitleTxt: {
    fontSize: respFontSize(10),
    fontWeight: '400',
    color: COLORS.gray1,
  },
  refreshView: {flex: 0.24, justifyContent: 'center'},
  refreshBtn: {
    borderRadius: 20,
    backgroundColor: COLORS.gray3,
    justifyContent: 'center',
    height: 30,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  refreshTxt: {
    fontSize: respFontSize(12),
    fontWeight: '600',
    color: COLORS.blue,
  },
  inAppTxt: {
    fontSize: respFontSize(6),
    fontWeight: '400',
    color: COLORS.gray1,
    textAlign: 'center',
    position: 'absolute',
    bottom: 4,
    alignSelf: 'center',
  },
});
