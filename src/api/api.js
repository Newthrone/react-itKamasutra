import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "55eae980-be03-4407-9ab1-4b41ff913d2b"
  },
});

export const getUsersAPI = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?count=${pageSize}&page=${currentPage}`)
}

export const requestFollowUser = (userId) => {
  return instance.post(`follow/${userId}`)
}

export const requestUnfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`)
}

export const getProfileUser = (userId) => {
  return instance.get(`profile/${userId}`)
}

export const getAuthentication = () => {
  return instance.get('auth/me')
}
