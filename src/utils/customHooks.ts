import { useEffect, useRef } from "react"

export const willMountEffect = (cb: any) => {
    const didMount = useRef(false) 
    useEffect(()=>{
        if(didMount.current)return
        cb()
        didMount.current = true
    }, [])
}