import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Form from 'components/organisms/Form';
import { api, endpoints } from 'api';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const AuthenticatedApp = () => {
  return (
    <>
      <Wrapper>
        <h1>Logged in</h1>
      </Wrapper>
    </>
  );
};

const UnauthenticatedApp = ({ handleSignIn, loginError }) => {
  return (
    <>
      <Form handleSignIn={handleSignIn} loginError={loginError} />
    </>
  );
};

const Root = () => {
  const [userCreditentials, setCreditentials] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleSignIn = async (e) => {
    const { username, password } = e;

    const data = {
      username: username,
      password: password,
      client_id: 'testdroid-cloud-api',
      grant_type: 'password',
    };
    console.log(data);

    try {
      // used Allow Access Control Origin workaround problem by setting proxy of React project to "https://cloud.bitbar.com"
      const response = await api.post(endpoints.auth, JSON.stringify(data)).then((response) => {
        //checking direct response
        console.log(response);
        console.log('Token:');
        console.log(response.data);
      });
      // setCreditentials(response.data);
      // console.log(userCreditentials);
    } catch (err) {
      if (!err?.response) {
        setError('No Server Response');
      } else if (err.response?.status === 400) {
        setError('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setError('Unauthorized');
      } else {
        setError('Login Failed');
      }
    }
    // {error !== null ? console.log(error) : console.log('Logged in')};
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>{userCreditentials ? <AuthenticatedApp /> : <UnauthenticatedApp loginError={error} handleSignIn={handleSignIn} />}</Wrapper>
    </ThemeProvider>
  );
};

export default Root;
