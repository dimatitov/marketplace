import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { map } from "lodash";

import { UserEntity } from "Core/User/UserEntity";
import { ModalsEntity } from "Core/UIState/Modals";

import { IUserInteractor, UserInteractor } from "Core/User/UserInteractor";

export const store = configureStore({
  reducer: {
    UserEntity: UserEntity.reducer,
    ModalsEntity: ModalsEntity.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      // ToDo Тут будет состояние модалки и тд.
      serializableCheck: {
        ignoredPaths: ["ModalsEntity"],
        ignoredActions: map(ModalsEntity.actions, (action) => action.type),
      },
    }),
  ],
});

export type IStore = ReturnType<typeof store.getState>;

interface IActions {
  User: typeof UserEntity.actions;
  Modals: typeof ModalsEntity.actions;
}

export const actions: IActions = {
  User: UserEntity.actions,
  Modals: ModalsEntity.actions,
};

interface IAsyncActions {
  User: IUserInteractor;
}

export const asyncActions: IAsyncActions = {
  User: UserInteractor,
};

export const useStore = <T>(
  selector: (store: IStore) => T,
): { store: T; actions: IActions; asyncActions: IAsyncActions } => {
  return {
    actions,
    asyncActions,
    store: useSelector(selector),
  };
};
