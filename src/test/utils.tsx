import { configureStore, Store } from "@reduxjs/toolkit"
import {
  render as rtlRender,
  RenderOptions as RtlRenderOptions,
} from "@testing-library/react"
import React, { ComponentType, ReactElement } from "react"
import { Provider } from "react-redux"
import { DeepPartial } from "redux"
import { reducer, RootState } from "../store"

type RenderOptions = {
  initialState?: DeepPartial<RootState>
  store?: Store
} & RtlRenderOptions

export function render(
  component: ReactElement,
  { initialState, store: s, ...renderOptions }: RenderOptions = {}
) {
  const store = s ?? configureStore({ reducer, preloadedState: initialState })
  function Wrapper({ children }: { children: ReactElement }) {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    ...rtlRender(component, {
      wrapper: Wrapper as ComponentType,
      ...renderOptions,
    }),
    store,
  }
}
