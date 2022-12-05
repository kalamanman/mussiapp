import {useState} from 'react'


//filterList
const filterList= ['all','mine', 'development','design','marketing','sales']
const ProjectFilter = ({currentFilter,setCurrentFilter}) => {
    
    
  return (
    <div className='project-filter' >
        <nav>
            <span>Filter by:</span>
           { filterList.map((f)=>(
                <button key={f}
                className={f===currentFilter?'active f-btn':'f-btn'}
                    onClick={()=>setCurrentFilter(f)}
                
                  
                >
                    {f}
                </button>
            ))
            
           }

        </nav> 
    </div>
  )
}

export default ProjectFilter