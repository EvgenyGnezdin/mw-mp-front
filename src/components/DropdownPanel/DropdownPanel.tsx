import { useState, useCallback, useRef } from 'react'


import { Wrapper, DropdownWrapper } from './styled'
import { useOnClickOutsidetsts } from 'helpers/hooks/useOnClickOutside'


interface I_DropdownPanel {
  toggler: (props: any) => React.ReactElement
  children: React.ReactElement
  toLeft?: boolean
}

const DropdownPanel: React.FC<I_DropdownPanel> = ({
  toggler,
  children,
  toLeft = false,
}: I_DropdownPanel) => {
  const dropdownWrapperRef = useRef(null)

  const [ isVisible, setIsVisible ] = useState<boolean>(false)

  const toggleVisibility = useCallback(() => {
    setIsVisible((isVisible) => !isVisible)
  }, [])

  useOnClickOutsidetsts(dropdownWrapperRef, toggleVisibility)


  const Toggler = toggler


  return (
    <Wrapper>
      <Toggler onClick={toggleVisibility} />

      {isVisible && (
        <DropdownWrapper
          ref={dropdownWrapperRef}
          toLeft={toLeft}
        >
          {children}
        </DropdownWrapper>
      )}
    </Wrapper>
  )
}

export default DropdownPanel