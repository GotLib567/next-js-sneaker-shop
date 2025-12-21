"use client";
import styles from "./Navbar.module.css";
import { UserRound } from "lucide-react";
import { useAuthModal } from "@/src/features/auth/model/auth-modal.store";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";
import Link from "next/link";


export function ProfileAction() {
  const open = useAuthModal((s) => s.open);
  const { data: session } = useSession();

  return !session?.user ? (
    <button
      type="button"
      className={styles.actionButton}
      aria-label="Профиль"
      onClick={() => open("login")}
    >
      <UserRound className={styles.actionIcon} />
    </button>
  ) : (
    <Link
      className={styles.actionButton}
      aria-label="Профиль"
      href="/my-account"
    >
      <UserRound className={styles.actionIcon} />
    </Link>
  );
}
