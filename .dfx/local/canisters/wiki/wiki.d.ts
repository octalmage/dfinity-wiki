import type { Principal } from '@dfinity/agent';
export type AssocList = AssocList_2;
export type AssocList_2 = List;
export interface Blog { 'title' : string, 'body' : string };
export type BlogId = number;
export interface Branch { 'left' : Trie, 'size' : bigint, 'right' : Trie };
export type Hash = number;
export interface Key { 'key' : BlogId, 'hash' : Hash };
export interface Leaf { 'size' : bigint, 'keyvals' : AssocList };
export type List = [] | [[[Key, Blog], List]];
export type Trie = { 'branch' : Branch } |
  { 'leaf' : Leaf } |
  { 'empty' : null };
export default interface _SERVICE {
  'create' : (arg_0: BlogId, arg_1: Blog) => Promise<BlogId>,
  'delete' : (arg_0: BlogId) => Promise<boolean>,
  'read' : (arg_0: BlogId) => Promise<[] | [Blog]>,
  'readAll' : () => Promise<Trie>,
  'update' : (arg_0: BlogId, arg_1: Blog) => Promise<boolean>,
};