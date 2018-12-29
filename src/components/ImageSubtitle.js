import styled from 'styled-components';
import { Text } from 'rebass';

const ImageSubtitle = styled(Text)`
  position: absolute;
  display: inline;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  left: ${props => props.left};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  ${props =>
    props.invert
      ? 'float: left; padding-right: 20px; clip-path: polygon(0 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%);'
      : 'float: right; padding-left: 20px; clip-path: polygon(20px 0%, 100% 0%, 100% 100%, 0% 100%);'};
`;

export default ImageSubtitle;
