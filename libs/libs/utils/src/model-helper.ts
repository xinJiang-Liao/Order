import { Model } from 'sequelize-typescript';
import { QueryTypes, Sequelize } from 'sequelize';
// import { login } from '@app/module/login/login.model';

export const COLUMN_S1 = 'S1';

export function ColumnsS1(model: typeof Model): string[] {
  return Object.keys(model.rawAttributes).filter((k: string) => {
    return ![
      'created_at',
      'updated_at',
      'deleted_at',
      'createdAt',
      'updatedAt',
      'deletedAt',
    ].includes(k);
  });
}

export function Clone<Model>(entity: Model): Model {
  const m: any = {};
  const keys = ColumnsS1((entity as any).getModalType()).filter(
    (k) => k !== 'id',
  );
  keys.forEach((k) => (m[k] = entity[k]));
  return (entity as any).getModalType().build(m);
}

export function UpdateEntity<Model>(entity: Model, change: any): Model {
  ColumnsS1((entity as any).getModalType())
    .filter((k) => k !== 'id')
    .forEach((k) => {
      // const guestK = guest[k] === null ? undefined : guest[k];
      if (change[k] !== undefined && entity[k] !== change[k])
        entity[k] = change[k];
    });
  return entity;
}

export async function RawInsert<T extends Model>(
  sequelize: Sequelize,
  sql: string,
  options = {},
): Promise<number> {
  const data: unknown[] = await sequelize.query(
    sql,
    Object.assign({}, options, { type: QueryTypes.INSERT }),
  );
  return data[1] as number;

  // data[0]: count
  // data[0]: rows
  // const rows: T[] = (data[0] as unknown) as T[];
  // return { count: data[1] as number, rows: rows };
}
