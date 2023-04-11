import {IPostAttribute} from '@/types';
import * as HttpRequest from '../http-request';

export function list() {
  return HttpRequest.get<IPostAttribute[]>('posts');
}
