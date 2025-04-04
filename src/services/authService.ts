import { User } from "../models/User";

const API_BASE_URL = 'http://18.205.17.221:8080';

export const registerUser = async (user: User) => {
  return fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
};

export const loginUser = async (user: User) => {
  return fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
    credentials: 'include'
  });
};

export const logoutUser = async () => {
  return fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include'
  });
};

export const checkUserSession = async () =>
  fetch(`${API_BASE_URL}/api/auth/session-check`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
});