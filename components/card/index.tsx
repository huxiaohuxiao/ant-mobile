import React from 'react';
import { View } from 'react-native';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import CardStyle from './style/index';
import { CardProps } from './PropsType';

export default class Card extends React.Component<CardProps, any> {
  static defaultProps = {
    style: {},
    full: false,
    styles: CardStyle,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const { style , styles, full, children, ...restProps } = this.props;
    const cardStyle = full ? styles.full : {};
    const childDom = React.Children.map(children, (child) => React.cloneElement(
        child as React.ReactElement<any>, { styles },
      ),
    );
    return (
      <View style={[styles.card, cardStyle, style]} {...restProps}>
        {childDom}
      </View>
    );
  }
}
