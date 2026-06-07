import { useEffect } from "react";

const guardMessage = "Nội dung website được bảo vệ ở mức cơ bản.";

const isEditableTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
};

export function useBasicDevtoolsGuard() {
  useEffect(() => {
    const shouldEnable =
      import.meta.env.PROD || import.meta.env.VITE_ENABLE_BASIC_GUARD === "true";

    if (!shouldEnable) {
      return;
    }

    let toast: HTMLDivElement | null = null;
    let toastTimer: number | null = null;

    const showToast = () => {
      if (!toast) {
        toast = document.createElement("div");
        toast.className = "basic-guard-toast";
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");
        toast.textContent = guardMessage;
        document.body.appendChild(toast);
      }

      toast.classList.add("is-visible");

      if (toastTimer) {
        window.clearTimeout(toastTimer);
      }

      toastTimer = window.setTimeout(() => {
        toast?.classList.remove("is-visible");
      }, 1800);
    };

    const blockKeys = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const isF12 = event.key === "F12";
      const isCtrlShiftDev =
        event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key);
      const isViewSource = event.ctrlKey && key === "u";
      const isMacDevtools =
        event.metaKey && event.altKey && ["i", "j", "c"].includes(key);

      if (!(isF12 || isCtrlShiftDev || isViewSource || isMacDevtools)) {
        return;
      }

      if (isEditableTarget(event.target) && !isF12) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      showToast();
    };

    const blockContextMenu = (event: MouseEvent) => {
      if (isEditableTarget(event.target)) {
        return;
      }

      event.preventDefault();
      showToast();
    };

    const blockImageDrag = (event: DragEvent) => {
      if ((event.target as HTMLElement | null)?.tagName === "IMG") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", blockKeys, true);
    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("dragstart", blockImageDrag);

    return () => {
      document.removeEventListener("keydown", blockKeys, true);
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("dragstart", blockImageDrag);

      if (toastTimer) {
        window.clearTimeout(toastTimer);
      }

      toast?.remove();
    };
  }, []);
}
