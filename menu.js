let bold=document.querySelector(".bold");
let italic=document.querySelector(".italic");
let underline=document.querySelector(".underline");

bold.addEventListener("click",function(){
 setFontFamily("bold",bold);
})

italic.addEventListener("click",function(){
 setFontFamily("italic",italic);
})
underline.addEventListener("click",function(){
 setFontFamily("underline",underline);
})

function setFontFamily(styleName,element){
    if(lastSelectedCell){
      let {rowId,colId}=getRowIdColIdFromElement(lastSelectedCell);
      let cellObj=db[rowId][colId];
      if(cellObj.fontStyle[styleName])
       {
          if(styleName=="bold")
             lastSelectedCell.style.fontWeight= "normal";
          else if(styleName=="italic")
             lastSelectedCell.style.fontStyle="normal";
           else 
              lastSelectedCell.style.textDecoration="none";

         element.classList.remove("active-font-style");   
       } 
       else{
          if(styleName=="bold")
            lastSelectedCell.style.fontWeight= "bold";
          else if(styleName=="italic")
            lastSelectedCell.style.fontStyle="italic";
          else 
            lastSelectedCell.style.textDecoration="underline";
       
        element.classList.add("active-font-style");
       }
       cellObj.fontStyle[styleName]=!cellObj.fontStyle[styleName];
    }

}