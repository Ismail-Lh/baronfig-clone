import { NextLink } from '@components';

import { Wrapper } from './ButtonStyles';

const Button = ({ route, link, primary }) => {
  return (
    <Wrapper primary={primary}>
      <NextLink route={route} link={link} />
    </Wrapper>
  );
};

export default Button;
