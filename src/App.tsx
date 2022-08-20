import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { hoursSelector, minuteState } from './atoms';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { lightTheme } from './theme';

const App = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hoursSelector);

  const onMinutesChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setMinutes(+value);
  };
  const onHoursChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;

    setHours(+value);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <input
        type="number"
        onChange={onMinutesChange}
        value={minutes}
        placeholder="Minutes"
      />
      <input
        type="number"
        onChange={onHoursChange}
        value={hours}
        placeholder="Hours"
      />
    </ThemeProvider>
  );
};

export default App;
