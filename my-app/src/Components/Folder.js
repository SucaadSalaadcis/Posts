import React from 'react'

function Folder() {
    return(
        <div>
               {/* one component rendering multiple components as childerens 
                childerens kas oo ah array oo si ah within objects
              
               */}
             <Fold name='desktop'>
               <Fold name='music'>
               <File name='Somali_songs' />
               <File name='English_songs' />
               </Fold>
             <File name='dog.jpeg'/>
             <File name='cats.png'/>
          
             </Fold>
             <Fold name='Applications'/>
        </div>
          
    )


    
}

let Fold = (props) =>{
        console.log(props)
       console.log(useState())
       const [isOpen,setIsOpen] = useState(true);
       const {name,children} = props;
       const direction = isOpen? 'down':'right';
    
       const handleClick = () => setIsOpen(!isOpen);
      
      
    
         console.log(children)
      return <div>
       {/* <span onClick={() => setIsOpen(!isOpen)}>{name}</span> */}
       <span onClick={handleClick}>
         <i className='yellow folder icon'></i>
         <i className={`black caret ${direction} icon`}></i>
         {name}
         </span>
        
    
       <div style={{marginLeft: '17px'}}>
       {isOpen? children : null}
       </div>
    
      </div>
     }
    
     const File= (props) =>{
       const {name} = props;
       const fileExtention = name.split('.')[1];
       const fileIcons= {
          mp4: 'headphones',
         jpeg: 'file image',
         png: 'file image outline',
       }
       return <div>
          <i className={` ${fileIcons[fileExtention]} icon`}></i>
         {name}
      
         </div>
    
     }

export default Folder