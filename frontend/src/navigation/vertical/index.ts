import start from './start'
import functions from './functions'
import other from './other'
import type { VerticalNavItems } from '@/@layouts/types'

export default [...start, ...functions, ...other] as VerticalNavItems
