import PlateIcon from '../../assets/PlateIcon.png'
import '../Logo/Logo.css';

function Logo(){
  return (
    <div className="logo-ctn">
      <img className="logo-img" src={PlateIcon} alt="Plate Icon" />
      <div className='logo-title'>FoodTracker</div>
    </div>
  )
}

export default Logo;