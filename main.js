var result=
`/*面试官，你好
*我是张杰
*面试一份前端工程师工作
*下面是我的简历
*/

*{transition:all 1s;}

html{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    border:2px solid red;
    padding:16px;
}
`

var n = 0
var id = setInterval(()=>{
    n+=1
    code.innerHTML=result.substring(0,n)
    styleTag.innerHTML=result.substring(0,n)

    if (n>=result.length){
        windows.clearInterval(id)
    }
},10)