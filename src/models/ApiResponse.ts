type Meta = {};

type Error = {
  code: string;
  message: string;
} | null;

export type Response<T> = {
  meta: Meta;
  succeeded: boolean;
  message: string;
  errors: Error;
  statusCode: number;
  data: T;
};
