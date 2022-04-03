import React, { useContext } from 'react';
import Switch from 'react-switch'
import { Container } from './styles';
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
interface Props {
  togleTheme(): void,
}
const Header: React.FC<Props> = ({ togleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <Container>
      Tema light/dark
      <Switch
        onChange={togleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </Container>
  );
};
export default Header