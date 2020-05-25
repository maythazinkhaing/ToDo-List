
             function add(e){
                if(e.keyCode === 13){
                    var text = document.getElementById('textBox').value;
                   
                    if(text==''){
                    alert("Enter Some Lists!");
        
                    }
                    else {
                        var text = document.getElementById('textBox').value;
                       
                         var li = document.createElement("li");
                         li.onclick = function(){
                            this.style.textDecorationColor="black";
                            this.style.textDecorationLine = "line-through";
                            
                        }  
        
        
                         var span = document.createElement('span');
                         span.id="spanID";
                         span.onclick = function(){
                                this.parentElement.remove();
                            }
                        span.appendChild(document.createTextNode('x'));
                       
                        li.appendChild(span);
                         
                        li.appendChild(document.createTextNode(text));
                        
                        
        
                       document.getElementById("tasks").appendChild(li);
                       
                       
                    }
        
                    document.getElementById('textBox').value="";
                    
                    
        
                    
                    
                }
                     }        
                     