import React from 'react';
import Dialog from '../component/dialog/Dialog';
import ToggleButton from '../component/toggleButton/button';
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
      </div>
    )
  }
}
export default HomePage;