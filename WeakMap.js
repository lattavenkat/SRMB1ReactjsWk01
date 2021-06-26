function myfunc() {
  const wmap = new WeakMap();

  const key1 = {};
  const key2 = {};
  const key3 = {};

  wmap.set(key1, "First Name");
  wmap.set(key2, "Middle Name");
  wmap.set(key3, "Last Name");

  wmap.set(key1, "Latha");

  console.log(wmap.get(key1));
}
myfunc();
