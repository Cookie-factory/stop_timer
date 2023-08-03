import {GetMainResponse} from '~/types/api/main';
import {apiCall} from '../common';
import {useQuery} from '@tanstack/react-query';
import queryKeys from '~/constants/queryKeys';

/**
 *@description 커뮤니티 게시글 조회 api
 */
const getMain = () => {
  return apiCall<GetMainResponse>({
    method: 'GET',
    url: ``,
  });
};

export const useGetMain = (
  id: string,
  //   option?: {
  //     enabled?: boolean;
  //     onError?: (error: ErrorResponseTransform) => void;
  //   },
) => {
  return useQuery(
    [queryKeys.main.getMain, id],
    () => {
      return getMain();
    },
    {
      // select: data => {
      //   return new CommunityPost(data.data);
      // },
      // enabled: option?.enabled,
      // onError: error => {
      //   const _error = error as ErrorResponseTransform;
      //   if (option?.onError) option.onError(_error);
      // },
    },
  );
};
