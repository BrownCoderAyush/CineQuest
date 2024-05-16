/*
https://medium.com/@gabrielmickey28/using-debounce-with-react-components-f988c28f52c1
*/

function useDebounce(callbackFn , timer = 1000){
    let setTimeOutId;
    // rest parameter(...agrs)
    return (...args)=>{
        clearTimeout(setTimeOutId);
        setTimeOutId = setTimeout(()=>{
            callbackFn(...args);
        }, timer)
    }

}

export default useDebounce;