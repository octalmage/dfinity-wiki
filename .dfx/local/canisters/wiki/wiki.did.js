export default ({ IDL }) => {
  const List = IDL.Rec();
  const Trie = IDL.Rec();
  const BlogId = IDL.Nat32;
  const Blog = IDL.Record({ 'title' : IDL.Text, 'body' : IDL.Text });
  const Branch = IDL.Record({
    'left' : Trie,
    'size' : IDL.Nat,
    'right' : Trie,
  });
  const Hash = IDL.Nat32;
  const Key = IDL.Record({ 'key' : BlogId, 'hash' : Hash });
  List.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(Key, Blog), List)));
  const AssocList_2 = List;
  const AssocList = AssocList_2;
  const Leaf = IDL.Record({ 'size' : IDL.Nat, 'keyvals' : AssocList });
  Trie.fill(
    IDL.Variant({ 'branch' : Branch, 'leaf' : Leaf, 'empty' : IDL.Null })
  );
  return IDL.Service({
    'create' : IDL.Func([BlogId, Blog], [BlogId], []),
    'delete' : IDL.Func([BlogId], [IDL.Bool], []),
    'read' : IDL.Func([BlogId], [IDL.Opt(Blog)], ['query']),
    'readAll' : IDL.Func([], [Trie], ['query']),
    'update' : IDL.Func([BlogId, Blog], [IDL.Bool], []),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };