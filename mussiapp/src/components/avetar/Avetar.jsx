import './Avetar.css'

const Avetar = ({src}) => {
  return (
    <div className='avetar' >
        <img src={src} alt="avetar image" />
    </div>
  )
}

export default Avetar