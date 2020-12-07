import style from "./main.css"
import _fetch from '../../../utils/fetch'
import { storeContext } from '../../../utils/stroe'

import { Mask } from '../../../components'

const Main = () => {
    const store = useContext(storeContext)
    const { setMaskNumber } = store
    return (
        <>
            <div className={style.scrollView}>
                {/* something */}
                <div className={style.test1} onClick={() => { setMaskNumber(0) }}>123345</div>
            </div>
            <Mask>
                <div className={style.box}><div onClick={() => { setMaskNumber(null) }}>1</div></div>
                <div className={style.box}>2</div>
            </Mask>
        </>
    )
}

export default Main