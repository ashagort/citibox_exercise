window.process = window.process || process

export const NODE_ENVIROMENT = process.env.NODE_ENV
export const IS_PRODUCTION = NODE_ENVIROMENT === 'production'