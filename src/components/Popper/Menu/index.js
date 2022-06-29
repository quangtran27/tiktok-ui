import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import { Wrapper } from '~/components/Popper'
import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>)
    }

    return (
        <Tippy
            delay={[300, 100]}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu')} tabIndex='-1' {...attrs}>
                    <Wrapper>{renderItems()}</Wrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
