import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

import { CheckIcon } from '../Icon'
import Image from '../Image'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt='avatar' />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <CheckIcon className={cx('check')} />}
                </p>
                <p className={cx('username')}>{data.nickname}</p>
            </div>
        </Link>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object,
}

export default AccountItem
