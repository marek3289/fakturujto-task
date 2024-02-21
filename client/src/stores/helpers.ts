import { createAction } from '@reduxjs/toolkit'

export const createActionNameGetter = (namespace: string) => (name: string) => `${namespace}/${name}`

const getActionName = createActionNameGetter('store')

export const resetStore = createAction(getActionName('reset'))
