import { observer } from 'mobx-react-lite';
import React from 'react';
import store from '../../../models/store/store';

import RenderCard from './RenderCard/RenderCard';
import Modal from '../../Modal';
import styles from './GameScreen.module.css';
import { Link } from 'react-router-dom';

const GameScreen: React.FC = () => {
    const { dataItems, updateData } = store;
    const update = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, x: number, y: number, click: boolean) => {

        let obj: any = {}
        if (e.type === 'click') {
            obj = { x, y, type: 'leftClick' };
        } else {
            obj = { x, y, type: 'rightClick' };
        }
        updateData(obj);
    }

    React.useEffect(() => {
        store.loadData(`{"complexity": "${store.value}"}`);
        // console.log('store.value', store.value);
    }, []);

    return (
        <div className={styles.component}>
            <div className={styles.full}>
                <div>
                    <Link className={styles.link} to="/">Вернуться домой</Link>
                    <Modal status={store.dataItems.gameStatus.value} />
                    <div className={styles.wrapper}>
                        <div className={styles.desck}>
                            {
                                dataItems.field.map((row, index) => {
                                    return <div className={styles.row} key={index}>
                                        {
                                            row.map((cell, inx) => {
                                                return (
                                                    <div
                                                        onContextMenu={(e) => update(e, inx, index, true)}
                                                        onClick={(e) => update(e, inx, index, true)}
                                                        className={styles.cell}
                                                    >
                                                        <RenderCard status={cell.cellStatus.value} value={cell.cellValue.value} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default observer(GameScreen);