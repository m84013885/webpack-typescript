

const createStore = () => {
    // 控制弹窗
    const [maskNumber, setMaskNumber] = useState(null)

    return {
        maskNumber,
        setMaskNumber,
    }
}

export default createStore