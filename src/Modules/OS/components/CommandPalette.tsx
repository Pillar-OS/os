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

const CommandPalette: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    osEvents.on('openCommandPalette', () => onOpen())
  }, [onOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Input
            type="text"
            placeholder="Enter a command or query"
            // onChange={(e) => setQuery(e.target.value)}
            // onKeyUp={handleKeyPress}
          />
          {/* {suggestions && suggestions.commands && (
              <div>
                <h3>Commands</h3>
                <ul>
                  {suggestions.commands.map((command) => (
                    <li key={command.command}>{command.command}</li>
                  ))}
                </ul>
              </div>
            )} */}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CommandPalette
