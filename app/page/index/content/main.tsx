import style from "./main.css"
// import fetch from '../../../utils/fetch'
import { storeContext } from '../../../utils/stroe'

import { Mask } from '../../../components'

const Main = () => {
    const store = useContext(storeContext)
    const { setMask } = store;
    return (
        <>
            <div className={style.scrollView}>
                {/* something */}
                <div onClick={() => { setMask(0) }}>123</div>
            </div>
            <Mask>
                <div className={style.box}><div onClick={() => { setMask(null) }}>1</div></div>
                <div className={style.box}>2</div>
            </Mask>
        </>
    )
}

export default Main