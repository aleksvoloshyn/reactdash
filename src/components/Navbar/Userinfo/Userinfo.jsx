import { useNavigate } from 'react-router-dom'
import avataaars from '../../../images/avataaars.png'
import s from './Userinfo.module.scss'

const Userinfo = ({ userName = 'Alex ', accountType = 'Premium Account' }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('./')
  }
  return (
    <div className={s.userInfo}>
      <div className={s.userInfo__avatar}>
        <img src={avataaars} alt="user ph" width="45" height="43" />
      </div>
      <div className={s.userInfo__titles}>
        <h3 className={s.userInfo__titles__name}>{userName}</h3>
        <h3 className={s.userInfo__titles__type}>{accountType}</h3>
      </div>
      <div className={s.userInfo__logout}>
        <div onClick={handleClick} className={s.logoutIcon}>
          {' '}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.24596 8.35841C6.88138 8.35841 6.5931 8.64175 6.5931 9.00008C6.5931 9.35008 6.88138 9.64175 7.24596 9.64175H12.3332V13.6251C12.3332 15.6667 10.6459 17.3334 8.56016 17.3334H4.43104C2.35376 17.3334 0.666504 15.6751 0.666504 13.6334V4.37508C0.666504 2.32508 2.36224 0.666748 4.43952 0.666748H8.57712C10.6459 0.666748 12.3332 2.32508 12.3332 4.36675V8.35841H7.24596ZM15.3584 6.11692L17.7917 8.54192C17.9167 8.66692 17.9834 8.82525 17.9834 9.00025C17.9834 9.16692 17.9167 9.33359 17.7917 9.45025L15.3584 11.8753C15.2334 12.0003 15.0667 12.0669 14.9084 12.0669C14.7417 12.0669 14.575 12.0003 14.45 11.8753C14.2 11.6253 14.2 11.2169 14.45 10.9669L15.7834 9.64192H12.3334V8.35859H15.7834L14.45 7.03359C14.2 6.78359 14.2 6.37525 14.45 6.12525C14.7 5.86692 15.1084 5.86692 15.3584 6.11692Z"
              fill="#030229"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Userinfo
