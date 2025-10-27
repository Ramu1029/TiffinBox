import { IoIosArrowForward } from "react-icons/io";
import './index.css'

const LocationSection = ()=>(
    <div className="location-section">
        <div className="location-content">
            <h6 className='location-section-heading'>our locations</h6>
            <h2 className='location-section-sub-heading'>Find Us at These Convenient Locations</h2>
            <button type='button' className='store-btn' >our store
                <IoIosArrowForward size={18} color="#B58F42" />
            </button>
        </div>
        <img src='/map.png' className="map" alt='map' />
    </div>
)

export default LocationSection