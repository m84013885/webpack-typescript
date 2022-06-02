import style from "./main.css"
// import fetch from '../../../utils/fetch'
import { storeContext } from '../../../utils/stroe'
import Mask from '../../../components/mask/index'
import { cloneDeep, cloneEz, deepCopy1, throttled, debounce } from '../../../utils/tool'
// import ww from '../assets/444.png'

const Main = () => {
    // 展示队列
    // const [dmList, setDmList] = useState([
    //     '展示队列1', '展示队列222', '222333333', '展示队列展示队列1', '展示队列567'
    // ])
    // 弹幕队列
    // const [showDmList, setShowDmList] = useState([])
    const store = useContext(storeContext)
    const [rtop, setRtop] = useState(0)
    const [videoDom, setVideoDom] = useState(null)
    const { setMask } = store;
    const test = (e: any) => {
        if (e) {
            e.addEventListener('scroll', (e: any) => {
                console.log(e)
                if (videoDom) {
                    const { top } = videoDom.getBoundingClientRect()
                    setRtop(top)
                }
                // videoDom
            })
        }
    }
    const video = (e: any) => {
        if (e) {
            const { top } = e.getBoundingClientRect()
            setRtop(top)
            setVideoDom(e)
        }
    }
    useEffect(() => {
        const obj: any = {
            un: undefined,
            nl: null,
            reg: new RegExp('123'), time: new Date(),
            map: new Map([
                ['baz', { a: 1 }]
            ]),
            set: new Set([{ a: 2 }, 2, 4, 6]),
            symbol: Symbol('www'),
            object: {
                mmap: new Map([[{ bb: 1 }, { map: new Map([['b', 5]]) }]]),
                // wmap: new WeakMap([[{ a: 1 }, { b: 2 }]])
            }
        }
        const obj1: any = cloneDeep(obj)
        // obj1.d.a = 2
        // obj1.d.c.a = 2
        // obj1.d.c.c = () => { console.log(2) }
        // obj1.d.e = new RegExp('1234')
        obj1.map.set('baz', 1)
        // obj1.c[3][1] = { a: 5 }
        console.log(obj.set)
        console.log(obj1)
        console.log(obj)
        console.log(JSON.parse(JSON.stringify(obj)))
        console.log(deepCopy1(obj))
        // console.log(objDeepClone(obj))
        console.log(cloneEz(obj))
        console.log(obj.reg === obj1.reg)
        console.log(obj.time === obj1.time)
        console.log(obj.map === obj1.map)
        console.log(obj.map.get('baz') === obj1.map.get('baz'))
        console.log(obj.set === obj1.set)
        console.log(obj.set.values().next().value === obj1.set.values().next().value)
        console.log(obj.symbol === obj1.symbol)
        console.log(obj.un === obj1.un)
        console.log(obj.nl === obj1.nl)
        console.log(obj1.set === obj.set)
    }, [])
    const testw = () => {
        // const a: any = 1
        const a = debounce((a: any) => {
            console.log(a)
            console.log(1)
        }, 2000, true)
        a()
    }
    const testw1 = () => {
        // const a: any = 1
        const a = throttled((a: any) => {
            console.log(a)
            console.log(1)
        }, 2000)
        a()
    }
    useEffect(() => {
        // const newImg: any = document.getElementById('img')
        // newImg.src = ww
    }, [])
    return (
        <>
            <div ref={test} className={style.scrollView}>
                <img id="img" />
                <div className={style.testImage}></div>
                <div className={style.dmContent}>
                    <div className={style.dmMove}>展示队列</div>
                </div>
                <div className={style.dmInput}>
                    <input type="text" />
                    <button>发送</button>
                </div>
                <div onClick={() => { testw() }}>uioqwe</div>
                <div onClick={() => { testw1() }}>uioqwe</div>
                <div className={style.fixedBox} style={{ top: rtop }}>456</div>
                {/* something */}
                <div className={style.scrollContent} onClick={() => { setMask(0) }}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div ref={video} >模拟video</div>
                    <div>4</div>
                    <div>5</div>
                    {[Array(100).map((item) => {
                        return (
                            <div key={item}>6</div>
                        )
                    })]}
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