import List "mo:base/List";
import Option "mo:base/Option";
import Trie "mo:base/Trie";
import Time "mo:base/Time";

actor {
  public type BlogId = Nat32;

  public type Blog = {
    title: Text;
    body : Text;
  };

  // The blogs data store.
  private stable var blogs : Trie.Trie<BlogId, Blog> = Trie.empty();

   // Create a blog post.
  public func create(blogId : BlogId, blog : Blog) : async BlogId {
    let result = Trie.find(blogs, key(blogId), eq);
    let notExists = Option.isNull(result);
    if (notExists) {
      blogs := Trie.replace(
        blogs,
        key(blogId),
        eq,
        ?blog,
      ).0;
    };

    return blogId;
  };

  public query func read(blogId : BlogId) : async ?Blog {
    let result = Trie.find(blogs, key(blogId), eq);
    return result;
  };

  public query func readAll() : async Trie.Trie<BlogId, Blog>  {
    return blogs;
  };

  public func update(blogId : BlogId, blog : Blog) : async Bool {
    let result = Trie.find(blogs, key(blogId), eq);
    let exists = Option.isSome(result);
    if (exists) {
      blogs := Trie.replace(
        blogs,
        key(blogId),
        eq,
        ?blog,
      ).0;
    };
    return exists;
  };

  public func delete(blogId : BlogId) : async Bool {
    let result = Trie.find(blogs, key(blogId), eq);
    let exists = Option.isSome(result);
    if (exists) {
      blogs := Trie.replace(
        blogs,
        key(blogId),
        eq,
        null,
      ).0;
    };
    return exists;
  };

  public shared (msg) func whoami() : async Principal {
    msg.caller
  };

  private func eq(x : BlogId, y : BlogId) : Bool {
    return x == y;
  };

  private func key(x : BlogId) : Trie.Key<BlogId> {
    return { hash = x; key = x };
  };
};
