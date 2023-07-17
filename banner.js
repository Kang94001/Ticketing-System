    const titles = document.querySelectorAll('.titles a') //標題集合
    const imgs = document.querySelectorAll('.imgs a') //圖片集合
    let curIndex = 0, timer = null //當前Banner下標，定時器

    //移除active樣式
    function removeActive(){
        titles.forEach(item=>{
            item.classList.remove('active')
        })
        imgs.forEach(item=>{
            item.classList.remove('active')
        })
    }

    //切換Banner
    function changeBanner(index){
        removeActive()
        titles[index].classList.add('active')
        imgs[index].classList.add('active')
    }

    //自動播放Banner
    function autoBanner() {
        timer=setInterval(function(){
            curIndex++
            if(curIndex > titles.length-1){
                curIndex=0
            }
            changeBanner(curIndex)
        },3000)
    }

    //綁定鼠標事件
    titles.forEach((item,index)=>{
        //鼠標移入事件
        item.addEventListener('mouseenter', function(){
            curIndex=index
            changeBanner(index)
            clearInterval(timer)
        })
        //鼠標移出事件
        item.addEventListener('mouseleave',function(){
            autoBanner()
        })
    })

//初始化自動播放Banner
autoBanner()