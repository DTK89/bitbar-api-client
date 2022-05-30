import React from 'react';
// import { StyledTitle, Wrapper } from '../UsersList.styles';
import { useForm } from 'react-hook-form';
import FormField from 'components/molecules/FormField';
import { Button } from 'components/atoms/Button';

const Form = ({ handleSignIn, loginError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Form submit test
  // const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      >
        <FormField label="username" name="username" id="username" {...register('username', { required: true })} />
        {errors.username && <span>Login is required</span>}
        <FormField label="password" name="password" id="password" type="password" {...register('password', { required: true })} />
        {errors.password && <span>Password is required</span>}
        <Button type="submit">Sign in</Button>
        {loginError && <span>{loginError}</span>}
      </form>
    </>
  );
};

export default Form;
