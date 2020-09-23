import React, { Component } from 'react';
import { render } from 'react-dom';

class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    onScriptLoad() {
        const mapId = document.getElementById(this.props.id);
        const map = new window.google.maps.Map(mapId, this.props.options);
    }

    componentDidMount() {

        if (window.google) {
            this.onScriptLoad();
            return;
        }

        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `https://maps.google.com/maps/api/js?key=AIzaSyCe7Fd95UNLt5I0vbvO25a5HCoX6WExy3w`;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);

        s.addEventListener('load', e => {
            this.onScriptLoad()
        })
    }

    render() {
        return (
            <div style={{  }} id={this.props.id} />
        );
    }
}

export default GoogleMap