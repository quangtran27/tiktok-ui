import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    children,
    className,
    disabled = false,
    href,
    large,
    outline = false,
    primary = false,
    rounded = false,
    small,
    to,
    ...props
}) {
    let Component = 'button'

    // Remove events when disabled
    if (disabled) {
        if (props.onClick) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key]
                }
            })
        }
    }

    if (to) {
        props.to = to
        Component = Link
    } else if (href) {
        props.href = href
        Component = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        disabled,
        outline,
        primary,
        rounded,
        small,
        large,
    })
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button
