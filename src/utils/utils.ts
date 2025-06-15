import axios from 'axios'

const BaseURL = 'https://api.themoviedb.org/3'

export const movieApi = axios.create({
  baseURL: BaseURL,
})

export function debounce<T extends (...args: never[]) => void>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
