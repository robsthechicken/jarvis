import { apiClient } from '@/services/apiClient'
import type { ChatMessage, SendMessagePayload } from '../types/chat.types'

export const chatService = {
  async sendMessage(payload: SendMessagePayload): Promise<ChatMessage> {
    const { data } = await apiClient.post<ChatMessage>('/chat', payload)
    return data
  },
}
