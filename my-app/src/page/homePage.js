import React from 'react';
import Dialog from '../component/dialog/Dialog';
import ToggleButton from '../component/toggleButton/button';
import Path from '../component/d3-path/path';
import Redux from '../component/redux/toodolist';
import Polgon from '../component/d3-path/polygon';
class HomePage extends React.Component {
  constructor(props) {
    super(props)

  }
  warnClick() {
    let me = this;
    me.refs.dialogRef.show();
  }
  tabClick(e) {
    console.log(e)
  }
  render() {
    return (
      <div style={{
        position: "absolute",
        left: 43,
        top: 60
      }}>
        <button onClick={this.warnClick.bind(this)}>点击我</button>
        <Dialog width={457} height={210} left={69} top={30} ref={'dialogRef'}>
        </Dialog>
        <ToggleButton clicks={this.tabClick.bind(this)} />
        <Path />
        <Redux />
        {/* <News /> */}
        <Polgon />
      </div>
    )
  }
}
export default HomePage;