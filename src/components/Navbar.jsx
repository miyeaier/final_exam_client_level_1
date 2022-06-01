import { Menu, Image, Segment } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Segment inverted>
      {/* <Menu inverted secondary> */}
      <Image
        data-cy="image-header"
        src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
      />
      {/* </Menu> */}
    </Segment>
  );
};

export default Navbar;
