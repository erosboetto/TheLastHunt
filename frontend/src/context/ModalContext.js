import { createContext } from 'react';

const ModalContext = createContext({
  isAuthModalOpen: false,
  toggleAuthModal: () => {},
});

export default ModalContext;
