export interface ApiResponse<T> {
  data: T
  message?: string
  timestamp?: string
}

export interface ApiError {
  status: number
  message: string
  details?: Record<string, string>
}
