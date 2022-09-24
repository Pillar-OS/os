import { FC, useEffect } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Input
} from '@chakra-ui/react'
import { osEvents } from '../events'
import { setCommandPaletteQuery, suggestions } from '../store'
import { useStore } from '@nanostores/react'

const CommandPalette: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const _suggestions = useStore(suggestions)

  useEffect(() => {
    osEvents.on('openCommandPalette', () => onOpen())
  }, [onOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <>
            <Input
              type="text"
              placeholder="Enter a command or query"
              onChange={(e) => setCommandPaletteQuery(e.target.value)}
              // onKeyUp={handleKeyPress}
            />
            {_suggestions.map((suggestion) => {
              return suggestion.query
            })}
          </>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CommandPalette
