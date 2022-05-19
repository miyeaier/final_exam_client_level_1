import { Menu } from 'semantic-ui-react'

const Navbar = ()=>{

  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
        data-cy="image-header"
        hight="190"
        image="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
        />
      </Menu>
    </Segment>
  )
}

export default Navbar;