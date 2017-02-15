import React from 'react';

import TopBar from './top-bar';
import LeftMenu from './left-menu';

class Template extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="app">
                <TopBar />
                <div className="main">
                    <LeftMenu />
                    <div className="body">
                        <div className="title">title</div>
                        <div className="content">
                            { this.props.children }
                        </div>
                        <div className="footer">footer</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Template;