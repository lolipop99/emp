export interface CSSOptions {
  unit?: 'vw' | 'rem'
  vw?: PostcssViewPortOptions
  rem?: PostcssREMOptions
}
export type PostcssViewPortOptions = {
  /**
   * @default 'px'
   */
  unitToConvert?: string
  /**
   * @default 320
   */
  viewportWidth?: number
  /**
   * not now used; TODO: need for different units and math for different properties
   * @default 568
   */
  viewportHeight?: number
  /**
   * @default 5
   */
  unitPrecision?: number
  /**
   * @default 'vw'
   */
  viewportUnit?: string
  /**
   * vmin is more suitable.
   * @default 'vw'
   */
  fontViewportUnit?: string
  /**
   * @default []
   */
  selectorBlackList?: any[]
  /**
   * @default ['*']
   */
  propList?: any[]
  /**
   * @default 1
   */
  minPixelValue?: number
  /**
   * @default false
   */
  mediaQuery?: boolean
  /**
   * @default true
   */
  replace?: boolean
  /**
   * @default false
   */
  landscape?: boolean
  /**
   * @default 'vw'
   */
  landscapeUnit?: string
  /**
   * @default 568
   */
  landscapeWidth?: number
  include?: any[]
  exclude?: any[]
}
export type PostcssREMOptions = {
  /**
   * @default 'rem'
   */
  name: string
  /**
   * @default false
   */
  fallback: boolean
  /**
   * @default 'rem'
   */
  convert: string
  /**
   * @default 16
   */
  baseline: number
  /**
   * @default 5
   */
  precision: number
}
const getVwConfig = {
  viewportWidth: 720,
  unitPrecision: 3,
  viewportUnit: 'vw',
  selectorBlackList: ['.ignore', '.hairlines'],
  minPixelValue: 1,
  mediaQuery: false,
}
const getRemConfig = {
  name: 'rem',
  fallback: false,
  convert: 'rem',
  baseline: 16,
  precision: 5,
}
export const initCSS = (o: CSSOptions = {}): CSSOptions => {
  return {}
}
