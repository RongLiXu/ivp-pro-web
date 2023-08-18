import type { MenuModule } from '/@/router/types'
import { t } from '/@/hooks/web/useI18n'
const menu: MenuModule = {
  orderNo: 2,
  menu: {
    name: t('routes.realTimeVideo.realTimeVideo'),
    path: '/realTimeVideo',
  },
}
export default menu
