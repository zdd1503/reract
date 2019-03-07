import React from 'react';
import './typenew.css';
class TypeNew extends React.Component {
  constructor(props) {
    super(props)
  }
  click() {
    const me = this;
    let txt = me.refs.txt;
    let oul = me.refs.oul;
    if (txt.value == '') {
      return false;
    }
    let newLi = document.createElement('li');
    newLi.innerHTML = txt.value + "<a href='#'>删除</a> ";
    oul.appendChild(newLi);
    // let lis = oul.childNodes;
    // console.log(lis)

  }
  render() {
    return (
      <div id="box" className="bos">
        <textarea name="" ref="txt" cols="30" rows="10"></textarea>
        <button id='button' ref='btn' onClick={this.click.bind(this)}>submit</button>
        <ul ref='oul'></ul>
      </div>
    )
  }
  componentDidMount() {
    const me = this;
    let txt = me.refs.txt;
    let oul = me.refs.oul;

  }
}
export default TypeNew;