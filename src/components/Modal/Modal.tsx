import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Modal.module.css';

type ModalProps = {
    status: number;
}

const Modal: React.FC<ModalProps> = ({ status }) => {

    const [log, setLog] = React.useState<string>('');
    const [pass, setPass] = React.useState<string>('');

    if (status === 1) {
        return (
            <div className={styles.modal}>
                <p>Вы проинрали</p>
                <Link to='/'>Домой</Link>
            </div>
        );
    }
    if (status === 2) {
        return (
            <>
                <div className={styles.gray}></div>
                <div className={styles.wrapper}>
                    <div className={styles.modal}>
                        <p>Победа!</p>
                        <p>введиле логин и пароль</p>
                        
                            <div>
                                <input onChange={e => setLog(e.target.value)} value={log} type="text" name="login" />
                            </div>
                            <div>
                                <input onChange={e => setPass(e.target.value)} value={pass} type="password" name="password" />
                            </div>
                            <button>Сохранить</button>
                    </div>
                </div>
            </>
        );
    }
    return <div></div>
};

export default Modal;