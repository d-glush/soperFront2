import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../../models/store/store';

const StartScreen: React.FC = () => {
    const setArray = () => {
        store.loadData('{"complexity": "easy"}');
    }
    return (
        <div>
            <h1>Стартовый экран</h1>
            <form>
                <select>
                    <option>Лёгкий</option>
                    <option>Средний</option>
                    <option>Сложный</option>
                </select>
            </form>

            <button onClick={setArray}>Сохранить настройки</button>
            <Link to="/game">Начать игру</Link>
        </div>
    );
};

export default observer(StartScreen);