import style from "./main.css"
import fetch from '../../../utils/fetch'
import { storeContext } from '../../../utils/stroe'

import { Mask } from '../../../components'

const Main = () => {
    const store = useContext(storeContext)
    const { setMask } = store
    return (
        <>
            <div className={style.scrollView}>
                {/* something */}
                <div className={style.coupon}>
                    <span>123</span>
                </div>
                <div onInput={(e: any) => { console.log(e.target.innerHTML) }}>
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