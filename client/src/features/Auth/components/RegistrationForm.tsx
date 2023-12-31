import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { object, ref, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import type { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import type { Registration } from '../type/authType';
import { registration } from '../authSlice';

const schema = object().shape({
  name: string().required('Необходимо указать имя'),
  email: string().required('Необходимо указать электронную почту'),
  password: string()
    .required('Необходимо указать пароль')
    .min(3, 'Пароль должен быть более 3 символов')
    .max(25, 'Пароль должен быть не более 25 символов'),
  cpassword: string()
    .required('Необходимо подтвердить пароль')
    .min(3, 'Пароль должен быть более 3 символов')
    .max(25, 'Пароль должен быть не более 25 символов')
    .oneOf([ref('password')], 'Пароли не совпадают'),
});

function RegistrationForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const { error, user } = useSelector((store: RootState) => store.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Registration>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Registration> = (data) => {
    void dispatch(registration(data));
  };

  useEffect(() => {
    if (user) {
      navigate('/login');
    }
  }, [user]);

  return (
    <div className='preFoarm'>
    <div className='registrationForm'>
      <form style={{ minHeight: '348px' }} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="name" {...register('name')} />
        <span>{errors.name?.message}</span>
        <input type="email" placeholder="email" {...register('email')} />
        <span>{errors.email?.message}</span>
        <input type="password" placeholder="password" {...register('password')} />
        <span>{errors.password?.message}</span>
        <input type="password" placeholder="cpassword" {...register('cpassword')} />
        <span>{errors.cpassword?.message}</span>
        <button className="formButton" type="submit">REGISTRATION</button>
      </form>
      <div>{error}</div>
    </div>
    </div>
  );
}

export default RegistrationForm;
