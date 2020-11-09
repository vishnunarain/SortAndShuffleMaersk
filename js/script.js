        /*
        Both Sort and Shuffle button
        Reference aquired to attach a click event
        */

        const shuffleButton = document.getElementsByClassName("action-button")[0];
        const sortButton    = document.getElementsByClassName("action-button")[1];

        // All the numbered cards acuquired as an array
        let cardFaces     =[...document.getElementsByClassName("card")];
        shuffleButton.addEventListener("click",()=>{
            //new function added to the Array prototype
            cardFaces.shuffle();
            render()
        
        });
        sortButton.addEventListener("click",()=>{
            cardFaces.sort(function(a,b){return a.innerHTML-b.innerHTML;})
            render();
        });

        /*Uses Modified Fisher Yates algorithm,
        The last every loopcheck nullifies the scenario where the random shuffled array is inherently sorted
        */
        
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
        
        //Function used to render elements on screen post re-arrangement
        const render = function(){
         cardFaces.forEach((element,index) =>{
             element.style.order = index;
         }
         )}
