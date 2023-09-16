const ip=document.getElementById('ip')

const ans=document.getElementById('ans')


function add(){

    if(ip.value===" "){
        window.alert('cannot add empty TASK')

    }
    else{
    const val=document.createElement('div')
    val.setAttribute('class','val')
    p=document.createElement('p')
    p.innerHTML=ip.value
    val.addEventListener('click',()=>{
        val.classList.toggle('newstyle')
    })

    //-----------------------------------------------
    
   
    //-----------------------------------------------

    const remove_btn=document.createElement('i')
    remove_btn.innerHTML=`<i class="fa-solid fa-trash fa-2xl" style="color: #000000;"></i>`
    
    //remove_btn.setAttribute('onclick','remove()')
    remove_btn.addEventListener('click',()=>{
        
        //requestAnimationFrame(val.style.transform='skew(90deg,90deg)')
        val.style.display="none"
        
    })

     //-----------------------------------------------
    
    

    const ans=document.getElementById('ans')

    val.appendChild(p)
    
    val.appendChild(remove_btn)
    ip.value=" "
    ans.appendChild(val)
  


    }
    

    
    }








