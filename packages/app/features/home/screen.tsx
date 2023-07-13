import {
  Anchor,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import Button from './Button'

import { Activity, Airplay } from '@tamagui/lucide-icons'
import { XGroup } from 'tamagui'

const repeatFactor = 50;

export function ButtonDemo(props) {
  return (
    <YStack padding="$3" space="$15" {...props}>
      <Button backgroundColor="red" size="$5">{"Plain ".repeat(repeatFactor)}</Button>
      <Button backgroundColor="red" alignSelf="center" icon={Airplay} size="$6">
        {"Large ".repeat(repeatFactor)}
      </Button>
      <XStack space="$2" justifyContent="center">
        <Button size="$3" theme="alt2">
          {"Alt2 ".repeat(repeatFactor)}
        </Button>
        <Button size="$3" theme="yellow">
          {"Yellow ".repeat(repeatFactor)}
        </Button>
      </XStack>
      <XStack space="$2">
        <Button themeInverse size="$3">
          {"Inverse ".repeat(repeatFactor)}
        </Button>
        <Button iconAfter={Activity} size="$3">
          {"iconAfter ".repeat(repeatFactor)}
        </Button>
      </XStack>
      <XGroup>
        <XGroup.Item>
          <Button width="50%" size="$2" disabled opacity={0.5}>
            {"disabled ".repeat(repeatFactor)}
          </Button>
        </XGroup.Item>

        <XGroup.Item>
          <Button width="50%" size="$2" chromeless>
            {"chromeless ".repeat(repeatFactor)}
          </Button>
        </XGroup.Item>
      </XGroup>
    </YStack>
  )
}


export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>

      <ButtonDemo />

      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
