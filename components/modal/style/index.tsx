import variables from '../../style/themes/default';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    zIndex: variables.modal_zindex,
  },
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    borderRadius: variables.radius_md,
    width: 286,
    paddingTop: variables.v_spacing_xl,
    overflow: 'hidden',
  },
  // fix android borderRadius
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: variables.radius_md,
    borderBottomRightRadius: variables.radius_md,
  },
  header: {
    fontSize: variables.font_size_heading,
    color: variables.color_text_base,
    textAlign: 'center',
    paddingHorizontal: variables.h_spacing_lg,
  },
  body: {
    paddingTop: 0,
    paddingBottom: variables.v_spacing_lg,
    paddingHorizontal: variables.h_spacing_lg,
  },
  maskClosable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  closeWrap: {
    position: 'absolute',
    top: 0,
    left: variables.h_spacing_lg,
  },
  close: {
    fontSize: 40,
    fontWeight: '200',
    color: '#bcbcbc',
    lineHeight: 30,
  },
  buttonGroupH: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonGroupV: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonWrapH: {
    flex: 1,
    borderColor: variables.border_color_base,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingVertical: 11,
  },
  buttonWrapV: {
    flex: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: variables.border_color_base,
    paddingVertical: 11,
  },
  buttonText: {
    textAlign: 'center',
    color: variables.color_link,
    fontSize: variables.link_button_font_size,
    backgroundColor: 'transparent',
  },
  operationContainer: {
    paddingTop: 0,
  },
  operationBody: {
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  buttonTextOperation: {
    color: variables.color_text_base,
    textAlign: 'left',
    paddingHorizontal: 15,
  },
});
