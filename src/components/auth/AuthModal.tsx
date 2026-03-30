"use client";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import VerifyForm from "./VerifyForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import PreferencesForm from "./PreferencesForm";
import { useState, useRef, useEffect } from "react";

type Mode = "login" | "signup" | "verify" | "forgot" | "preferences";

type Props = {
  open: boolean;
  mode: Mode;
  setMode: (m: Mode) => void;
  onClose: () => void;
};

export default function AuthModal({ open, mode, setMode, onClose }: Props) {
  const [emailForVerify, setEmailForVerify] = useState("");
  const [verifySource, setVerifySource] = useState<"signup" | "login">("login");
  const mouseDownOnBackdrop = useRef(false);

  // ESC to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 font-sans"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          mouseDownOnBackdrop.current = true;
        }
      }}
      onMouseUp={(e) => {
        if (mouseDownOnBackdrop.current && e.target === e.currentTarget) {
          onClose();
        }
        mouseDownOnBackdrop.current = false;
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white shadow-2xl flex flex-col gap-5 overflow-hidden p-5"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="flex flex-col gap-5">
          {/* Close */}
          <button
            onClick={onClose}
            className="self-end cursor-pointer w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all text-sm"
          >
            ✕
          </button>

        {mode === "login" && (
          <LoginForm
            setMode={setMode}
            onLoginSuccess={(email) => {
              setEmailForVerify(email);
              setVerifySource("login");
              setMode("verify");
            }}
          />
        )}
        {mode === "signup" && (
          <SignupForm
            setMode={setMode}
            onSignupSuccess={(email) => {
              setEmailForVerify(email);
              setVerifySource("signup");
              setMode("verify");
            }}
          />
        )}
        {mode === "verify" && (
          <VerifyForm
            email={emailForVerify}
            setMode={setMode}
            onVerifySuccess={() => {
              if (verifySource === "signup") {
                setMode("preferences");
              } else {
                setMode("login");
              }
            }}
          />
        )}
        {mode === "preferences" && (
          <PreferencesForm
            email={emailForVerify}
            onSave={() => setMode("login")}
            onSkip={() => setMode("login")}
          />
        )}
        {mode === "forgot" && (
          <ForgotPasswordForm setMode={setMode} />
        )}
        </div>
      </div>
    </div>
  );
}
