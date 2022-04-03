import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import Global from './styles/global';
import Header from './components/Header'
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import UserPersitedState from './utils/usePersistedState';
import { Section, Text } from './style';

const App = () => {
  const [theme, setTheme] = UserPersitedState<DefaultTheme>('theme', light)
  const togleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header togleTheme={togleTheme} />
      <Section>
        <Text>
          By Douglas Silva
        </Text>
      </Section>
    </ThemeProvider>
  );
}

export default App;
