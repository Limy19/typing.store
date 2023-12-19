import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import type { Authentication } from '../type/authType';
import { authentication } from '../authSlice';

const schema = object().shape({
  email: string().required('Необходимо указать электронную почту'),
  password: string().required('Необходимо указать пароль'),
});

function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { error, user } = useSelector((store: RootState) => store.auth);
  console.log(user);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Authentication>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Authentication> = (data) => {
    void dispatch(authentication(data));
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className="preFoarm">
      <div className="LoginForm">
        <form style={{ minHeight: '235px' }} onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="email" {...register('email')} />
          <span>{errors.email?.message}</span>
          <input type="password" placeholder="password" {...register('password')} />
          <span>{errors.password?.message}</span>
          <button className="formButton" type="submit">
            SIGN IN
          </button>
        </form>
        <div>{error}</div>
      </div>
    </div>
  );
}

export default LoginForm;
