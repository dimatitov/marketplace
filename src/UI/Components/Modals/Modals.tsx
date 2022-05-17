import React, { FC } from "react";
import { noop } from "lodash";
import { useDispatch } from "react-redux";

import { MODALS } from "constants/modals";

import { useStore, IStore } from "Core/store";
import { IModalProps } from "Core/UIState/Modals";

// в значение ставится компонент тела модакли
const MAP_NAMES_TO_COMPONENTS = {
  [MODALS.SOCIAL_SIDEBAR]: noop,
};

export const Modals = () => {
  const dispatch = useDispatch();
  const { store, actions } = useStore((store: IStore) => ({
    Modals: store.ModalsEntity,
  }));
  const { modalProps, openedModal } = store.Modals;
  const OpenedModal = MAP_NAMES_TO_COMPONENTS[openedModal] as FC<IModalProps>;

  const close = () => {
    dispatch(actions.Modals.close());
  };

  return OpenedModal ? (
    <OpenedModal
      onClose={close}
      onConfirm={modalProps.onConfirm}
      onCancel={modalProps.onCancel}
      modalTitle={modalProps.modalTitle}
      tooltip={modalProps.tooltip}
    />
  ) : null;
};
