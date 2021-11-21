import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StartScreen: React.FC = () => {
    const getArray = async () => {

        axios.post('http://localhost/soper-api/game/start-new-game', {
            gameSettings: '{"complexity": "easy"}',
        },
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Request-Origin': '*',
                    "Content-Type": "text/html",
                },
            })
            .then(res => res.data)
            .then(data => {
                console.log(data);
            })
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
                <Link to="/game">Начать игру</Link>
                <button onClick={getArray}>получить</button>
        </div>
    );
};

export default StartScreen;