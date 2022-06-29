import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function MenuItem({ data }) {
    return (
        <Button large className={cx('menu-item')} style={{ border: 'none' }} text to={data.to}>
            {data.icon}
            {data.title}
        </Button>
    )
}

export default MenuItem
