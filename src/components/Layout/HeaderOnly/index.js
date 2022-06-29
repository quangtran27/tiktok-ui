import Header from './Header'

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className='container ahihi'>
                <div className='content '>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout
