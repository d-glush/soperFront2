import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tables, TopTableCol } from '../../../models/store';
import store from '../../../models/store/store';
import styles from './TableScreen.module.css'

const getFormattedGameTime = function (gameTime: number): string {
    let formattedGameTime = '';
    formattedGameTime = Math.floor(gameTime / 1000) + '.' + Math.floor(gameTime % 1000 / 100) + Math.floor(gameTime % 100 / 10) + (gameTime % 10)
    return formattedGameTime;
}

const TableScreen: React.FC = () => {

    const { tables } = store;

    const [value, setValue] = React.useState<string>('Средний');
    const [arr, setArr] = React.useState<Array<TopTableCol>>(tables.topMedium);
    const changeValue = (val: string) => {
        setValue(val);
        if (val === 'Лёгкий') {
            setArr(tables.topEasy)
        }
        if (val === 'Средний') {
            setArr(tables.topMedium)
        }
        if (val === 'Сложный') {
            setArr(tables.topHard)
        }
    }

    return (
        <div className={styles.component}>
            <div className={styles.full}>
                <Link className={styles.link} to="/">Вернуться домой</Link>
                <table className={styles.TableList}>
                    {/* <caption><h2>Результат</h2></caption> */}
                    <thead>
                        <tr>
                            <th>Место</th>
                            <th>Сложность</th>
                            <th>Время, сек</th>
                            <th>Название</th>
                            <th>кол-во нажатий</th>
                            <th>Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr key={Date.now()}>
                                <td>{tables.me.position}</td>
                                <td>{tables.me.complexity}</td>
                                <td>{tables.me.gameTime / 1000}</td>
                                <td>{tables.me.login}</td>
                                <td>{tables.me.stepsCount}</td>
                                <td>{tables.me.date}</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <table className={styles.TableList}>
                    {/* <caption><h2>Топ</h2></caption> */}
                    <thead>
                        <select className={styles.select} value={value} onChange={e => changeValue(e.target.value)}>
                            <option>Лёгкий</option>
                            <option>Средний</option>
                            <option>Сложный</option>
                        </select>
                        <tr key={Date.now()}>
                            <th>Место</th>
                            <th>Сложность</th>
                            <th>Время, сек</th>
                            <th>Название</th>
                            <th>кол-во нажатий</th>
                            <th>Дата</th>
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
                arr.map((col, ind) => (
                    <tr>
                        <td>{ind + 1}</td>
                        <td>{col.complexity}</td>
                        <td>{getFormattedGameTime(col.gameTime)}</td>
                        <td>{col.login}</td>
                        <td>{col.stepsCount}</td>
                        <td>{col.date}</td>
                    </tr>
                ))
            }
        </tbody>
    );
}

export default TableScreen;