---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

When using `Carousel` in web projects, you may have problem about how to deal with variable item height.

> [issues/1002](https://github.com/ant-design/ant-design-mobile/issues/1002#issuecomment-287301262)、[nuka-carousel/issues/103](https://github.com/FormidableLabs/nuka-carousel/issues/103)

````jsx
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class App extends React.Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR'],
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <WingBlank>
        <div className="sub-title">normal</div>
        <Carousel
          className="my-carousel" autoplay={false} infinite selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>

        <WhiteSpace />
        <div className="sub-title">vertical</div>
        <Carousel className="my-carousel"
          dots={false} dragging={false} swiping={false} autoplay infinite vertical
        >
          <div className="v-item">Carousel 1</div>
          <div className="v-item">Carousel 2</div>
          <div className="v-item">Carousel 3</div>
        </Carousel>
      </WingBlank>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
````css
.my-carousel {
  background: #fff;
}
.my-carousel a {
  display: inline-block;
  width: 100%;
  margin: 0; padding: 0;
}
.my-carousel a img {
  width: 100%;
  vertical-align: top;
}
.my-carousel .v-item {
  height: 0.72rem;
  line-height: 0.72rem;
  padding-left: 0.2rem;
}
.sub-title {
  color: #888;
  font-size: .28rem;
  padding: 30px 0 18px 0;
}
````
