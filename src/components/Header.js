import React from 'react'
import './Header.css'

export const Header = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='logo'/>
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img src='https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181657.png' alt='usuario'/>
        </a>
      </div>
    </header>
  )
}
