import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
 text-align: center;
 padding: 40px;
`;
export const Text = styled.p`
 color: ${props => props.theme.colors.text};
 font-size: 30px;
 text-align: center;
`