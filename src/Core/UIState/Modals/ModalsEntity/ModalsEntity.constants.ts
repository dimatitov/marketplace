import { noop } from "lodash";

export const DEFAULT_MODAL_PROPS = {
  onConfirm: noop,
  onCancel: noop,
  modalTitle: "",
  tooltip: "",
};
