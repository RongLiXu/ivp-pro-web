import { defHttp } from '/@/utils/http/axios'
import {
  PlatformModel,
  PlatformModelListParams,
  PlatformModelResultModel,
  ServerInfo,
} from '/@/api/gbPlatform/model/platformModel'

enum Api {
  // 查询分组下的通道
  LIST = '/api/platform/list',
  SERVER_CONFIG = '/api/platform/server_config',
  ADD = '/api/platform/add',
  EDIT = '/api/platform/save',
  DELETE = '/api/platform/delete/{serverGBId}',
}

export const queryPlatformListApi = (params: PlatformModelListParams) =>
  defHttp.get<PlatformModelResultModel>({
    url: Api.LIST,
    params: params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  })

export const queryServerConfigApi = () =>
  defHttp.get<ServerInfo>({
    url: Api.SERVER_CONFIG,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  })
export const addPlatformApi = (platformModel: PlatformModel) =>
  defHttp.post<void>({
    url: Api.ADD,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
    params: platformModel,
  })
export const editPlatformApi = (platformModel: PlatformModel) =>
  defHttp.post<void>({
    url: Api.EDIT,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
    params: platformModel,
  })
export const deletePlatformApi = (serverGBId: string) =>
  defHttp.delete<void>({
    url: Api.DELETE.replace('{serverGBId}', serverGBId),
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  })
