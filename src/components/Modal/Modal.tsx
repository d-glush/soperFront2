import { observer } from 'mobx-react-lite';
import React from 'react';

import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import store from '../../models/store/store';
import styles from './Modal.module.css';

type ModalProps = {
    status: number;
}

const Modal: React.FC<ModalProps> = ({ status }) => {
    const { path } = useRouteMatch();
    const history = useHistory();
    console.log(path);

    const [log, setLog] = React.useState<string>('');
    const [pass, setPass] = React.useState<string>('');

    const submit = async () => {
        await store.setLoginStatus({
            login: log,
            password: pass,
        });
        console.log('store.loginStatus', store.loginStatus);
        if (store.loginStatus !== 401) {
            await store.loadTable();
            await history.push('/table');
        }
    }

    if (status === 2) {
        return (
            <>
                <div className={styles.gray}></div>
                <div className={styles.wrapper}>
                    <div className={styles.wrapper}>
                        <div className={styles.modal}>
                            <p>Вы проиграли</p>
                            <Link className={styles.button} to='/'>Домой</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    if (status === 1) {
        return (
            <>
                <div className={styles.gray}></div>
                <div className={styles.wrapper}>
                    <div className={styles.modal}>
                        <p>Победа!</p>
                        <p>введиле логин и пароль</p>

                        <div>
                            <input className={styles.input} onChange={e => setLog(e.target.value)} value={log} type="text" name="login" />
                        </div>
                        <div>
                            <input className={styles.input} onChange={e => setPass(e.target.value)} value={pass} type="password" name="password" />
                        </div>
                        <button className={styles.button} onClick={submit}>Сохранить</button>
                    </div>
                </div>
            </>
        );
    }
    return <div></div>
};

export default observer(Modal);