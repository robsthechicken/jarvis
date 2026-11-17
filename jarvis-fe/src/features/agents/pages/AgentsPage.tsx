import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Toggle } from '@/components/ui/Toggle'
import iconRightSvg from '@/assets/figma/icon-right.svg'
import iconXSvg from '@/assets/figma/icon-x.svg'
import iconCodeDarkSvg from '@/assets/figma/icon-code-dark.svg'
import iconEyeIndigoSvg from '@/assets/figma/icon-eye-indigo.svg'
import iconSearchGreenSvg from '@/assets/figma/icon-search-green.svg'
import iconPencilRedSvg from '@/assets/figma/icon-pencil-red.svg'
import iconChartPinkSvg from '@/assets/figma/icon-chart-pink.svg'
import iconCodeAmberSvg from '@/assets/figma/icon-code-amber.svg'
import iconSunSvg from '@/assets/figma/icon-sun.svg'
import iconFileIndigoSvg from '@/assets/figma/icon-file-indigo.svg'
import iconKanbanBlueSvg from '@/assets/figma/icon-kanban-blue.svg'
import iconGlobeGreenSvg from '@/assets/figma/icon-globe-green.svg'
import iconTermDarkSvg from '@/assets/figma/icon-term-dark.svg'
import iconFileRedSvg from '@/assets/figma/icon-file-red.svg'
import iconDbPurpleSvg from '@/assets/figma/icon-db-purple.svg'
import radioCheckedSvg from '@/assets/figma/radio-checked.svg'
import radioUncheckedSvg from '@/assets/figma/radio-unchecked.svg'
import iconDownSvg from '@/assets/figma/icon-down.svg'
import { cn } from '@/utils/cn'

const avatarOptions = [
  { id: 'code-dark', bg: 'bg-white', icon: iconCodeDarkSvg },
  { id: 'eye', bg: 'bg-[#eef2ff]', icon: iconEyeIndigoSvg },
  { id: 'search', bg: 'bg-[#f0fdf4]', icon: iconSearchGreenSvg },
  { id: 'pencil', bg: 'bg-[#fef2f2]', icon: iconPencilRedSvg },
  { id: 'chart', bg: 'bg-[#fdf4ff]', icon: iconChartPinkSvg },
  { id: 'code-amber', bg: 'bg-[#fffbeb]', icon: iconCodeAmberSvg },
]

const toolItems = [
  { id: 'confluence', name: 'Confluence', icon: iconFileIndigoSvg },
  { id: 'jira', name: 'Jira', icon: iconKanbanBlueSvg },
  { id: 'web', name: 'Web search', icon: iconGlobeGreenSvg },
  { id: 'code', name: 'Code exec', icon: iconTermDarkSvg },
  { id: 'pdfs', name: 'PDFs', icon: iconFileRedSvg },
  { id: 'postgres', name: 'PostgreSQL', icon: iconDbPurpleSvg },
]

export function AgentsPage() {
  const navigate = useNavigate()
  const [selectedAvatar, setSelectedAvatar] = useState('code-dark')
  const [agentName, setAgentName] = useState('')
  const [roleSummary, setRoleSummary] = useState('')
  const [systemPrompt, setSystemPrompt] = useState(
    'You are a senior security engineer. Review code changes, architecture decisions, and configurations for…',
  )
  const [selectedTools, setSelectedTools] = useState<string[]>(['confluence'])
  const [activateImmediately, setActivateImmediately] = useState(false)

  const toggleTool = (id: string) => {
    setSelectedTools((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  return (
    <div className="flex flex-1 flex-col h-full min-h-0 w-full items-start overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-[#e5e7eb] flex gap-[10px] items-center px-[32px] py-[22px] shrink-0 w-full">
        <span className="font-normal leading-[1.4] text-[#6b7280] text-[16px] whitespace-nowrap">
          Agents
        </span>
        <div className="relative shrink-0 size-[16px]">
          <img alt="" className="block size-[16px]" src={iconRightSvg} />
        </div>
        <span className="font-semibold leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
          New agent
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
      <div className="flex flex-1 flex-col gap-[28px] items-center min-h-0 overflow-y-auto py-[40px] w-full">
        {/* Identity Card */}
        <div className="bg-white border border-[#e5e7eb] flex flex-col gap-[20px] items-start p-[32px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-[1040px]">
          <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
            IDENTITY
          </p>

          <div className="flex gap-[40px] items-start w-full">
            {/* Avatar Picker */}
            <div className="flex flex-col gap-[12px] items-start shrink-0">
              <p className="font-medium leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
                Avatar
              </p>
              <div className="flex gap-[10px] items-start">
                {avatarOptions.map((opt) => {
                  const isSelected = selectedAvatar === opt.id
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedAvatar(opt.id)}
                      className={cn(
                        'flex items-center justify-center rounded-[12px] shrink-0 size-[50px] cursor-pointer transition-all',
                        opt.bg,
                        isSelected
                          ? 'border-2 border-[#111827]'
                          : 'border border-[#ecedef] hover:border-[#d1d5db]',
                      )}
                    >
                      <div className="relative shrink-0 size-[22px]">
                        <img alt="" className="block size-[22px]" src={opt.icon} />
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Name & Role Inputs */}
            <div className="flex flex-1 flex-col gap-[22px] items-start min-w-0">
              <div className="flex flex-col gap-[10px] items-start w-full">
                <label className="font-medium leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
                  Agent name
                </label>
                <input
                  type="text"
                  value={agentName}
                  onChange={(e) => setAgentName(e.target.value)}
                  placeholder="e.g. Security Specialist"
                  className="bg-white border border-[#d1d5db] px-[18px] py-[14px] rounded-[10px] w-full font-normal leading-[1.4] text-[#111827] placeholder-[#9ca3af] text-[16px] focus:border-[#3b5bdb] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-[10px] items-start w-full">
                <label className="font-medium leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
                  Role summary
                </label>
                <input
                  type="text"
                  value={roleSummary}
                  onChange={(e) => setRoleSummary(e.target.value)}
                  placeholder="e.g. Reviews code for…"
                  className="bg-white border border-[#d1d5db] px-[18px] py-[14px] rounded-[10px] w-full font-normal leading-[1.4] text-[#111827] placeholder-[#9ca3af] text-[16px] focus:border-[#3b5bdb] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* System Prompt Card */}
        <div className="bg-white border border-[#e5e7eb] flex flex-col gap-[20px] items-start p-[32px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-[1040px]">
          <div className="flex items-center w-full">
            <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
              SYSTEM PROMPT
            </p>
            <div className="flex-1 h-px" />
            <button
              type="button"
              className="bg-white border border-[#d1d5db] hover:bg-[#f9fafb] flex gap-[8px] items-center px-[14px] py-[9px] rounded-[10px] shrink-0 cursor-pointer"
            >
              <div className="relative shrink-0 size-[16px]">
                <img alt="" className="block size-[16px]" src={iconSunSvg} />
              </div>
              <span className="font-semibold leading-[1.4] text-[#111827] text-[14px] whitespace-nowrap">
                Generate from role
              </span>
            </button>
          </div>

          <textarea
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            rows={5}
            className="bg-white border border-[#d1d5db] h-[180px] px-[22px] py-[20px] rounded-[10px] w-full font-normal leading-[26px] text-[#111827] text-[16px] resize-none focus:border-[#3b5bdb] focus:outline-none"
          />

          <p className="font-normal leading-[1.4] text-[#6b7280] text-[13px]">
            The system prompt shapes how this agent reasons and responds in every interaction.
          </p>
        </div>

        {/* Tools & Data Sources Card */}
        <div className="bg-white border border-[#e5e7eb] flex flex-col gap-[20px] items-start p-[32px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-[1040px]">
          <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
            TOOLS &amp; DATA SOURCES
          </p>

          <div className="grid grid-cols-3 gap-[16px] w-full">
            {toolItems.map((tool) => {
              const isSelected = selectedTools.includes(tool.id)
              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => toggleTool(tool.id)}
                  className={cn(
                    'bg-white flex gap-[12px] items-center p-[18px] rounded-[12px] cursor-pointer transition-all',
                    isSelected
                      ? 'border-2 border-[#111827]'
                      : 'border border-[#e5e7eb] hover:border-[#d1d5db]',
                  )}
                >
                  <div className="relative shrink-0 size-[19px]">
                    <img alt="" className="block size-[19px]" src={tool.icon} />
                  </div>
                  <span className="font-medium leading-[1.4] text-[#111827] text-[17px] whitespace-nowrap">
                    {tool.name}
                  </span>
                  <div className="flex-1 h-px" />
                  <div className="relative shrink-0 size-[20px]">
                    <img
                      alt=""
                      className="block size-[20px]"
                      src={isSelected ? radioCheckedSvg : radioUncheckedSvg}
                    />
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Collaboration Card */}
        <div className="bg-white border border-[#e5e7eb] flex flex-col gap-[20px] items-start p-[32px] rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-[1040px]">
          <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
            COLLABORATION
          </p>

          <div className="flex flex-col gap-[10px] items-start w-full">
            <label className="font-medium leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
              Receives context from
            </label>
            <button
              type="button"
              className="bg-white border border-[#d1d5db] flex gap-[10px] items-center px-[18px] py-[14px] rounded-[10px] w-full cursor-pointer"
            >
              <span className="font-normal leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
                None - standalone agent
              </span>
              <div className="flex-1 h-px" />
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="block size-[18px]" src={iconDownSvg} />
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-[10px] items-start w-full">
            <label className="font-medium leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
              Hands off to
            </label>
            <button
              type="button"
              className="bg-white border border-[#d1d5db] flex gap-[10px] items-center px-[18px] py-[14px] rounded-[10px] w-full cursor-pointer"
            >
              <span className="font-normal leading-[1.4] text-[#111827] text-[16px] whitespace-nowrap">
                None - terminal agent
              </span>
              <div className="flex-1 h-px" />
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="block size-[18px]" src={iconDownSvg} />
              </div>
            </button>
          </div>

          <div className="flex items-center pt-[10px] w-full">
            <div className="flex flex-col gap-[3px] items-start leading-[1.4]">
              <p className="font-medium text-[#111827] text-[17px]">Activate immediately</p>
              <p className="font-normal text-[#6b7280] text-[13px]">
                Enable this agent on all new queries
              </p>
            </div>
            <div className="flex-1 h-px" />
            <Toggle checked={activateImmediately} onChange={setActivateImmediately} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e5e7eb] flex gap-[14px] items-center px-[40px] py-[20px] shrink-0 w-full">
        <Button label="Cancel" variant="Secondary" onClick={() => navigate('/')} />
        <div className="flex-1 h-px" />
        <Button label="Save as draft" variant="Secondary" onClick={() => navigate('/')} />
        <Button label="Create agent" onClick={() => navigate('/')} />
      </footer>
    </div>
  )
}
