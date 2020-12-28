import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree';
import TodoModel from './models.ts/todo';

const RootStore = types.model('RootStore', {
  todoStore: types.optional(TodoModel, {}),
});

export interface IRootStore extends Instance<typeof RootStore> {}
export interface IRootStoreSnapshotIn extends SnapshotIn<typeof RootStore> {}
export interface IRootStoreSnapshotOut extends SnapshotOut<typeof RootStore> {}

export default RootStore;
