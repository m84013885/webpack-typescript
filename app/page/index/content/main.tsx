import style from "./main.css"
import fetch from '../../../utils/fetch'
import { storeContext } from '../../../utils/stroe'

import { Mask } from '../../../components'

const Main = () => {
    const store = useContext(storeContext)
    const [arr, setArr] = useState(1)
    const [arr1, setArr1] = useState(1)
    // console.log(useState(5)[0])
    const { setMask } = store
    const test = useCallback(() => {
        setArr(arr1+1)
    }, [arr1])
    useEffect(() => {
        test()
    }, [test])
    return (
        <>
            <div className={style.qqq}></div>
            <div className={style.scrollView}>
                {/* something */}
                <div className={style.coupon}>
                    <span>{arr}</span>
                </div>
                <div onInput={(e: any) => { console.log(e.target.innerHTML) }} onClick={() => { setArr1(1) }}>
                    213
                </div>
                <div className={style.testImg}></div>
                <div className={style.test1} onClick={() => { setMask(0) }}>123345</div>
                <div className={style.content}>
                    <div className={style.boxs}></div>
                    <div className={`${style.boxm} border`}></div>
                    <div className={style.boxl}></div>
                    <div className={style.boxs}></div>
                </div>
            </div>
            <Mask>
                <div className={style.box}><div onClick={() => { setMask(null) }}>1</div></div>
                <div className={style.box}>2</div>
            </Mask>
        </>
    )
}

export default Main