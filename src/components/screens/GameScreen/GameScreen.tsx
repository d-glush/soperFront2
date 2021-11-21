import { observer } from 'mobx-react-lite';
import React from 'react';
import store from '../../../models/store/store';
import './GameScreen.css';
// import image1 from '../../../assets/image1'
const GameScreen: React.FC = () => {
    const { dataItems, updateData } = store;
    const update = (x: number, y: number, click: boolean) => {
        const obj = {
            x,
            y,
            type: 'leftClick',
        };
        updateData(obj);
    }

    return (
        <div>
            <h1>Экран с Игрой</h1>
            <div>
                {
                    dataItems.field.map((row, index) => {
                        return <div className='row' key={index}>
                            {
                                row.map((cell, inx) => {
                                    return (
                                        <div onClick={() => update(inx, index, true)} className='cell'>
                                            {cell.cellStatus.value ? cell.cellValue.value : ''}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default observer(GameScreen);