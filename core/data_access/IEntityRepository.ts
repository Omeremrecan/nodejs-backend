import Entity from "../entities/Entity";

export default interface IEntityRepository<T extends Entity> {
  getById(id: number): Promise<T>;
  getAll(): Promise<T[]>;
  add(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(id: number): void;
}
