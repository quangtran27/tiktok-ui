import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import {
    EnglishIcon,
    GetCoinsIcon,
    InboxIcon,
    KeyboardIcon,
    LogoutIcon,
    MenuIcon,
    MessageIcon,
    PlusIcon,
    ProfileIcon,
    QuestionIcon,
    SettingIcon,
} from '~/components/Icon'
import Button from '~/components/Button'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Menu from '~/components/Popper/Menu'
import { Link } from 'react-router-dom'
import Search from '../Search'

const cx = classNames.bind(styles)

const menuItems = [
    {
        icon: <EnglishIcon />,
        title: 'English',
        subMenuItems: {
            title: 'Language',
            data: [
                {
                    title: 'English',
                    value: 'en',
                },
                {
                    title: 'Tiếng Việt',
                    value: 'vi',
                },
                {
                    title: '日本',
                    value: 'jp',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
]

const userMenuItems = [
    {
        icon: <ProfileIcon />,
        title: 'View Profile',
        to: '/feedback',
    },
    {
        icon: <GetCoinsIcon />,
        title: 'Get Coins',
        to: '/feedback',
    },
    {
        icon: <SettingIcon />,
        title: 'Settings',
        to: '/feedback',
    },
    ...menuItems,
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/feedback',
    },
]

const isAuthenticated = true

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('main-logo')} to='/'>
                    <img src={images.logo} alt='TikTok' />
                </Link>
                <Search />

                <div className={cx('actions')}>
                    {isAuthenticated ? (
                        <>
                            <Button>
                                <PlusIcon style={{ marginRight: 8 }} />
                                Upload
                            </Button>
                            <Tippy content='Message' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content='Inbox' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>31</span>
                                </button>
                            </Tippy>
                            <Menu items={userMenuItems}>
                                <img
                                    className={cx('avatar')}
                                    src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/9e05bfce01aec386ad106a70004c2ee8.jpeg?x-expires=1656687600&x-signature=P%2B0ZTuDHSZVONL3AXmfnkMBg3dI%3D'
                                    alt='ehehe'
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button>
                                <PlusIcon style={{ marginRight: 8 }} />
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                            <Menu items={menuItems}>
                                <button className={cx('more-btn')}>
                                    <MenuIcon />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
