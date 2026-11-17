import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Toggle } from '@/components/ui/Toggle'
import iconRightSvg from '@/assets/figma/icon-right.svg'
import iconXSvg from '@/assets/figma/icon-x.svg'
import iconFileIndigoSvg from '@/assets/figma/icon-file-indigo.svg'
import iconFileIndigoLgSvg from '@/assets/figma/icon-file-indigo-lg.svg'
import iconDriveGreenSvg from '@/assets/figma/icon-drive-green.svg'
import iconKanbanBlueSvg from '@/assets/figma/icon-kanban-blue.svg'
import iconColumnsIndigoSvg from '@/assets/figma/icon-columns-indigo.svg'
import iconFileRedSvg from '@/assets/figma/icon-file-red.svg'
import iconGlobeGreenSvg from '@/assets/figma/icon-globe-green.svg'
import iconDbPurpleSvg from '@/assets/figma/icon-db-purple.svg'
import iconArrowBlueSvg from '@/assets/figma/icon-arrow-blue.svg'
import iconDownSvg from '@/assets/figma/icon-down.svg'
import iconRefreshDarkSvg from '@/assets/figma/icon-refresh-dark.svg'
import iconCheckGreenSvg from '@/assets/figma/icon-check-green.svg'
import dotGreenSvg from '@/assets/figma/dot-green.svg'
import { cn } from '@/utils/cn'

const catalogSections = [
  {
    title: 'DOCS & WIKIS',
    items: [
      {
        id: 'confluence',
        name: 'Confluence',
        subtitle: 'Atlassian',
        tileBg: 'bg-[#eef2ff]',
        icon: iconFileIndigoSvg,
      },
      {
        id: 'notion',
        name: 'Notion',
        subtitle: 'Pages & databases',
        tileBg: 'bg-[#f3f4f6]',
        letter: 'N',
      },
      {
        id: 'gdrive',
        name: 'Google Drive',
        subtitle: 'Docs, Sheets, Slides',
        tileBg: 'bg-[#f0fdf4]',
        icon: iconDriveGreenSvg,
      },
    ],
  },
  {
    title: 'TICKETING',
    items: [
      {
        id: 'jira',
        name: 'Jira',
        subtitle: 'Issues & sprints',
        tileBg: 'bg-[#eff6ff]',
        icon: iconKanbanBlueSvg,
      },
      {
        id: 'linear',
        name: 'Linear',
        subtitle: 'Issues & roadmap',
        tileBg: 'bg-[#eef2ff]',
        icon: iconColumnsIndigoSvg,
      },
    ],
  },
  {
    title: 'FILES & WEB',
    items: [
      {
        id: 'pdf',
        name: 'PDF upload',
        subtitle: 'Upload documents',
        tileBg: 'bg-[#fef2f2]',
        icon: iconFileRedSvg,
      },
      {
        id: 'web',
        name: 'Web crawler',
        subtitle: 'Any public URL',
        tileBg: 'bg-[#f0fdf4]',
        icon: iconGlobeGreenSvg,
      },
      {
        id: 'postgres',
        name: 'PostgreSQL',
        subtitle: 'SQL database',
        tileBg: 'bg-[#f5f3ff]',
        icon: iconDbPurpleSvg,
      },
    ],
  },
]

const retrievalResults = [
  {
    score: '0.94',
    title: 'Production Deploy Runbook - ENG',
    updated: 'Updated 2 days ago',
  },
  {
    score: '0.87',
    title: 'CI/CD Pipeline Overview - INFRA',
    updated: 'Updated 5 days ago',
  },
  {
    score: '0.81',
    title: 'Release Checklist v2 - ENG',
    updated: 'Updated 1 week ago',
  },
]

interface SourcesPageProps {
  initialStep?: 'add' | 'test'
}

export function SourcesPage({ initialStep = 'add' }: SourcesPageProps) {
  const navigate = useNavigate()
  const [step, setStep] = useState<'add' | 'test'>(initialStep)
  const [selectedSource, setSelectedSource] = useState('confluence')
  const [baseUrl, setBaseUrl] = useState('https://acme.atlassian.net')
  const [apiToken, setApiToken] = useState('••••••••••••••••••••••••••••')
  const [spaces, setSpaces] = useState('ENG, INFRA, PRODUCT')
  const [enableReranking, setEnableReranking] = useState(true)
  const [respectPermissions, setRespectPermissions] = useState(true)

  if (step === 'test') {
    return (
      <div className="flex flex-1 flex-col h-full min-h-0 w-full items-start overflow-hidden">
        {/* Header Breadcrumbs */}
        <header className="bg-white border-b border-[#e5e7eb] flex gap-[10px] items-center px-[32px] py-[22px] shrink-0 w-full">
          <button
            type="button"
            onClick={() => setStep('add')}
            className="font-normal leading-[1.4] text-[#6b7280] hover:text-[#111827] text-[16px] whitespace-nowrap cursor-pointer"
          >
            Sources
          </button>
          <div className="relative shrink-0 size-[16px]">
            <img alt="" className="block size-[16px]" src={iconRightSvg} />
          </div>
          <button
            type="button"
            onClick={() => setStep('add')}
            className="font-normal leading-[1.4] text-[#6b7280] hover:text-[#111827] text-[16px] whitespace-nowrap cursor-pointer"
          >
            Confluence
          </button>
          <div className="relative shrink-0 size-[16px]">
            <img alt="" className="block size-[16px]" src={iconRightSvg} />
          </div>
          <span className="font-semibold leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
            Test &amp; save
          </span>
          <div className="flex-1 h-px" />
          <button
            type="button"
            onClick={() => navigate('/')}
            className="relative shrink-0 size-[22px] cursor-pointer"
          >
            <img alt="Close" className="block size-[22px]" src={iconXSvg} />
          </button>
        </header>

        {/* Body */}
        <div className="flex flex-1 flex-col gap-[28px] items-center min-h-0 overflow-y-auto py-[44px] w-full">
          {/* Connection checks card */}
          <div className="bg-white border border-[#e5e7eb] flex flex-col items-start px-[32px] py-[28px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-[860px]">
            <div className="border-b border-[#e5e7eb] flex gap-[20px] items-center pb-[24px] w-full">
              <div className="bg-[#eef2ff] flex items-center justify-center rounded-[13.44px] shrink-0 size-[56px]">
                <div className="relative shrink-0 size-[26px]">
                  <img alt="" className="block size-[26px]" src={iconFileIndigoLgSvg} />
                </div>
              </div>
              <div className="flex flex-col gap-[2px] items-start leading-[1.4] whitespace-nowrap">
                <p className="font-bold text-[#111827] text-[22px]">Confluence</p>
                <p className="font-normal text-[#6b7280] text-[15px]">
                  https://acme.atlassian.net/wiki
                </p>
              </div>
              <div className="flex-1 h-px" />
              <button
                type="button"
                className="bg-white border border-[#d1d5db] hover:bg-[#f9fafb] flex gap-[8px] items-center px-[16px] py-[10px] rounded-[10px] shrink-0 cursor-pointer"
              >
                <div className="relative shrink-0 size-[17px]">
                  <img alt="" className="block size-[17px]" src={iconRefreshDarkSvg} />
                </div>
                <span className="font-medium leading-[1.4] text-[#111827] text-[15px] whitespace-nowrap">
                  Re-run
                </span>
              </button>
            </div>

            <div className="border-b border-[#f1f2f4] flex gap-[14px] items-center py-[20px] w-full">
              <div className="bg-[#e7f7ec] flex items-center justify-center rounded-[13px] shrink-0 size-[26px]">
                <div className="relative shrink-0 size-[15px]">
                  <img alt="" className="block size-[15px]" src={iconCheckGreenSvg} />
                </div>
              </div>
              <p className="font-medium leading-[1.4] text-[#111827] text-[17px] whitespace-nowrap">
                Authentication
              </p>
              <div className="flex-1 h-px" />
              <p className="font-mono font-normal leading-[1.4] text-[#4b5563] text-[13px] whitespace-nowrap">
                API token valid
              </p>
            </div>

            <div className="flex gap-[14px] items-center py-[20px] w-full">
              <div className="bg-[#e7f7ec] flex items-center justify-center rounded-[13px] shrink-0 size-[26px]">
                <div className="relative shrink-0 size-[15px]">
                  <img alt="" className="block size-[15px]" src={iconCheckGreenSvg} />
                </div>
              </div>
              <p className="font-medium leading-[1.4] text-[#111827] text-[17px] whitespace-nowrap">
                Connectivity
              </p>
              <div className="flex-1 h-px" />
              <p className="font-mono font-normal leading-[1.4] text-[#4b5563] text-[13px] whitespace-nowrap">
                Responded in 142ms
              </p>
            </div>

            <div className="flex gap-[10px] items-center pt-[16px] w-full">
              <div className="relative shrink-0 size-[9px]">
                <img alt="" className="block size-[9px]" src={dotGreenSvg} />
              </div>
              <p className="font-medium leading-[1.4] text-[#15803d] text-[16px] whitespace-nowrap">
                All checks passed
              </p>
            </div>
          </div>

          {/* Sample retrieval preview card */}
          <div className="bg-white border border-[#e5e7eb] flex flex-col gap-[16px] items-start px-[32px] py-[30px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-[860px]">
            <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
              SAMPLE RETRIEVAL PREVIEW
            </p>

            <div className="bg-[#f7f6f3] flex flex-col font-medium gap-[6px] items-start leading-[1.4] px-[24px] py-[20px] rounded-[12px] w-full">
              <p className="text-[#6b7280] text-[13px]">Test query</p>
              <p className="text-[#111827] text-[17px]">
                &quot;What is the deployment process for production?&quot;
              </p>
            </div>

            {retrievalResults.map((res) => (
              <div
                key={res.title}
                className="border border-[#e5e7eb] flex gap-[20px] items-center p-[20px] rounded-[12px] w-full"
              >
                <div className="bg-[#f4f6fb] border border-[#eef0f5] flex h-[40px] items-center justify-center rounded-[8px] shrink-0 w-[52px]">
                  <span className="font-mono font-normal leading-[1.4] text-[#1d4ed8] text-[13px]">
                    {res.score}
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] items-start leading-[1.4] whitespace-nowrap">
                  <p className="font-semibold text-[#111827] text-[17px]">{res.title}</p>
                  <p className="font-normal text-[#6b7280] text-[14px]">{res.updated}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-[#e5e7eb] flex gap-[14px] items-center px-[40px] py-[20px] shrink-0 w-full">
          <Button label="Back to config" variant="Secondary" onClick={() => setStep('add')} />
          <div className="flex-1 h-px" />
          <p className="font-normal leading-[1.4] text-[#9ca3af] text-[15px] whitespace-nowrap">
            First sync will start immediately
          </p>
          <Button label="Save & connect" onClick={() => navigate('/')} />
        </footer>
      </div>
    )
  }

  return (
    <div className="flex flex-1 flex-col h-full min-h-0 w-full items-start overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-[#e5e7eb] flex gap-[10px] items-center px-[32px] py-[22px] shrink-0 w-full">
        <span className="font-normal leading-[1.4] text-[#6b7280] text-[16px] whitespace-nowrap">
          Sources
        </span>
        <div className="relative shrink-0 size-[16px]">
          <img alt="" className="block size-[16px]" src={iconRightSvg} />
        </div>
        <span className="font-semibold leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
          Add source
        </span>
        <div className="flex-1 h-px" />
        <button
          type="button"
          onClick={() => navigate('/')}
          className="relative shrink-0 size-[22px] cursor-pointer"
        >
          <img alt="Close" className="block size-[22px]" src={iconXSvg} />
        </button>
      </header>

      {/* Body */}
      <div className="flex flex-1 items-stretch min-h-0 w-full overflow-hidden">
        {/* Left Catalog */}
        <div className="bg-white border-r border-[#e5e7eb] flex flex-col gap-[6px] h-full min-h-0 overflow-y-auto items-start px-[24px] py-[28px] shrink-0 w-[340px]">
          {catalogSections.map((sec, idx) => (
            <div key={sec.title} className="w-full flex flex-col gap-[6px]">
              <div
                className={cn(
                  'flex flex-col items-start pb-[8px] px-[6px] w-full',
                  idx > 0 && 'pt-[22px]',
                )}
              >
                <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
                  {sec.title}
                </p>
              </div>
              {sec.items.map((item) => {
                const isSelected = selectedSource === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedSource(item.id)}
                    className={cn(
                      'flex gap-[14px] items-center px-[14px] py-[12px] rounded-[12px] w-full text-left cursor-pointer transition-colors',
                      isSelected
                        ? 'bg-white border-[#c7d2fe] border-[1.5px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)]'
                        : 'hover:bg-[#f9fafb]',
                    )}
                  >
                    <div
                      className={`${item.tileBg} flex items-center justify-center rounded-[9.12px] shrink-0 size-[38px]`}
                    >
                      {item.letter ? (
                        <span className="font-bold leading-[1.4] text-[#111827] text-[15.3px]">
                          {item.letter}
                        </span>
                      ) : (
                        <div className="relative shrink-0 size-[18px]">
                          <img alt="" className="block size-[18px]" src={item.icon} />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-[2px] items-start leading-[1.4] whitespace-nowrap">
                      <p className="font-semibold text-[#111827] text-[16px]">{item.name}</p>
                      <p className="font-normal text-[#6b7280] text-[13px]">{item.subtitle}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        {/* Right Config Form */}
        <div className="flex flex-1 flex-col h-full min-h-0 min-w-0 justify-between overflow-hidden">
          <div className="flex flex-1 flex-col gap-[26px] items-start min-h-0 overflow-y-auto px-[48px] py-[40px] w-full">
            <div className="flex flex-col gap-[26px] items-start w-full max-w-[732px]">
            {/* Source Header */}
            <div className="border-b border-[#e5e7eb] flex gap-[20px] items-center pb-[26px] w-full">
              <div className="bg-[#eef2ff] flex items-center justify-center rounded-[14.4px] shrink-0 size-[60px]">
                <div className="relative shrink-0 size-[28px]">
                  <img alt="" className="block size-[28px]" src={iconFileIndigoLgSvg} />
                </div>
              </div>
              <div className="flex flex-col gap-[2px] items-start leading-[1.4] whitespace-nowrap">
                <p className="font-bold text-[#111827] text-[28px]">Confluence</p>
                <p className="font-normal text-[#6b7280] text-[17px]">Atlassian wiki &amp; docs</p>
              </div>
            </div>

            {/* Base URL */}
            <div className="flex flex-col gap-[10px] items-start w-full">
              <label className="font-semibold leading-[1.4] text-[#111827] text-[13px] tracking-[0.78px] whitespace-nowrap">
                BASE URL
              </label>
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="bg-white border border-[#d1d5db] px-[18px] py-[14px] rounded-[10px] w-full font-normal leading-[1.4] text-[#111827] text-[16px] focus:border-[#3b5bdb] focus:outline-none"
              />
              <p className="font-normal leading-[1.4] text-[#6b7280] text-[13px]">
                The root URL of your Confluence instance
              </p>
            </div>

            {/* API Token */}
            <div className="flex flex-col gap-[10px] items-start w-full">
              <label className="font-semibold leading-[1.4] text-[#111827] text-[13px] tracking-[0.78px] whitespace-nowrap">
                API TOKEN
              </label>
              <input
                type="password"
                value={apiToken}
                onChange={(e) => setApiToken(e.target.value)}
                className="bg-white border border-[#d1d5db] px-[18px] py-[14px] rounded-[10px] w-full font-normal leading-[1.4] text-[#111827] text-[16px] focus:border-[#3b5bdb] focus:outline-none"
              />
              <div className="flex gap-[6px] items-center">
                <span className="font-normal leading-[1.4] text-[#2563eb] text-[13px] whitespace-nowrap">
                  Generate from Atlassian account settings
                </span>
                <div className="relative shrink-0 size-[14px]">
                  <img alt="" className="block size-[14px]" src={iconArrowBlueSvg} />
                </div>
                <span className="font-normal leading-[1.4] text-[#2563eb] text-[13px] whitespace-nowrap">
                  Security
                </span>
              </div>
            </div>

            {/* Spaces to index */}
            <div className="flex flex-col gap-[10px] items-start w-full">
              <label className="font-semibold leading-[1.4] text-[#111827] text-[13px] tracking-[0.78px] whitespace-nowrap">
                SPACES TO INDEX
              </label>
              <input
                type="text"
                value={spaces}
                onChange={(e) => setSpaces(e.target.value)}
                className="bg-white border border-[#d1d5db] px-[18px] py-[14px] rounded-[10px] w-full font-normal leading-[1.4] text-[#111827] text-[16px] focus:border-[#3b5bdb] focus:outline-none"
              />
              <p className="font-normal leading-[1.4] text-[#6b7280] text-[13px]">
                Comma-separated space keys. Leave blank to index all.
              </p>
            </div>

            {/* Sync frequency */}
            <div className="flex flex-col gap-[10px] items-start w-full">
              <label className="font-semibold leading-[1.4] text-[#111827] text-[13px] tracking-[0.78px] whitespace-nowrap">
                SYNC FREQUENCY
              </label>
              <button
                type="button"
                className="bg-white border border-[#d1d5db] flex gap-[10px] items-center px-[18px] py-[14px] rounded-[10px] w-full cursor-pointer"
              >
                <span className="font-normal leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
                  Every 6 hours
                </span>
                <div className="flex-1 h-px" />
                <div className="relative shrink-0 size-[18px]">
                  <img alt="" className="block size-[18px]" src={iconDownSvg} />
                </div>
              </button>
            </div>

            {/* Toggles */}
            <div className="flex flex-col gap-[14px] items-start pt-[8px] w-full">
              <div className="bg-[#fafafb] border border-[#f0f1f3] flex gap-[16px] items-center px-[20px] py-[18px] rounded-[12px] w-full">
                <div className="flex flex-col gap-[3px] items-start leading-[1.4]">
                  <p className="font-semibold text-[#111827] text-[16px]">Enable reranking</p>
                  <p className="font-normal text-[#6b7280] text-[13px]">
                    Improves retrieval relevance, uses more tokens
                  </p>
                </div>
                <div className="flex-1 h-px" />
                <Toggle checked={enableReranking} onChange={setEnableReranking} />
              </div>

              <div className="bg-[#fafafb] border border-[#f0f1f3] flex gap-[16px] items-center px-[20px] py-[18px] rounded-[12px] w-full">
                <div className="flex flex-col gap-[3px] items-start leading-[1.4]">
                  <p className="font-semibold text-[#111827] text-[16px]">
                    Respect page permissions
                  </p>
                  <p className="font-normal text-[#6b7280] text-[13px]">
                    Only return content the user has access to
                  </p>
                </div>
                <div className="flex-1 h-px" />
                <Toggle checked={respectPermissions} onChange={setRespectPermissions} />
              </div>
            </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-white border-t border-[#e5e7eb] flex gap-[14px] items-center px-[40px] py-[20px] shrink-0 w-full">
            <Button label="Back" variant="Secondary" onClick={() => navigate('/')} />
            <Button
              label="Test connection"
              variant="Secondary"
              onClick={() => setStep('test')}
            />
            <div className="flex-1 h-px" />
            <Button label="Save source" onClick={() => setStep('test')} />
          </footer>
        </div>
      </div>
    </div>
  )
}
