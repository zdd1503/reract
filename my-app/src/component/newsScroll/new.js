import React from 'react';
class News extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div ref={'news-wrap'} style={{
                position: 'absolute',
                width: 300,
                height: 200,
                overflow: 'hidden',
                borderRadius: 5
            }}>
                <ul ref={'newsList'} style={{
                    position: 'absolute',
                    left: 0,
                    zIndex: 9,
                    display: 'flex',
                    transition: 'left 1s',
                    textAlign: 'center',
                }}>
                    <li style={{ width: 300, height: 200, background: 'yellow' }}>马云</li>
                    <li style={{ width: 300, height: 200, background: 'pink' }}>马化腾</li>
                    <li style={{ width: 300, height: 200, background: 'aqua' }}>李彦宏</li>
                    <li style={{ width: 300, height: 200, background: 'green' }}>任正非</li>
                    <li style={{ width: 300, height: 200, background: 'orange' }}>李嘉诚</li>
                </ul>
            </ div >
        )
    }

    refresh() {
        const me = this;
        me.num++;
        setTimeout(function () {
            me.refs.newsList.style.left = -me.num * 300 + 'px';
            me.refresh()
        }, 1000);
    }

    componentDidMount() {
        const me = this;
        me.num = 0;
        me.refresh();
    }
    componentDidUpdate() {

    }
}
export default News;