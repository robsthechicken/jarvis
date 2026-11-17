import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { ChatPage } from '@/features/chat'
import { OverviewPage } from '@/features/overview'
import { SourcesPage } from '@/features/sources'
import { AgentsPage } from '@/features/agents'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ChatPage />,
      },
      {
        path: 'overview',
        element: <OverviewPage />,
      },
      {
        path: 'sources',
        element: <SourcesPage initialStep="add" />,
      },
      {
        path: 'sources/test',
        element: <SourcesPage initialStep="test" />,
      },
      {
        path: 'agents',
        element: <AgentsPage />,
      },
      {
        path: 'settings',
        element: <Navigate to="/overview" replace />,
      },
    ],
  },
])
