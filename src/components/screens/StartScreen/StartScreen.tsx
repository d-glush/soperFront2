import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import store from '../../../models/store/store';
import styles from './StartScreen.module.css';

const StartScreen: React.FC = () => {
    const changeValue = (value: string) => {
        store.updateValue(value);
    }
    useEffect(() => {
        store.updateValue('Лёгкий');
    }, [])
    return (
        <div className={styles.component}>
            <div className={styles.full}>
                <div className={styles.window}>
                    <p>Выберите уроветь сложрости</p>
                    <form>
                        <select className={styles.select} onChange={e => changeValue(e.target.value)}>
                            <option>Лёгкий</option>
                            <option>Средний</option>
                            <option>Сложный</option>
                        </select>
                        <Link className={styles.btnPlay} to="/game">Начать игру</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default observer(StartScreen);