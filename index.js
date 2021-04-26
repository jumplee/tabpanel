function ele(str){
    return document.getElementById(str)
}
function queryByCls(str){
    return document.getElementsByClassName(str)
}

function uuid(){
    return (new Date()).getTime()+'_'+Math.ceil(1000*Math.random())
}

export function tabs(str,data,options){
    var main=ele(str)
    main.innerHTML=```
        <div class="x-tabs"></div>
        <div class="x-tabPanels"></div>
    ```
    
    data.forEach(tab=>{

    })
}