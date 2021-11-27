import React from 'react';
import { Link } from 'react-router-dom';
import { Tables, TopTableCol } from '../../../models/store';
import styles from './TableScreen.module.css'

const TableScreen: React.FC = () => {

    const hardObj: Tables = {
        topEasy: [
            {
                id: 21,
                userId: 1,
                login: "admin",
                complexity: "easy",
                date: "2021-11-25 19:37:39",
                gameTime: 1025,
                stepsCount: 12,
            },
            {
                id: 31,
                userId: 1,
                login: "admin",
                complexity: "easy",
                date: "2021-11-27 11:32:55",
                gameTime: 22622,
                stepsCount: 17,
            },
        ],
        topMedium: [
            {
                id: 22,
                userId: 2,
                login: "root",
                complexity: "medium",
                date: "2021-11-25 19:02:04",
                gameTime:  3777,
                stepsCount: 22
            }
        ],
        topHard: [
            {
                id: 23,
                userId: 3,
                login: "myLogin",
                complexity: "hard",
                date: "2021-11-25 19:37:39",
                gameTime: 3121,
                stepsCount: 33,
            },
            {
                id: 25,
                userId: 1,
                login: "admin",
                complexity: "hard",
                date: "2021-11-25 19:37:39",
                gameTime: 33232,
                stepsCount: 322,
            },
            {
                id: 27,
                userId: 1,
                login: "admin",
                complexity: "hard",
                date: "2021-11-25 19:37:39",
                gameTime: 33232,
                stepsCount: 322,
            },
        ],
        me: {
            id: 30,
            userId: 13,
            login: "postman",
            complexity: "custom",
            date: "2021-11-27 11:14:04",
            gameTime: 2961,
            stepsCount: 1,
            position: 8
        }
    }
    
    const [value, setValue] = React.useState<string>('Средний');
    const [arr, setArr] = React.useState<Array<TopTableCol>>(hardObj.topMedium);
    const changeValue = (val: string) => {
        setValue(val);
        if (val === 'Лёгкий') {
            setArr(hardObj.topEasy)
        }
        if (val === 'Средний') {
            setArr(hardObj.topMedium)
        }
        if (val === 'Сложный') {
            setArr(hardObj.topHard)
        }
    }

    return (
        <div className={styles.component}>
            <div className={styles.full}>
                <Link className={styles.link} to="/">Вернуться домой</Link>
                <table className={styles.TableList}>
                    <caption><h2>Результат</h2></caption>
                    <thead>
                        <tr>
                            <th>Сложность</th>
                            <th>Дата</th>
                            <th>Время</th>
                            <th>Название</th>
                            <th>кол-во нажатий</th>
                            <th>Место</th>
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
                                <td>{hardObj.me.position}</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <table className={styles.TableList}>
                    <caption><h2>Топ</h2></caption>
                    <thead>
                        <select className={styles.select} value={value} onChange={e => changeValue(e.target.value)}>
                            <option>Лёгкий</option>
                            <option>Средний</option>
                            <option>Сложный</option>
                        </select>
                        <tr key={Date.now()}>
                            <th>Дата</th>
                            <th>Время</th>
                            <th>Название</th>
                            <th>кол-во нажатий</th>
                        </tr>
                    </thead>
                    <TableBody arr={arr} />
                </table>
            </div>
        </div>
    );
};

type TableBodyProps = {
    arr: Array<TopTableCol>;
}

const TableBody: React.FC<TableBodyProps> = ({ arr }) => {
    console.log(arr);
    return (

        <tbody>
            {
                arr.map((col) => (
                    <tr>
                        <td>{col.date}</td>
                        <td>{col.gameTime}</td>
                        <td>{col.login}</td>
                        <td>{col.stepsCount}</td>
                    </tr>
                ))
            }
        </tbody>
    );
}

export default TableScreen;