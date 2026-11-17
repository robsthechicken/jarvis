import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import dotGreenSvg from '@/assets/figma/dot-green.svg'
import dotGraySvg from '@/assets/figma/dot-gray.svg'
import dotDarkSvg from '@/assets/figma/dot-dark.svg'
import iconShareSvg from '@/assets/figma/icon-share.svg'
import iconFileGraySvg from '@/assets/figma/icon-file-gray.svg'
import iconTagSvg from '@/assets/figma/icon-tag.svg'
import traceDotSvg from '@/assets/figma/trace-dot.svg'
import iconClipSvg from '@/assets/figma/icon-clip.svg'
import iconUpSvg from '@/assets/figma/icon-up.svg'
import iconPlusDarkSvg from '@/assets/figma/icon-plus-dark.svg'
import iconFileIndigoSvg from '@/assets/figma/icon-file-indigo.svg'
import iconKanbanBlueSvg from '@/assets/figma/icon-kanban-blue.svg'
import iconFileRedSvg from '@/assets/figma/icon-file-red.svg'
import iconGlobeGreenSvg from '@/assets/figma/icon-globe-green.svg'
import iconDbPurpleSvg from '@/assets/figma/icon-db-purple.svg'
import iconCodeGraySvg from '@/assets/figma/icon-code-gray.svg'
import iconDownSvg from '@/assets/figma/icon-down.svg'

const connectedSources = [
  {
    name: 'Confluence',
    subtitle: '847 pages synced',
    tileBg: 'bg-[#eef2ff]',
    icon: iconFileIndigoSvg,
  },
  {
    name: 'Jira',
    subtitle: '2.4k tickets indexed',
    tileBg: 'bg-[#eff6ff]',
    icon: iconKanbanBlueSvg,
  },
  {
    name: 'PDFs',
    subtitle: '23 documents',
    tileBg: 'bg-[#fef2f2]',
    icon: iconFileRedSvg,
  },
  {
    name: 'Web crawler',
    subtitle: 'docs.acme.io',
    tileBg: 'bg-[#f0fdf4]',
    icon: iconGlobeGreenSvg,
  },
]

const availableSources = [
  {
    name: 'PostgreSQL',
    subtitle: 'Not connected',
    tileBg: 'bg-[#f5f3ff]',
    icon: iconDbPurpleSvg,
  },
  {
    name: 'Custom API',
    subtitle: 'Not connected',
    tileBg: 'bg-[#f3f4f6]',
    icon: iconCodeGraySvg,
  },
]

const traceSteps = [
  { agent: 'Research agent', detail: 'retrieved 3 docs' },
  { agent: 'Engineer agent', detail: 'synthesized steps' },
  { agent: 'QA agent', detail: 'verified accuracy' },
]

export function ChatPage() {
  const navigate = useNavigate()
  const [prompt, setPrompt] = useState('')
  const [extraMessages, setExtraMessages] = useState<Array<{ id: string; text: string; time: string }>>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (extraMessages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [extraMessages])

  const handleSend = (e: FormEvent) => {
    e.preventDefault()
    if (!prompt.trim()) return
    setExtraMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: prompt.trim(), time: 'Just now' },
    ])
    setPrompt('')
  }

  return (
    <div className="flex flex-1 h-full min-h-0 w-full items-stretch overflow-hidden">
      {/* Center Conversation Column */}
      <div className="flex flex-1 flex-col h-full min-h-0 min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-[#e5e7eb] flex gap-[12px] items-center px-[32px] py-[22px] shrink-0 w-full">
          <h1 className="font-semibold leading-[1.4] text-[#111827] text-[19px] whitespace-nowrap">
            Engineering Assistant
          </h1>
          <div className="bg-[#f3f4f6] border border-[#e5e7eb] flex gap-[8px] items-center px-[12px] py-[5px] rounded-[99px] shrink-0">
            <div className="relative shrink-0 size-[8px]">
              <img alt="" className="block size-[8px]" src={dotGreenSvg} />
            </div>
            <span className="font-medium leading-[1.4] text-[#374151] text-[13px] whitespace-nowrap">
              4 sources active
            </span>
          </div>
          <div className="flex-1 h-px" />
          <button type="button" className="relative shrink-0 size-[20px] cursor-pointer">
            <img alt="Share" className="block size-[20px]" src={iconShareSvg} />
          </button>
        </header>

        {/* Messages */}
        <div className="flex flex-1 flex-col gap-[10px] items-start min-h-0 overflow-y-auto pb-[24px] pt-[36px] px-[40px] w-full">
          {/* User Message */}
          <div className="flex gap-[16px] items-start w-full">
            <div className="bg-white border border-[#e5e7eb] flex flex-1 flex-col items-start min-w-0 px-[20px] py-[16px] rounded-[14px]">
              <p className="font-normal leading-[1.4] text-[#111827] text-[16px]">
                What are the deployment steps for Project X?
              </p>
            </div>
            <div className="bg-[#e8eeff] flex items-center justify-center rounded-[17px] shrink-0 size-[34px]">
              <span className="font-medium leading-[1.4] text-[#3b5bdb] text-[14.28px]">A</span>
            </div>
          </div>

          {/* Timestamp */}
          <div className="flex items-start pr-[50px] w-full">
            <div className="flex-1 h-px" />
            <p className="font-normal leading-[1.4] text-[#9ca3af] text-[12px] whitespace-nowrap">
              10:42 AM
            </p>
          </div>

          {/* Assistant Message */}
          <div className="flex gap-[16px] items-start pr-[40px] pt-[16px] w-full">
            <div className="bg-[#0b1220] flex items-center justify-center rounded-[18px] shrink-0 size-[36px]">
              <span className="font-medium leading-[1.4] text-[15.12px] text-white">J</span>
            </div>

            <div className="flex flex-1 flex-col gap-[12px] items-start min-w-0">
              {/* Main response card */}
              <div className="bg-white border border-[#e5e7eb] flex flex-col gap-[14px] items-start px-[22px] py-[20px] rounded-[14px] w-full">
                <p className="font-normal leading-[26px] text-[#111827] text-[16px] w-full">
                  Here are the deployment steps for Project X, based on the latest Confluence runbook and Jira tickets:
                </p>

                <div className="flex flex-col gap-[12px] items-start pl-[20px] text-[15px] w-full">
                  <div className="flex flex-col gap-[2px] items-start w-full">
                    <p className="font-semibold leading-[1.4] text-[#111827]">
                      Pre-deploy checks
                    </p>
                    <p className="font-normal leading-[22px] text-[#374151]">
                      Ensure all CI tests pass in the staging environment.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[2px] items-start w-full">
                    <p className="font-semibold leading-[1.4] text-[#111827]">
                      Database migration
                    </p>
                    <p className="font-normal leading-[22px] text-[#374151]">
                      Run the migrate-prod script for the new schema updates.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[2px] items-start w-full">
                    <p className="font-semibold leading-[1.4] text-[#111827]">
                      Service rollout
                    </p>
                    <p className="font-normal leading-[22px] text-[#374151]">
                      Deploy the microservices via Kubernetes using the blue-green strategy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Citations */}
              <button
                type="button"
                className="bg-white border border-[#e5e7eb] flex gap-[8px] items-center px-[12px] py-[7px] rounded-[99px] shrink-0 hover:bg-[#f9fafb] cursor-pointer"
              >
                <div className="relative shrink-0 size-[15px]">
                  <img alt="" className="block size-[15px]" src={iconFileGraySvg} />
                </div>
                <span className="font-medium leading-[1.4] text-[#374151] text-[13px] whitespace-nowrap">
                  Confluence: Deploy Runbook
                </span>
              </button>

              <button
                type="button"
                className="bg-white border border-[#e5e7eb] flex gap-[8px] items-center px-[12px] py-[7px] rounded-[99px] shrink-0 hover:bg-[#f9fafb] cursor-pointer"
              >
                <div className="relative shrink-0 size-[15px]">
                  <img alt="" className="block size-[15px]" src={iconTagSvg} />
                </div>
                <span className="font-medium leading-[1.4] text-[#374151] text-[13px] whitespace-nowrap">
                  PROJ-481
                </span>
              </button>

              {/* Agent trace */}
              <div className="bg-[#fbfbfc] border border-[#e5e7eb] flex flex-col gap-[14px] items-start px-[22px] py-[20px] rounded-[14px] shrink-0">
                <p className="font-medium leading-[1.4] text-[#4b5563] text-[14px] whitespace-nowrap">
                  Agent trace
                </p>

                {traceSteps.map((step) => (
                  <div key={step.agent} className="flex gap-[12px] items-start">
                    <div className="h-[14px] relative shrink-0 w-[7px]">
                      <img alt="" className="block h-[14px] w-[7px]" src={traceDotSvg} />
                    </div>
                    <div className="flex flex-col gap-[2px] items-start leading-[1.4] whitespace-nowrap">
                      <p className="font-medium text-[#111827] text-[15px]">{step.agent}</p>
                      <p className="font-normal text-[#6b7280] text-[14px]">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-normal leading-[1.4] text-[#9ca3af] text-[12px] whitespace-nowrap">
                10:43 AM
              </p>
            </div>
          </div>

          {/* Interactive user-sent messages */}
          {extraMessages.map((msg) => (
            <div key={msg.id} className="w-full space-y-[10px] pt-2">
              <div className="flex gap-[16px] items-start w-full">
                <div className="bg-white border border-[#e5e7eb] flex flex-1 flex-col items-start min-w-0 px-[20px] py-[16px] rounded-[14px]">
                  <p className="font-normal leading-[1.4] text-[#111827] text-[16px]">{msg.text}</p>
                </div>
                <div className="bg-[#e8eeff] flex items-center justify-center rounded-[17px] shrink-0 size-[34px]">
                  <span className="font-medium leading-[1.4] text-[#3b5bdb] text-[14.28px]">A</span>
                </div>
              </div>
              <div className="flex items-start pr-[50px] w-full">
                <div className="flex-1 h-px" />
                <p className="font-normal leading-[1.4] text-[#9ca3af] text-[12px] whitespace-nowrap">
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Composer */}
        <div className="bg-white border-t border-[#e5e7eb] flex flex-col gap-[10px] items-center pb-[16px] pt-[18px] px-[40px] shrink-0 w-full">
          <form
            onSubmit={handleSend}
            className="bg-[#fbfbfc] border border-[#e5e7eb] flex gap-[14px] items-center pl-[20px] pr-[10px] py-[10px] rounded-[14px] w-full"
          >
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Jarvis searches across your active sources…"
              className="flex-1 bg-transparent font-normal leading-[1.4] text-[#111827] placeholder-[#9ca3af] text-[16px] focus:outline-none"
            />
            <button type="button" className="relative shrink-0 size-[20px] cursor-pointer">
              <img alt="Attach" className="block size-[20px]" src={iconClipSvg} />
            </button>
            <button
              type="submit"
              className="bg-[#0b1220] hover:bg-[#1e293b] flex items-center justify-center rounded-[10px] shrink-0 size-[40px] cursor-pointer transition-colors"
            >
              <div className="relative shrink-0 size-[18px]">
                <img alt="Send" className="block size-[18px]" src={iconUpSvg} />
              </div>
            </button>
          </form>
          <p className="font-normal leading-[1.4] text-[#9ca3af] text-[12px] whitespace-nowrap">
            Use @mention a source to narrow the search
          </p>
        </div>
      </div>

      {/* Right Data Sources Panel */}
      <aside className="bg-white border-l border-[#e5e7eb] flex flex-col gap-[14px] h-full min-h-0 items-start p-[24px] shrink-0 w-[340px] overflow-y-auto">
        <div className="flex items-center w-full">
          <p className="font-semibold leading-[1.4] text-[#111827] text-[17px] whitespace-nowrap">
            Data sources
          </p>
          <div className="flex-1 h-px" />
          <button
            type="button"
            onClick={() => navigate('/sources')}
            className="border border-[#d1d5db] hover:bg-[#f9fafb] flex gap-[6px] items-center px-[12px] py-[6px] rounded-[8px] shrink-0 cursor-pointer transition-colors"
          >
            <div className="relative shrink-0 size-[15px]">
              <img alt="" className="block size-[15px]" src={iconPlusDarkSvg} />
            </div>
            <span className="font-medium leading-[1.4] text-[#111827] text-[14px] whitespace-nowrap">
              Add
            </span>
          </button>
        </div>

        {/* Connected */}
        <div className="flex flex-col gap-[12px] items-start pt-[10px] w-full">
          <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
            CONNECTED
          </p>

          {connectedSources.map((src) => (
            <div
              key={src.name}
              onClick={() => navigate('/sources')}
              className="bg-white border border-[#ecedef] hover:border-[#d1d5db] flex gap-[14px] items-center px-[16px] py-[14px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.04)] w-full cursor-pointer transition-colors"
            >
              <div
                className={`${src.tileBg} flex items-center justify-center rounded-[9.12px] shrink-0 size-[38px]`}
              >
                <div className="relative shrink-0 size-[20px]">
                  <img alt="" className="block size-[20px]" src={src.icon} />
                </div>
              </div>
              <div className="flex flex-col gap-[2px] items-start leading-[1.4] whitespace-nowrap">
                <p className="font-medium text-[#111827] text-[15px]">{src.name}</p>
                <p className="font-normal text-[#6b7280] text-[12px]">{src.subtitle}</p>
              </div>
              <div className="flex-1 h-px" />
              <div className="relative shrink-0 size-[8px]">
                <img alt="" className="block size-[8px]" src={dotGreenSvg} />
              </div>
            </div>
          ))}
        </div>

        {/* Available */}
        <div className="flex flex-col gap-[12px] items-start pt-[20px] w-full">
          <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
            AVAILABLE
          </p>

          {availableSources.map((src) => (
            <div
              key={src.name}
              onClick={() => navigate('/sources')}
              className="bg-white border border-[#ecedef] flex gap-[14px] items-center opacity-55 hover:opacity-80 px-[16px] py-[14px] rounded-[12px] w-full cursor-pointer transition-opacity"
            >
              <div
                className={`${src.tileBg} flex items-center justify-center rounded-[9.12px] shrink-0 size-[38px]`}
              >
                <div className="relative shrink-0 size-[20px]">
                  <img alt="" className="block size-[20px]" src={src.icon} />
                </div>
              </div>
              <div className="flex flex-col gap-[2px] items-start leading-[1.4] whitespace-nowrap">
                <p className="font-medium text-[#111827] text-[15px]">{src.name}</p>
                <p className="font-normal text-[#6b7280] text-[12px]">{src.subtitle}</p>
              </div>
              <div className="flex-1 h-px" />
              <div className="relative shrink-0 size-[8px]">
                <img alt="" className="block size-[8px]" src={dotGraySvg} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 min-h-px w-px" />

        {/* Model Selector */}
        <div className="flex flex-col gap-[10px] items-start w-full">
          <p className="font-medium leading-[1.4] text-[#6b7280] text-[12px] tracking-[0.96px] whitespace-nowrap">
            MODEL
          </p>
          <button
            type="button"
            className="border border-[#d1d5db] hover:bg-[#f9fafb] flex gap-[10px] items-center px-[14px] py-[12px] rounded-[10px] w-full cursor-pointer transition-colors"
          >
            <div className="relative shrink-0 size-[8px]">
              <img alt="" className="block size-[8px]" src={dotDarkSvg} />
            </div>
            <span className="font-medium leading-[1.4] text-[#111827] text-[15px] whitespace-nowrap">
              GPT-4 Turbo
            </span>
            <div className="flex-1 h-px" />
            <div className="relative shrink-0 size-[18px]">
              <img alt="" className="block size-[18px]" src={iconDownSvg} />
            </div>
          </button>
        </div>
      </aside>
    </div>
  )
}
