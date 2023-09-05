console.log("vishal patar")
document.querySelector('.delete').style.display ='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.menus').style.display ='inline'
        document.querySelector('.delete').style.display ='none'
    }
    else{
        document.querySelector('.menus').style.display ='inline'
      setTimeout(() => {
        document.querySelector('.menus').style.display ='inline'
        document.querySelector('.delete').style.display ='inline'
      },380);
    }
})