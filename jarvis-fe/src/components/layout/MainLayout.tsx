import { NavLink, Outlet, useLocation } from 'react-router-dom'
import logoMarkSvg from '@/assets/figma/logo-mark.svg'
import iconPanelSvg from '@/assets/figma/icon-panel.svg'
import iconChatActiveSvg from '@/assets/figma/icon-chat.svg'
import iconChatInactiveSvg from '@/assets/figma/icon-chat-inactive.svg'
import iconGridInactiveSvg from '@/assets/figma/icon-grid.svg'
import iconGridActiveSvg from '@/assets/figma/icon-grid-active.svg'
import iconArchiveInactiveSvg from '@/assets/figma/icon-archive.svg'
import iconArchiveActiveSvg from '@/assets/figma/icon-archive-active.svg'
import iconUserInactiveSvg from '@/assets/figma/icon-user.svg'
import iconUserActiveSvg from '@/assets/figma/icon-user-active.svg'
import iconSettingsSvg from '@/assets/figma/icon-settings.svg'
import iconMoreSvg from '@/assets/figma/icon-more.svg'
import { cn } from '@/utils/cn'

const recentChats = [
  'Deployment steps for Project X',
  'Login bug Jira tickets',
  'Engineering updates summary',
  'Q3 release notes',
  'Auth service architecture',
  'Onboarding doc review',
]

export function MainLayout() {
  const location = useLocation()

  const navItems = [
    {
      to: '/',
      label: 'Chat',
      activeIcon: iconChatActiveSvg,
      inactiveIcon: iconChatInactiveSvg,
      isActive: location.pathname === '/',
    },
    {
      to: '/overview',
      label: 'Overview',
      activeIcon: iconGridActiveSvg,
      inactiveIcon: iconGridInactiveSvg,
      isActive: location.pathname.startsWith('/overview'),
    },
    {
      to: '/sources',
      label: 'Sources',
      activeIcon: iconArchiveActiveSvg,
      inactiveIcon: iconArchiveInactiveSvg,
      isActive: location.pathname.startsWith('/sources'),
    },
    {
      to: '/agents',
      label: 'Agents',
      activeIcon: iconUserActiveSvg,
      inactiveIcon: iconUserInactiveSvg,
      isActive: location.pathname.startsWith('/agents'),
    },
    {
      to: '/settings',
      label: 'Settings',
      activeIcon: iconSettingsSvg,
      inactiveIcon: iconSettingsSvg,
      isActive: location.pathname.startsWith('/settings'),
    },
  ]

  return (
    <div className="bg-[#f8f9fa] flex items-stretch h-screen w-full overflow-hidden text-[#111827]">
      <aside className="bg-white border-r border-[#ecedef] flex flex-col gap-[28px] h-full items-start pb-[16px] pt-[28px] px-[20px] shrink-0 w-[272px] overflow-y-auto">
        {/* Brand */}
        <div className="flex gap-[12px] items-center px-[8px] w-full">
          <div className="relative shrink-0 size-[36px]">
            <img alt="Jarvis" className="block size-[36px]" src={logoMarkSvg} />
          </div>
          <p className="font-semibold leading-[1.4] text-[#111827] text-[21px] whitespace-nowrap">
            Jarvis
          </p>
          <div className="flex-1 h-px" />
          <button type="button" className="relative shrink-0 size-[22px] cursor-pointer">
            <img alt="" className="block size-[22px]" src={iconPanelSvg} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-[4px] items-start w-full">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={cn(
                'flex gap-[14px] items-center px-[14px] py-[11px] rounded-[10px] w-full transition-colors',
                item.isActive
                  ? 'bg-[#f1f2f4] font-medium text-[#111827]'
                  : 'font-normal text-[#374151] hover:bg-[#f8f9fa]',
              )}
            >
              <div className="relative shrink-0 size-[20px]">
                <img
                  alt=""
                  className="block size-[20px]"
                  src={item.isActive ? item.activeIcon : item.inactiveIcon}
                />
              </div>
              <span className="leading-[1.4] text-[16px] whitespace-nowrap">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Recent */}
        <div className="flex flex-col gap-[16px] items-start px-[14px] w-full">
          <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
            RECENT
          </p>
          {recentChats.map((title) => (
            <button
              key={title}
              type="button"
              className="font-normal leading-[22px] text-left text-[#374151] hover:text-[#111827] text-[15px] w-full cursor-pointer"
            >
              {title}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-px w-px" />

        {/* Account footer */}
        <div className="border-t border-[#ecedef] flex gap-[12px] items-center pt-[16px] px-[8px] w-full">
          <div className="bg-[#e8eeff] flex items-center justify-center rounded-[17px] shrink-0 size-[34px]">
            <span className="font-medium leading-[1.4] text-[#3b5bdb] text-[14.28px]">A</span>
          </div>
          <p className="font-medium leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
            Alex
          </p>
          <div className="flex-1 h-px" />
          <button type="button" className="relative shrink-0 size-[20px] cursor-pointer">
            <img alt="" className="block size-[20px]" src={iconMoreSvg} />
          </button>
        </div>
      </aside>

      <div className="flex flex-1 flex-col h-full min-h-0 min-w-0 overflow-hidden">
        <Outlet />
      </div>
    </div>
  )
}
