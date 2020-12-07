

const createStore = () => {
    // 控制弹窗
    const [maskNumber, setMaskNumber] = useState(null)

    //  首先定义内置方法        
    const test4 = (n: number, p: number) => {
        return n + p
    }

    // 10是初始值，代表test4里的p参数  
    const [num, fun] = useReducer(test4, 10)

    return {
        maskNumber,
        setMaskNumber,
        num,
        fun
    }
}

export default createStore