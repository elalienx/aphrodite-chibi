// Node modules
import { useEffect, useRef, type MouseEvent } from "react";

// Project files
import useModal from "state/useModal";
import "./modal.css";

export default function Modal() {
  // Global state
  const { modal, closeModal } = useModal();
  const nativeDialogRef = useRef<HTMLDialogElement>(null);

  // Methods
  useEffect(() => {
    const dialog = nativeDialogRef.current;

    // Safeguards
    if (!dialog) return;
    if (modal && !dialog.open) dialog.showModal();
    if (!modal && dialog.open) dialog.close();
  }, [modal]);

  function closeOnBackgroundClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === nativeDialogRef.current) closeModal();
  }

  return (
    <dialog id="modal" ref={nativeDialogRef} onClick={closeOnBackgroundClick} onClose={closeModal}>
      {modal}
    </dialog>
  );
}
