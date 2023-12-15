import type { Registration, Authentication, User } from './type/authType';

export const registrationFetch = async (obj: Registration): Promise<User> => {
  const res = await fetch('/api/auth/registration', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data;
};

export const authenticationFetch = async (obj: Authentication): Promise<User> => {
  const res = await fetch('/api/auth/authentication', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify(obj),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data.user;
};

export const logoutFetch = async (): Promise<void> => {
  const res = await fetch('/api/auth/logout');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
};

export const ckeckFetch = async (): Promise<User> => {
  const res = await fetch('/api/auth/check');
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  return data.user;
};
