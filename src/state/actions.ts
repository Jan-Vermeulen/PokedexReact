export const SET_LOCALE = 'SetLocale'
export const SET_SEARCH_TEXT = 'SetSearchText'

export function SetLocale(data: string) {
    return { type: SET_LOCALE, payload: data }
}

export function SetSearchText(data: string) {
    return { type: SET_SEARCH_TEXT, payload: data }
}
