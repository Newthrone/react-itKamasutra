import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "55eae980-be03-4407-9ab1-4b41ff913d2b"
  },
});

export const usersAPI = {
  getUsersAPI(currentPage = 1, pageSize = 10) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
  },
  requestFollowUser(userId) {
    return instance.post(`follow/${userId}`)
  },
  requestUnfollowUser(userId) {
    return instance.delete(`follow/${userId}`)
  },
}

export const authAPI = {
  getAuthentication() {
    return instance.get('auth/me')
  },
  authorization(loginData) {
    return instance.post('auth/login', loginData)
  },
  deAuthorization() {
    return instance.delete('auth/login')
  },
}

export const profileAPI = {
  getProfileUser(userId) {
    return instance.get(`profile/${userId}`)
  },
  getUserStatus (userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateUserStatus(status) {
    return instance.put('profile/status', {status})
  },
}
