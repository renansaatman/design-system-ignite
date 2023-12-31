import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(TooltipPrimitive.Content, {
  padding: '$3 $4',
  color: '$gray100',
  backgroundColor: '$gray900',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$xs',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',

  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$gray900',
})
