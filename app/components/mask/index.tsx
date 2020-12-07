import { storeContext } from '../../utils/stroe'
import style from './index.css'

interface prop {
    children: JSX.Element[] | JSX.Element
}

const Mask = (prop: prop) => {
    const { children } = prop
    const store = useContext(storeContext)
    const { maskNumber, setMaskNumber } = store
    const [dom, setDom] = useState(false)
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (typeof (maskNumber) === 'number') {
            setDom(true)
            setShow(true)
        } else {
            setShow(false)
        }
    }, [maskNumber])
    const _renderChildren = useCallback(() => {
        const arr: any = children
        if (arr.length) {
            return arr[maskNumber]
        } else {
            return children
        }
    }, [dom])
    const closeAnima = (e: any) => {
        if (e.animationName.indexOf('hide') !== -1) {
            setDom(false)
            setMaskNumber(null)
        }
    }
    return (
        <div className={dom ? 'block' : 'none'}>
            <div className={`${style.maskBg} ${show ? style.show : style.hide}`} onClick={() => { setShow(false) }} onAnimationEnd={(e) => { closeAnima(e) }}></div>
            <div className={`${style.mask} ${show ? style.big : style.small}`}>
                {_renderChildren()}
            </div>
        </div>
    )
}

export default Mask