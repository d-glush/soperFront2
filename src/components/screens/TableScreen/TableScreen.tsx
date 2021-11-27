import React from 'react';
import { Link } from 'react-router-dom';
import { Tables } from '../../../models/store';
import styles from './TableScreen.module.css'

const TableScreen: React.FC = () => {

    const hardObj: Tables = {
        top: [
            {
                login: "myLogin",
                complexity: "hard",
                date: "13/08/2000 12:48:23",
                gameTime: 123123123,
                stepsCount: 48
            },
            {
                login: "myLogin",
                complexity: "hard",
                date: "13/08/2000 12:48:23",
                gameTime: 123123123,
                stepsCount: 48
            },
            {
                login: "myLogin",
                complexity: "hard",
                date: "13/08/2000 12:48:23",
                gameTime: 123123123,
                stepsCount: 48
            },
            {
                login: "myLogin",
                complexity: "hard",
                date: "13/08/2000 12:48:23",
                gameTime: 123123123,
                stepsCount: 48
            },
        ],
        me: {
            login: "myLogin",
            complexity: "hard",
            date: "13/08/2000 12:48:23",
            gameTime: 123123123,
            stepsCount: 48,
            topPlace: 1234
        },
    }


    return (
        <div className={styles.component}>
            <div className={styles.full}>
            <Link className={styles.link} to="/">Вернуться домой</Link>
            <table className={styles.TableList}>
                <caption><h2>Результат</h2></caption>
                <thead>
                    <tr>
                        <th>complexity</th>
                        <th>date</th>
                        <th>gameTime</th>
                        <th>login</th>
                        <th>stepsCount</th>
                        <th>dnjwejwd</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr key={Date.now()}>
                            <td>{hardObj.me.complexity}</td>
                            <td>{hardObj.me.date}</td>
                            <td>{hardObj.me.gameTime}</td>
                            <td>{hardObj.me.login}</td>
                            <td>{hardObj.me.stepsCount}</td>
                            <td>{hardObj.me.topPlace}</td>
                        </tr>
                    }
                </tbody>
            </table>
            <table className={styles.TableList}>
                <caption><h2>Топ</h2></caption>
                <thead>
                    <tr>
                        <th>complexity</th>
                        <th>date</th>
                        <th>gameTime</th>
                        <th>login</th>
                        <th>stepsCount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hardObj.top.map((col) => (
                            <tr key={Date.now()}>
                                <td>{col.complexity}</td>
                                <td>{col.date}</td>
                                <td>{col.gameTime}</td>
                                <td>{col.login}</td>
                                <td>{col.stepsCount}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default TableScreen;