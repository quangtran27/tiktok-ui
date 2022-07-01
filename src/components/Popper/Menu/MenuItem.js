import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    return (
        <Button large className={cx('menu-item')} style={{ border: 'none' }} to={data.to} onClick={onClick}>
            {data.icon}
            {data.title}
        </Button>
    )
}

export default MenuItem
