---
order: 4
title:
  zh-CN: '索引列表（标题吸顶）'
  en-US: 'Index List (Title position top)'
---

sticky index List


````jsx
import { province as provinceData } from 'antd-mobile-demo-data';
import { ListView, List, SearchBar } from 'antd-mobile';

const { Item } = List;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.createDs = (ds, province) => {
      const dataBlob = {};
      const sectionIDs = [];
      const rowIDs = [];
      Object.keys(province).forEach((item, index) => {
        sectionIDs.push(item);
        dataBlob[item] = item;
        rowIDs[index] = [];

        province[item].forEach((jj) => {
          rowIDs[index].push(jj.value);
          dataBlob[jj.value] = jj.label;
        });
      });
      return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
    };
    this.state = {
      inputValue: '',
      dataSource: this.createDs(dataSource, provinceData),
      headerPressCount: 0,
    };
  }

  onSearch = (val) => {
    const pd = { ...provinceData };
    Object.keys(pd).forEach((item) => {
      pd[item] = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1);
    });
    this.setState({
      inputValue: val,
      dataSource: this.createDs(this.state.dataSource, pd),
    });
  }

  render() {
    return (<div style={{ paddingTop: '0.88rem', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
        <SearchBar
          value={this.state.inputValue}
          placeholder="Search"
          onChange={this.onSearch}
          onClear={() => { console.log('onClear'); }}
          onCancel={() => { console.log('onCancel'); }}
        />
      </div>
      <ListView.IndexedList
        dataSource={this.state.dataSource}
        renderHeader={() => <span>custom header</span>}
        renderFooter={() => <span>custom footer</span>}
        renderSectionHeader={sectionData => (<div className="ih">{sectionData}</div>)}
        renderRow={rowData => (<Item>{rowData}</Item>)}
        className="am-list"
        stickyHeader
        stickyProps={{
          stickyStyle: { zIndex: 999 },
        }}
        quickSearchBarStyle={{
          top: 85,
        }}
        delayTime={10}
        delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>rendering...</div>}
      />
    </div>);
  }
}

ReactDOM.render(<Demo />, mountNode);
````
