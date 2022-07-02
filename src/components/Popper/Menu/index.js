import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import { Wrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import styles from './Menu.module.scss'
import Header from './Header'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Menu({ children, items = [], hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const hasSubMenu = !!item.subMenuItems

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (hasSubMenu) {
                            setHistory((prev) => [...prev, item.subMenuItems])
                        }
                    }}
                />
            )
        })
    }

    return (
        <Tippy
            delay={[300, 200]}
            hideOnClick={hideOnClick}
            interactive
            placement='bottom-end'
            render={(attrs) => (
                <div className={cx('menu')} tabIndex='-1' {...attrs}>
                    <Wrapper>
                        {history.length > 1 && (
                            <Header
                                title='Language'
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1))
                                }}
                            />
                        )}
                        <div className={cx('menu-items-wrapper')}>
                            <div className={cx('menu-items')}>{renderItems()}</div>
                        </div>
                    </Wrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1))
            }}
        >
            {children}
        </Tippy>
    )
}

export default Menu
