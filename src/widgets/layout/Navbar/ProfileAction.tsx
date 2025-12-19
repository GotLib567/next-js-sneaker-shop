"use client";
import styles from "./Navbar.module.css";
import { UserRound } from "lucide-react";
import { useAuthModal } from "@/src/features/auth/model/auth-modal.store";

export function ProfileAction() {
  const open = useAuthModal((s) => s.open);

  return (
    <button
      type="button"
      className={styles.actionButton}
      aria-label="Профиль"
      onClick={() => open("login")}
    >
      <UserRound className={styles.actionIcon} />
    </button>
  );
}
