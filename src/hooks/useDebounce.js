function useDebounce(callbackFn , timer = 1000){
    let setTimeOutId;
    return (...args)=>{
        clearTimeout(setTimeOutId);
        setTimeOutId = setTimeout(()=>{
            callbackFn(...args);
        }, timer)
    }

}

export default useDebounce;