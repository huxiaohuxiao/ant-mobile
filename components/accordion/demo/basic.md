---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

Accordion

````jsx
import { Accordion, List } from 'antd-mobile';

class AccordionExmple extends React.Component {
  onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header="Title 1">
            <List className="my-list">
              <List.Item>Content 1</List.Item>
              <List.Item>Content 2</List.Item>
              <List.Item>Content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3" className="pad">
            Text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

ReactDOM.render(<AccordionExmple />, mountNode);
````
````css
.my-accordion .pad .am-accordion-content-box {
  padding: 0.2rem;
}
.my-accordion .my-list .am-list-body {
  border-top: 0;
}
.my-accordion .my-list .am-list-body:after {
  border-bottom: 0;
}
````
