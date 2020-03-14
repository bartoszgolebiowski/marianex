export type GlobalState = {
    selectedMenuItem: string,
    setSelectedMenuItem: Function
}

export const defaultValue: GlobalState = {
    selectedMenuItem: '',
    setSelectedMenuItem: () => { },
}
