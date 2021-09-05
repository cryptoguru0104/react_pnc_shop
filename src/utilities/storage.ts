const APP_ID = 'NFL_GB_'

export const setItem = (key: string, data: any) => {
  localStorage.setItem(APP_ID + key, JSON.stringify(data))
}

export const getItem = (key: string, defaultVal: any) => {
  try {
    return JSON.parse(localStorage.getItem(APP_ID + key) as string) || defaultVal
  } catch (e) {
    return defaultVal || false
  }
}

export const deleteItem = (key: string) => {
  localStorage.removeItem(APP_ID + key)
}

export const getToken = () => getItem('TOKEN', false)
export const setToken = (data: any) => setItem('TOKEN', data)
export const deleteToken = () => deleteItem('TOKEN')

export const clearInfo = () => {
  deleteToken()
}
