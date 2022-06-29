import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://nguoinoitieng.tv/images/nnt/96/2/bbcu.jpg' alt='avatar' />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Trần Văn Quảng</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <p className={cx('username')}>quangtv2702</p>
            </div>
        </div>
    )
}

export default AccountItem
