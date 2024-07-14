const data = [
  { id: "0", name: "张三" },
  { id: "1", name: "李四" },
  { id: "2", name: "王五" },
  { id: "3", name: "赵六" },
];
const value = "王";

const fn = (data, value) => {
  const d = data.map(item => {
    return {
      ...item,
      name: item.name.replace(value, v => {
        return `<em>${v}</em>`;
      }),
    };
  });
  return d;
};
console.log(fn(data, value));
