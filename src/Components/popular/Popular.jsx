import data_products from '../../assets/Frontend_Assets/data'
import Item from '../Items/Item'
import './popular.css'
function Popular() {
    return (
        <>
            <div className="popular">
                <h2 className='heading'>Popular in Women</h2>
                <div className='boxes'>
                    {data_products.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Popular