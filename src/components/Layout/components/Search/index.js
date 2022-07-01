import { useEffect, useRef, useState } from 'react'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icon'
import AccountItem from '~/components/AccountItem'
import styles from './Search.module.scss'
import { useDebounce } from '~/hooks'
import * as searchServices from '~/apiServices/search'

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    const debounced = useDebounce(searchValue, 500)

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return
        }

        const fetchApi = async () => {
            setLoading(true)
            const response = await searchServices.search(debounced)
            setSearchResult(response)
            setLoading(false)
        }

        fetchApi()
    }, [debounced])

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        <h5 className={cx('search-title')}>Accounts</h5>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    type='text'
                    placeholder='Search accounts and videos'
                    spellCheck='false'
                    onChange={(e) => {
                        if (e.target.value[0] !== ' ') {
                            setSearchValue(e.target.value)
                        }
                    }}
                    onFocus={() => {
                        setShowResult(true)
                    }}
                    value={searchValue}
                />
                {!loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('')
                            inputRef.current.focus()
                        }}
                    >
                        <ClearIcon />
                    </button>
                )}

                {loading && (
                    <button className={cx('loading')}>
                        <LoadingIcon />
                    </button>
                )}
                <span className={cx('splitter')}></span>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    )
}

export default Search
