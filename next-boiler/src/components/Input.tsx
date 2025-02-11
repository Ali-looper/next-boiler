"use client"

import { ChangeEventHandler, FC, ReactNode, useCallback, useRef } from "react"


type props = {
  onChange: ChangeEventHandler<HTMLInputElement>,
  value: string,
  type: 'text' | 'email'
  leftIcon?: ReactNode
}

const Input: FC<props> = ({ onChange, value, type, leftIcon }) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const focusInputElement = useCallback(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div tabIndex={0} onClick={focusInputElement} className="w-[320px] h-[64px] rounded-[10px]  outline-none border border-[#92A7BE] p-[20px] flex justify-center items-center gap-3 cursor-text focus-within:border-2">
      {leftIcon && <div className="w-6 h-6">
        {leftIcon}
      </div>}
      <input ref={inputRef} className="outline-none h-7 w-full" value={value} onChange={onChange} type={type}/>

    </div>
  )
}

export default Input