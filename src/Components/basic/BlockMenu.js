import React, {Component} from 'react';

class BlockMenu extends Component {
    render() {
        return (
            <div className={'section'}>
                <div className={'container'}>
                    <h2 className={"block-menu-title"}>Our Categories</h2>
                    <div className={"block-menu"}>
                        <div className={'menu-block'}>1</div>
                        <div className={'menu-block'}>2</div>
                        <div className={'menu-block'}>3</div>
                        <div className={'menu-block'}>4</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlockMenu;