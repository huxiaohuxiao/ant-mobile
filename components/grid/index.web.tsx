/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import classNames from 'classnames';
import Flex from '../flex';
import Carousel from '../carousel/index.web';
import { DataItem, GridProps } from './PropsType';

export default class Grid extends React.Component<GridProps, any> {
  static defaultProps = {
    data: [],
    hasLine: true,
    isCarousel: false,
    columnNum: 4,
    carouselMaxRow: 2,
    prefixCls: 'am-grid',
  };
  constructor(props) {
    super(props);
    this.state = {
      initialSlideWidth: 0, // only used in carousel model
    };
  }
  componentDidMount() {
    this.setState({
      initialSlideWidth: document.documentElement.clientWidth,
    });
  }
  renderCarousel = (rowsArr, pageCount, rowCount) => {
    const { prefixCls } = this.props;
    const carouselMaxRow = this.props.carouselMaxRow as number;
    const pagesArr: any[] = [];
    for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      const pageRows: any[] = [];
      for (let ii = 0; ii < carouselMaxRow; ii++) {
        const rowIndex = pageIndex * carouselMaxRow + ii;
        if (rowIndex < rowCount) {
          pageRows.push(rowsArr[rowIndex]);
        } else {
          // 空节点为了确保末尾页的最后未到底的行有底线(样式中last-child会没线)
          pageRows.push(<div key={`gridline-${rowIndex}`} />);
        }
      }
      pagesArr.push(<div key={`pageitem-${pageIndex}`} className={`${prefixCls}-carousel-page`}>{pageRows}</div>);
    }
    return pagesArr;
  }
  renderItem = (dataItem: DataItem | any, index: number, columnNum: number, renderItem: any) => {
    const { prefixCls } = this.props;
    let itemEl: any = null;
    if (renderItem) {
      itemEl = renderItem(dataItem, index);
    } else {
      if (dataItem) {
        const { icon, text } = dataItem;
        itemEl = (
          <div className={`${prefixCls}-item-inner-content column-num-${columnNum}`}>
            {
              React.isValidElement(icon) ? icon : (
                <img className={`${prefixCls}-icon`} src={icon} />
              )
            }
            <div className={`${prefixCls}-text`}>{text}</div>
          </div>
        );
      }
    }
    return (
      <div
        className={`${prefixCls}-item-content`}
      >
        {itemEl}
      </div>
    );
  }
  render() {
    const { prefixCls, className, data, hasLine, isCarousel, ...restProps } = this.props;
    let { columnNum, carouselMaxRow, onClick = () => {}, renderItem, ...restPropsForCarousel } = restProps;
    columnNum = columnNum as number;
    carouselMaxRow = carouselMaxRow as number;

    const { initialSlideWidth } = this.state;

    const dataLength = data && data.length || 0;
    const rowCount = Math.ceil(dataLength / columnNum);
    const rowWidth = `${100 / columnNum}%`;
    const colStyle = {
      width: rowWidth,
    };

    const rowsArr: any[] = [];

    for (let i = 0; i < rowCount; i++) {
      const rowArr: any[] = [];
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        if (dataIndex < dataLength) {
          const el = data && data[dataIndex];
          rowArr.push(<Flex.Item
            key={`griditem-${dataIndex}`}
            className={`${prefixCls}-item`}
            onClick={() => onClick(el, dataIndex)}
            style={colStyle}
          >
            {this.renderItem(el, dataIndex, columnNum, renderItem)}
          </Flex.Item>);
        } else {
          rowArr.push(<Flex.Item
            key={`griditem-${dataIndex}`}
            style={colStyle}
          />);
        }
      }
      rowsArr.push(<Flex justify="center" align="stretch" key={`gridline-${i}`}>{rowArr}</Flex>);
    }

    const pageCount = Math.ceil(rowCount / carouselMaxRow);
    const isCarouselMode = isCarousel && pageCount > 1;
    let renderEl;
    if (isCarouselMode) {
      if (initialSlideWidth > 0) {
        renderEl = (
          <Carousel initialSlideWidth={initialSlideWidth} {...restPropsForCarousel}>
            {this.renderCarousel(rowsArr, pageCount, rowCount)}
          </Carousel>
        );
      } else {
        // server side render
        renderEl = null;
      }
    } else {
      renderEl = rowsArr;
    }
    return (
      <div
        className={classNames({
          [prefixCls as string]: true,
          [`${prefixCls}-line`]: hasLine,
          [className as string]: className,
        })}
      >
        {renderEl}
      </div>
    );
  }
}
