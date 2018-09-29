
import React from 'react';
import './TodoApp.css';
import { Button } from '../../button/button';
import { List } from '../../list/list';



export class TodoApp extends React.Component{
    constructor(){
        super();
        this.state = {
            textInput:"",
            list:[],
            editmode:false,
            
        };
       
    }

    
    
    changUserInput(input){
        this.setState({
            textInput:input
        })
       
    }

    addToList(input,event){
        event.preventDefault();
        var listArray = this.state.list;
        listArray.push(input);

        this.setState({
            list:listArray,
            textInput:" "
        })
        // localStorage.setItem(this.statelist,JSON.stringify(listArray));
    }

    
 saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }


  
hydrateStateWithLocalStorage() {//???
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }


  componentDidMount() {//??
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
}


componentWillUnmount() {//???
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
}



    handleRemove(item,event){
        event.preventDefault();
      this.setState({
         list:this.state.list.filter(loopitem =>{
           return loopitem !== item  
           })                       
      })
}



    edit(event){
        var editStyle={};
       event.preventDefault();     
        this.setState({ 
          editmode:!this.state.editmode
        })   

    }



    handleEdit(inputUpdate,event){//??????????????????????????????????????
        event.preventDefault();    
        this.setState({
            textInput: inputUpdate
        }) 
    }

  
    update(i,value,UpdateButton,event){
        event.preventDefault();
         var listUpdate = this.state.list;
            value=UpdateButton;
            listUpdate[i]=value;
         this.setState({
             list:listUpdate
         })
     console.log(value); 
    }
    


    render(){ 
        
        var editStyle=[];
        if(!this.state.editmode){
            editStyle.display = "none";
        }
         else {
            editStyle.display="block";          
        } 
      
        return(
            <div>
                <p>TO DO APP REACT-JS</p>
                <input type="text" value={this.props.textInput} placeholder="Type here"
                onChange={(e) => this.changUserInput(e.target.value)}/>

                <Button  onClick={(event) => this.addToList(this.state.textInput,event)}>
                    Add
                </Button>
               
               <List >
                  
                    {this.state.list.map((value,i)=> <li  key={i}>
                    <div>
                    {value}
                    <a href="" onClick={(event)=> this.handleRemove(value,event)}>---Delete---</a> 
                    <a href="" onClick={(event) => this.edit(event)}>---Edit---</a> 
                    <a href="" onClick={(event) => this.update(i,value,this.state.textInput,event)}>---Update---</a> 
                    </div>

                    <input type="text" style={editStyle}
                     value={this.props.changeText}
                     onChange={(event)=>this.handleEdit(event.target.value,event)}/>

                    </li>)}
                    
               </List>
            </div>
        )
    }
}