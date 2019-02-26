import React from 'react';
class TypeNew extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form>
        <input input type="text" placeholder="typing a newthing todo" autoComplete="off" />
      </form>
    )
  }
}
export default TypeNew;