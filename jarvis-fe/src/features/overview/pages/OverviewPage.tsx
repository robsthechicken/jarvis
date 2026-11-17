import iconDownSvg from '@/assets/figma/icon-down.svg'
import iconDownloadSvg from '@/assets/figma/icon-download.svg'
import iconChatTextBlueSvg from '@/assets/figma/icon-chat-text-blue.svg'
import iconUsersPurpleSvg from '@/assets/figma/icon-users-purple.svg'
import iconRefreshGreenSvg from '@/assets/figma/icon-refresh-green.svg'
import iconPlusGreenSvg from '@/assets/figma/icon-plus-green.svg'
import iconFileIndigoSvg from '@/assets/figma/icon-file-indigo.svg'
import iconKanbanBlueSvg from '@/assets/figma/icon-kanban-blue.svg'
import iconGlobeGreenSvg from '@/assets/figma/icon-globe-green.svg'
import iconFileRedSvg from '@/assets/figma/icon-file-red.svg'

const stats = [
  {
    label: 'Total queries',
    value: '1,284',
    sub: '+18% vs last week',
    subColor: 'text-[#16a34a]',
  },
  {
    label: 'Avg. response time',
    value: '1.4s',
    sub: '-0.3s improved',
    subColor: 'text-[#16a34a]',
  },
  {
    label: 'Sources queried',
    value: '4',
    sub: 'of 6 connected',
    subColor: 'text-[#6b7280]',
  },
  {
    label: 'Agent runs',
    value: '312',
    sub: '+42% vs last week',
    subColor: 'text-[#16a34a]',
  },
]

const activities = [
  {
    title: 'Deployment steps for Project X',
    meta: '10:42 AM · Alex',
    tileBg: 'bg-[#eff6ff]',
    icon: iconChatTextBlueSvg,
  },
  {
    title: 'Agent crew ran: Engineer + QA + Research',
    meta: '10:40 AM · automated',
    tileBg: 'bg-[#f5f3ff]',
    icon: iconUsersPurpleSvg,
  },
  {
    title: 'Confluence sync completed — 12 pages updated',
    meta: '9:15 AM · system',
    tileBg: 'bg-[#f0fdf4]',
    icon: iconRefreshGreenSvg,
  },
  {
    title: 'Login bug Jira tickets — AUTH-203, AUTH-197',
    meta: 'Yesterday · Preethi',
    tileBg: 'bg-[#eff6ff]',
    icon: iconChatTextBlueSvg,
  },
  {
    title: 'New source added: Web crawler (docs.acme.io)',
    meta: 'Yesterday · Alex',
    tileBg: 'bg-[#f0fdf4]',
    icon: iconPlusGreenSvg,
  },
]

const sourceUsage = [
  {
    name: 'Confluence',
    queries: '541 queries',
    tileBg: 'bg-[#eef2ff]',
    icon: iconFileIndigoSvg,
    barColor: 'bg-[#3b5bdb]',
    barWidth: 'w-[215.9px]',
  },
  {
    name: 'Jira',
    queries: '389 queries',
    tileBg: 'bg-[#eff6ff]',
    icon: iconKanbanBlueSvg,
    barColor: 'bg-[#2563eb]',
    barWidth: 'w-[152.4px]',
  },
  {
    name: 'Web crawler',
    queries: '212 queries',
    tileBg: 'bg-[#f0fdf4]',
    icon: iconGlobeGreenSvg,
    barColor: 'bg-[#16a34a]',
    barWidth: 'w-[88.9px]',
  },
  {
    name: 'PDFs',
    queries: '142 queries',
    tileBg: 'bg-[#fef2f2]',
    icon: iconFileRedSvg,
    barColor: 'bg-[#dc2626]',
    barWidth: 'w-[63.5px]',
  },
]

const tokenUsage = [
  {
    label: 'Input',
    value: '842k / 2M',
    barColor: 'bg-[#2563eb]',
    barWidth: 'w-[128.52px]',
  },
  {
    label: 'Output',
    value: '318k / 1M',
    barColor: 'bg-[#7c3aed]',
    barWidth: 'w-[97.92px]',
  },
  {
    label: 'Embeddings',
    value: '1.1M / 5M',
    barColor: 'bg-[#15803d]',
    barWidth: 'w-[67.32px]',
  },
]

export function OverviewPage() {
  return (
    <div className="flex flex-1 flex-col h-full min-h-0 w-full items-start overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-[#e5e7eb] flex gap-[12px] items-center px-[32px] py-[22px] shrink-0 w-full">
        <h1 className="font-semibold leading-[1.4] text-[#111827] text-[24px] whitespace-nowrap">
          Overview
        </h1>
        <div className="flex-1 h-px" />
        <button
          type="button"
          className="bg-white border border-[#d1d5db] hover:bg-[#f9fafb] flex gap-[10px] items-center px-[14px] py-[9px] rounded-[10px] shrink-0 cursor-pointer"
        >
          <span className="font-medium leading-[1.4] text-[#111827] text-[15px] whitespace-nowrap">
            Last 7 days
          </span>
          <div className="relative shrink-0 size-[16px]">
            <img alt="" className="block size-[16px]" src={iconDownSvg} />
          </div>
        </button>
        <button
          type="button"
          className="bg-white border border-[#d1d5db] hover:bg-[#f9fafb] flex items-center justify-center rounded-[10px] shrink-0 size-[40px] cursor-pointer"
        >
          <div className="relative shrink-0 size-[18px]">
            <img alt="Download" className="block size-[18px]" src={iconDownloadSvg} />
          </div>
        </button>
      </header>

      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto w-full">
        <div className="flex flex-col gap-[32px] items-start px-[40px] py-[36px] w-full max-w-[1168px]">
        {/* Stats Row */}
        <div className="flex gap-[24px] items-start w-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#fbfbfc] border border-[#e5e7eb] flex flex-1 flex-col gap-[6px] items-start min-w-0 px-[26px] py-[24px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]"
            >
              <p className="font-normal leading-[1.4] text-[#374151] text-[15px]">{stat.label}</p>
              <p className="font-semibold leading-[44px] text-[#111827] text-[36px]">
                {stat.value}
              </p>
              <p className={`font-medium leading-[1.4] text-[13px] ${stat.subColor}`}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Lower Split Section */}
        <div className="flex gap-[28px] items-start w-full">
          {/* Recent Activity */}
          <div className="bg-white border border-[#e5e7eb] flex flex-1 flex-col items-start min-w-0 pb-[8px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]">
            <div className="flex items-start px-[28px] py-[26px] w-full">
              <h2 className="font-semibold leading-[1.4] text-[#111827] text-[19px] whitespace-nowrap">
                Recent activity
              </h2>
            </div>

            {activities.map((item) => (
              <div
                key={item.title}
                className="border-t border-[#f1f2f4] flex gap-[18px] items-center px-[28px] py-[18px] w-full"
              >
                <div
                  className={`${item.tileBg} flex items-center justify-center rounded-[9.6px] shrink-0 size-[40px]`}
                >
                  <div className="relative shrink-0 size-[20px]">
                    <img alt="" className="block size-[20px]" src={item.icon} />
                  </div>
                </div>
                <div className="flex flex-col gap-[3px] items-start leading-[1.4] whitespace-nowrap">
                  <p className="font-medium text-[#111827] text-[16px]">{item.title}</p>
                  <p className="font-normal text-[#6b7280] text-[13px]">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Widgets */}
          <div className="flex flex-col gap-[24px] items-start shrink-0 w-[360px]">
            {/* Source Usage */}
            <div className="bg-white border border-[#e5e7eb] flex flex-col gap-[18px] items-start px-[26px] py-[24px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
              <h3 className="font-semibold leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
                Source usage
              </h3>

              {sourceUsage.map((src) => (
                <div key={src.name} className="flex gap-[14px] items-center w-full">
                  <div
                    className={`${src.tileBg} flex items-center justify-center rounded-[8.16px] shrink-0 size-[34px]`}
                  >
                    <div className="relative shrink-0 size-[17px]">
                      <img alt="" className="block size-[17px]" src={src.icon} />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                    <div className="flex items-center w-full">
                      <p className="font-medium leading-[1.4] text-[#111827] text-[14px]">
                        {src.name}
                      </p>
                      <div className="flex-1 h-px" />
                      <p className="font-normal leading-[1.4] text-[#6b7280] text-[13px]">
                        {src.queries}
                      </p>
                    </div>
                    <div className="bg-[#eef0f3] h-[5px] overflow-hidden relative rounded-[3px] w-[254px]">
                      <div
                        className={`absolute left-0 top-0 h-[5px] rounded-[3px] ${src.barColor} ${src.barWidth}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Token Usage */}
            <div className="bg-white border border-[#e5e7eb] flex flex-col gap-[18px] items-start px-[26px] py-[24px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full">
              <h3 className="font-semibold leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
                Token usage
              </h3>

              {tokenUsage.map((tk) => (
                <div key={tk.label} className="flex flex-col gap-[8px] items-start w-full">
                  <div className="flex items-center w-full">
                    <p className="font-normal leading-[1.4] text-[#374151] text-[14px]">
                      {tk.label}
                    </p>
                    <div className="flex-1 h-px" />
                    <p className="font-semibold leading-[1.4] text-[#111827] text-[14px]">
                      {tk.value}
                    </p>
                  </div>
                  <div className="bg-[#eef0f3] h-[5px] overflow-hidden relative rounded-[3px] w-[306px]">
                    <div
                      className={`absolute left-0 top-0 h-[5px] rounded-[3px] ${tk.barColor} ${tk.barWidth}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
