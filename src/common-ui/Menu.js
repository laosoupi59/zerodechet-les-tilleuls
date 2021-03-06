import React from 'react'
import { connect } from 'react-redux'

import { isLogged } from '../utils/user-utils'

import MenuItem from './MenuItem'
import ROUTES from '../app/routes'
import SVGCalendar from './svg/SVGCalendar'
import SVGWeight from './svg/SVGWeight'
import SVGStat from './svg/SVGStat'
import UserPhoto from '../user/UserPhoto'

const Menu = ({ user }) => {
  const photo = isLogged(user) ? user.photo : undefined

  return (
    <div className='menu'>
      <ul className='menu__list'>
        <MenuItem
          label={'Pesée'}
          icon={SVGWeight}
          route={ROUTES.weight}
        />
        <MenuItem
          label={'Stats'}
          icon={SVGStat}
          route={ROUTES.stat}
        /> 
        <MenuItem
          label={'Rdv'}
          icon={SVGCalendar}
          route={ROUTES.rdv}
        />
        <MenuItem
          label={'Moi'}
          photo={() => <UserPhoto src={photo} />}
          route={ROUTES.profile}
        /> 
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(Menu)