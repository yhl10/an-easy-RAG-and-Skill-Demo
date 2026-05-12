export const callTextAdd = (str1, str2) => {
    if(typeof str1 !== 'string' && str2 !== 'string') {
        throw Error('invalid parameter type')
    }else {
        return `${str1}-YHL_TEST_NORMAL_CALCULATE-${str2}`
    }
}