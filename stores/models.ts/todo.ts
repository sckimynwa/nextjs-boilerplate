import { types, Instance } from 'mobx-state-tree';

const TodoModel = types.model({
  name: types.optional(types.string, ''),
  done: types.optional(types.boolean, false),
});

export type ITodo = Instance<typeof TodoModel>;

export default TodoModel;
