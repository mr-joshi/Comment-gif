import React ,{useState} from 'react'
import ReactGiphySearchbox from "react-giphy-searchbox";


const Gif = () => {
    
    // let [search,setSearch]=useState("");
    // let [gifs,setGifs]=useState([]);
    // let [loading,setLoading]=useState(0);
    // let searchGif=()=>{
    //     if(search.length>0){
    //         setLoading(true);
    //         fetch(`https://api.giphy.com/v1/gifs/search?api_key=7Ft1wPsb0M51hkKYB0W254FtFJ8Ib2PY&q=${search}&limit=10&offset=0&rating=g&lang=en`)
    //         .then((res)=>{
    //             return res.json();
    //         })
    //         .then((result)=>{
    //             console.log(result)
    //             setGifs(result.data.map((gif)=>{
    //                 return gif.images.fixed_height.url
    //             }))
    //         })
    //         .catch(()=>{
    //             setLoading(false);
    //             alert("asdasdasdasd")
    //         })

    //     }
    // }
        
    return (
        // <div>
        //    <div className="header">
        //     <input type="text"
        //         placeholder="Search Gif" 
        //         value={search}
        //         onChange={(e)=>setSearch(e.target.value)}
        //         className='todo-input edit'
        //         />
        //         <button onClick={searchGif}  className='todo-button edit' >search</button>
        //    </div>
        //    <div className="resukt">
              
        //        <div>
        //            {
        //                gifs.map((gif)=>{
        //                    return(
        //                     <div>
        //                         <img src={gif}/>
        //                     </div>

        //                    )
        //                })
        //            }
        //        </div>
        //    </div>

        // </div>
        <>
        
        
    <div className="searchboxWrapper">
      <ReactGiphySearchbox
        apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
        onSelect={(item) => console.log(item)}
        masonryConfig={[
          { columns: 2, imageWidth: 110, gutter: 5 },
          { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 }
        ]}
      />
    </div>
      </>
        
    )
}

export default Gif
