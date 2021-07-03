import React, { useState } from 'react';
import Gif from './Gif';
import ReactGiphySearchbox from "react-giphy-searchbox";

function TodoForm(props) {
  const [input, setInput] = useState('');
  const [butgif, Setbutgif] = useState(0);
  const [inputgif, Setinputgif] = useState('');





  const handleChange = e => {
    setInput(e.target.value);
    
  };
  const handleChangegif = (item)=> {
    Setinputgif(<img src={item.images.downsized.url} width="100px" />);
  
    

    
  };
    const handlesSubmit = e => {
      e.preventDefault();
    }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input )
    if(!input && !inputgif){
      return;
    }

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      gif: inputgif,
      
      
  

   
   
      
    });
    
    setInput('');
    Setinputgif('')
    Setbutgif(0)
   
  };



    


  return (
    <form onSubmit={handlesSubmit} className='todo-form'>
    
      
        <>
          <input
            placeholder='Add Text'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            
          />
                 

    
       <br/>
    
          <button onClick={() => Setbutgif(!butgif)} style={{marginTop:"20px"}} className='todo-button'>
            Gif
          </button>




          <div className={butgif?"searchboxWrapper":"searchboxWrappernot"}>
                <ReactGiphySearchbox
                  apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
                  onSelect={(item) =>handleChangegif(item)}
               
                  masonryConfig={[
                    { columns: 2, imageWidth: 110, gutter: 5 },
                    { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
                  ]}
                />
          </div>
          <img src={inputgif}/>
          <br/>



          <button style={{marginTop:"20px"}} onClick={handleSubmit} className='todo-button'>
            Add Comment
          </button> 
          </>
    </form>
  );
}

export default TodoForm;