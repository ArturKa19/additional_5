module.exports = function check(str, bracketsConfig) {
    let flag = true;
    let stack = [str[0]];

    for(let i = 1; i < str.length; i++){
        for(let arr of bracketsConfig){
            if(str[i] == arr[0] && arr[0] == arr[1]){
                if(stack.length == 0)
                    stack.push(str[i]);
                else if(stack[stack.length -1] == arr[0])
                    stack.pop();
                else
                    stack.push(str[i]);
            }
            else if(str[i] == arr[0])
                stack.push(str[i]);
            else if(str[i] == arr[1]){
                if(stack.length == 0)
                    flag = false;
                else if(stack[stack.length-1] == arr[0])
                    stack.pop();
                else
                    flag = false;
            }
        }
    }
    if(stack.length!=0)
        flag = false;
    return flag;
}

