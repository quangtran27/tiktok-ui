import * as request from '~/utils/httpsRequest'

export const search = async (q, type = 'less') => {
    try {
        const response = await request.get('users/search', {
            params: {
                q,
                type,
            },
        })
        return response.data
    } catch (error) {
        console.log('error in search api: ', error)
    }
}
