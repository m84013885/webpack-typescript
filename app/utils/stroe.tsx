import CreateStore from './createStore'

export const storeContext = React.createContext(null)

export const StoreProvider = (porps: { children: any }): any => {
    const { children } = porps
    const store = CreateStore()
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = (): any => {
    const store = React.useContext(storeContext)
    if (!store) {
        // this is especially useful in TypeScript so you don't need to be checking for null all the time
        throw new Error('You have forgot to use StoreProvider, shame on you.')
    }
    return store
}
