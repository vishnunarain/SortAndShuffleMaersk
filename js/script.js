        const shuffleButton = document.getElementsByClassName("action-button")[0];
        const sortButton    = document.getElementsByClassName("action-button")[1];
        let cardFaces     =[...document.getElementsByClassName("card")];
        shuffleButton.addEventListener("click",()=>{
            cardFaces.shuffle();
            render()
        
        });
        sortButton.addEventListener("click",()=>{
            cardFaces.sort(function(a,b){return a.innerHTML-b.innerHTML;})
            render();
        });
        
        Array.prototype.shuffle = function(){
            let isShuffled = false;
            do{
                for(let i=0; i< this.length; i++){
                const j = Math.floor(Math.random()*(i+1));
                [this[i],this[j]] =[this[j],this[i]];
                }
                this.every((element,index)=>{
                    if(element.innerHTML != index){
                        isShuffled = true;
                        return false;
                    }
                    return true;
                });
            }while(!isShuffled);
        };
        
        const render = function(){
         cardFaces.forEach((element,index) =>{
             element.style.order = index;
         }
         )}
