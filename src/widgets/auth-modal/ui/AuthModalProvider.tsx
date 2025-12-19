"use client"
import { useAuthModal } from '@/src/features/auth/model/auth-modal.store';
import AuthModal from '@/src/features/auth/ui/AuthModal/AuthModal';

function AuthModalProvider() {
    const { isOpen } = useAuthModal();

  return isOpen && <AuthModal />;
}

export default AuthModalProvider;