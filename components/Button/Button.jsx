import { NextLink } from '@components';

import { Wrapper } from './ButtonStyles';

const Button = ({ route, link, primary, secondary }) => {
  return (
    <Wrapper primary={primary} secondary={secondary}>
      <NextLink route={route} link={link} />
    </Wrapper>
  );
};

export default Button;
