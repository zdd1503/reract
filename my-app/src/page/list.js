import React from 'react';
import Cesium from '../component/cesium/cesium';
class List extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Cesium />
      </div>
    )
  }
}
export default List;