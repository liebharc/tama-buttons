import React from "react";
import { Button, styled } from 'tamagui';

import { getSpace } from '@tamagui/get-token'
import type { SizeTokens, VariantSpreadExtras } from '@tamagui/web'

const sizeToContent = -1;

// Copied from https://github.com/tamagui/tamagui/blob/3e1d1a0ec3cd4522e972de2ea53f54be31e92783/packages/get-button-sized/src/index.ts#L4
// and changed height calculation
// Also refer to https://tamagui.dev/docs/guides/how-to-build-a-button
const getButtonSized = (
  val: SizeTokens | number,
  { tokens, props }: VariantSpreadExtras<any>
) => {
  if (typeof val === 'number') {
    return {
      paddingHorizontal: val * 0.25,
      height: sizeToContent,
      minHeight: val,
      borderRadius: props.circular ? 100_000 : val * 0.2,
    }
  }
  const xSize = getSpace(val)
  const radiusToken = tokens.radius[val] ?? tokens.radius['$true']
  return {
    paddingHorizontal: xSize,
    height: sizeToContent,
    minHeight: val,
    borderRadius: props.circular ? 100_000 : radiusToken,
  }
}

export default styled(Button, {
  backgroundColor: '$secondary', 
  variants: {
    size: {
        '...size': getButtonSized,
      } as const,
  }, 
});