import './index.css'

const MenuItem = props=>{
    const {item}=props
    const {name,imageUrl,cost}=item
    return(
        <li className='menu-card'>
            <img src={imageUrl} className='dish-image' alt={name} />
            <div className='card-content'>
                <p className='item-name'>{name}</p>
                <p className='cost'>${cost}</p>
            </div>
        </li>
    )
}
export default MenuItem