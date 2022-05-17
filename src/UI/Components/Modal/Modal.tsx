import { FC, Fragment, ReactNode, useRef } from "react";
import { createPortal } from "react-dom";
import { noop } from "lodash";
import { ModalType, SidebarPosition } from "Components/Modal/Modal.constants";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";

export interface ModalProps {
  width?: number;
  height?: number;
  onClose?: () => void;
  title?: string;
  extraTitle?: string;
  modalType: ModalType;
  sidebarPosition?: SidebarPosition;
  children: ReactNode;
}

// ToDO пока на стопе так как нет модалок, будут в дальнейшем, логика дописанна не до конца. Но в принципе это как таковая обертка в которой есть возможность открыать и сайдбар и обычные модалки. Стили не написаны так как нет дизайна. Чилдреном является тело модалки
// обертка тела модалки
export const Modal: FC<ModalProps> = ({
  height,
  width,
  onClose = noop,
  children,
  title,
  extraTitle,
  modalType,
}) => {
  const modalRootNode = document.getElementById("modal-root");
  if (!modalRootNode) {
    throw new Error("DOM Node with id 'modal-root' does not found");
  }
  const modalRef = useRef<HTMLDivElement>(null);
  // хук для закрывания модалки если кликнул не по ней
  useOnClickOutside(modalRef, onClose);
  return createPortal(
    <Fragment>
      <div
        ref={modalRef}
        style={{
          width: width && `${width}px`,
          height: height && `${height}px`,
        }}
      >
        {ModalType.MODAL && <h1>Modal</h1>}
        {ModalType.SIDEBAR && <h1>Sidebar</h1>}
        <p>{title}</p>
        {children}
      </div>
    </Fragment>,
    document.getElementById("modal-root") as HTMLElement,
  );
};
