window.onload=function () {
    /*
    * 1、就位
    * 2、平移
    * 3、current=next
    * */
    let list=document.querySelectorAll(".list");
    let btns=document.querySelectorAll(".btns li");
    let banner=document.querySelector(".banner");
    let widths=parseInt(getComputedStyle(banner,null).width);
    let current=next=0;
    let BtnL=document.querySelector(".BtnL");
    let BtnR=document.querySelector(".BtnR");
    let flag=true;

    /*let t=setInterval(move,2000);
    banner.onmouseenter=function () {
       clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    }*/
    BtnR.onclick=function () {
        if(flag==false){
            return;
        }
        if(next==list.length-1){
            return;
        }
        flag=false;
        move();
    }
    BtnL.onclick=function () {
        if(flag==false){
            return;
        }
        if(next==0){
            return;
        }

        flag=false;
        moveL();
    }
    
    //右-》左
    /*
    * 1、next   1226px
    * 2、current  0->-1226
    *    next    1226->0
    * 3、current=next
    * */
    
    function move() {
        next++;
        if(next==list.length){
            next=0;
        }
        list[next].style.left=`${widths}px`;
        animate (list[current],{left:-widths});
        animate(list[next],{left:0},function () {
            flag=true;
        })
        btns[current].classList.remove("hot");
        btns[next].classList.add("hot");
        current=next;
    }

    //左-》右
    /*
    * 1、next  -1226
    * 2、current  0->1226
    *    next -1226->0
    * 3、current=next
    * */
    function moveL() {
        next--;
        if(next==-1){
            next=list.length-1;
        }
        list[next].style.left=`-${widths}px`;

        animate(list[current],{left:widths});
        animate(list[next],{left:0},function () {
            flag=true;
        });
        btns[current].classList.remove("hot");
        btns[next].classList.add("hot");
        current=next;
    }

//    小点点击
    for(let i=0;i<btns.length;i++){
        btns[i].onclick=function () {
            if(current==i){
                return;
            }else if(current<i){
                list[i].style.left=`${widths}px`;
                animate(list[current],{left:-widths});
                animate(list[i],{left:0});
                btns[current].classList.remove("hot");
                btns[i].classList.add("hot");
            }else if(current>i){
                list[i].style.left=`${-widths}px`;
                animate(list[current],{left:widths});
                animate(list[i],{left:0});
                btns[current].classList.remove("hot");
                btns[i].classList.add("hot");
            }
            next=current=i;
        }
    }



    ////////////////////////////////////////////////////
    let button=document.querySelectorAll("button");
    let miList=document.querySelector(".miList");
    let w=parseInt(getComputedStyle(miList,null).width)/3;
    let times=0;

    button[0].onclick=function(){
        times++;
        if(times==3){
            times=2;
        }
        console.log(times);
        miList.style.transform=`translate(${(-w*times)}px)`;
    }

    button[1].onclick=function(){
        times--;
        if(times==-1){
            times=0;
        }
        console.log(times);
        miList.style.transform=`translate(${(-w*times)}px)`;
    }

}