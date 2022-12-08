// Assignment No 1 --- 

function App(){
    function FocusEventHandler(){
        document.getElementsByClassName('important').style.cssText='height:70px; width:70px; background-color:#e0e; display:block; margin-left:auto; margin-right:auto;'

    }
    return(
        <div className="App">
            <div id='john'>
                <label>Name</label>
                <input id ='name' onfocus={FocusEventHandler} style={{margin:'0.5em'}}></input>
                <h1>Shape</h1>
                <div className="important"></div>
            </div>
        </div>
    )
}

// I just write a functionality for given scenario not attached any type of html and css files .
        
                                     // THANKS //