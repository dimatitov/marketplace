import { default as JSCookie } from "js-cookie";

export interface ICookie {
  set(name: string, value: string): string | undefined;
  get(name: string): string | undefined;
  remove(name: string): void;
}

export const Cookie: ICookie = {
  set: JSCookie.set,
  get: JSCookie.get,
  remove: JSCookie.remove,
};
