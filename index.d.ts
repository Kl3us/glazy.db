declare module "glazy.db" {
    export class DB {
      constructor(file?: string);
      private file: string;
public set(key: string, value: any): void;
      public push(key: string, value: any): void;
      public fetch(key: string): any;
      public get(key: string): any;
      public has(key: string): boolean;
      public delete(key: string): void;
        public fetchAll(): object;
      public all(): object;
      public add(key: string, value: number): void;
    }