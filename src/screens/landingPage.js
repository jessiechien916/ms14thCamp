import React, {Component} from 'react';
import {Link} from 'react-router';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>安安打給後</h1>
                <ul>
                    <li>
                        <Link to="/lp">
                            <p>抽房間</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/lr">
                            <p>抽籤結果</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/mp">
                            <p>任務列表</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/map">
                            <p>地圖</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/monp">
                            <p>我的餘額</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/np">
                            <p>問問Npc</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ap">
                            <p>關於偉大的製作rd們</p>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LandingPage;
