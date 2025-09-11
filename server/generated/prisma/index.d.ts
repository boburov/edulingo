
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Courses
 * 
 */
export type Courses = $Result.DefaultSelection<Prisma.$CoursesPayload>
/**
 * Model show_history
 * 
 */
export type show_history = $Result.DefaultSelection<Prisma.$show_historyPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model lessons
 * 
 */
export type lessons = $Result.DefaultSelection<Prisma.$lessonsPayload>
/**
 * Model vocabulary
 * 
 */
export type vocabulary = $Result.DefaultSelection<Prisma.$vocabularyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courses`: Exposes CRUD operations for the **Courses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.courses.findMany()
    * ```
    */
  get courses(): Prisma.CoursesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.show_history`: Exposes CRUD operations for the **show_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Show_histories
    * const show_histories = await prisma.show_history.findMany()
    * ```
    */
  get show_history(): Prisma.show_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessons`: Exposes CRUD operations for the **lessons** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lessons.findMany()
    * ```
    */
  get lessons(): Prisma.lessonsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vocabulary`: Exposes CRUD operations for the **vocabulary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocabularies
    * const vocabularies = await prisma.vocabulary.findMany()
    * ```
    */
  get vocabulary(): Prisma.vocabularyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.0
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Courses: 'Courses',
    show_history: 'show_history',
    category: 'category',
    lessons: 'lessons',
    vocabulary: 'vocabulary'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "courses" | "show_history" | "category" | "lessons" | "vocabulary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Courses: {
        payload: Prisma.$CoursesPayload<ExtArgs>
        fields: Prisma.CoursesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findFirst: {
            args: Prisma.CoursesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          findMany: {
            args: Prisma.CoursesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          create: {
            args: Prisma.CoursesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          createMany: {
            args: Prisma.CoursesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          delete: {
            args: Prisma.CoursesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          update: {
            args: Prisma.CoursesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          deleteMany: {
            args: Prisma.CoursesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>[]
          }
          upsert: {
            args: Prisma.CoursesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursesPayload>
          }
          aggregate: {
            args: Prisma.CoursesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourses>
          }
          groupBy: {
            args: Prisma.CoursesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursesCountArgs<ExtArgs>
            result: $Utils.Optional<CoursesCountAggregateOutputType> | number
          }
        }
      }
      show_history: {
        payload: Prisma.$show_historyPayload<ExtArgs>
        fields: Prisma.show_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.show_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.show_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload>
          }
          findFirst: {
            args: Prisma.show_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.show_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload>
          }
          findMany: {
            args: Prisma.show_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload>[]
          }
          create: {
            args: Prisma.show_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload>
          }
          createMany: {
            args: Prisma.show_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.show_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload>[]
          }
          delete: {
            args: Prisma.show_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload>
          }
          update: {
            args: Prisma.show_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload>
          }
          deleteMany: {
            args: Prisma.show_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.show_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.show_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload>[]
          }
          upsert: {
            args: Prisma.show_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$show_historyPayload>
          }
          aggregate: {
            args: Prisma.Show_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShow_history>
          }
          groupBy: {
            args: Prisma.show_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Show_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.show_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Show_historyCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      lessons: {
        payload: Prisma.$lessonsPayload<ExtArgs>
        fields: Prisma.lessonsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.lessonsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.lessonsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          findFirst: {
            args: Prisma.lessonsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.lessonsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          findMany: {
            args: Prisma.lessonsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>[]
          }
          create: {
            args: Prisma.lessonsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          createMany: {
            args: Prisma.lessonsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.lessonsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>[]
          }
          delete: {
            args: Prisma.lessonsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          update: {
            args: Prisma.lessonsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          deleteMany: {
            args: Prisma.lessonsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.lessonsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.lessonsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>[]
          }
          upsert: {
            args: Prisma.lessonsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$lessonsPayload>
          }
          aggregate: {
            args: Prisma.LessonsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessons>
          }
          groupBy: {
            args: Prisma.lessonsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonsGroupByOutputType>[]
          }
          count: {
            args: Prisma.lessonsCountArgs<ExtArgs>
            result: $Utils.Optional<LessonsCountAggregateOutputType> | number
          }
        }
      }
      vocabulary: {
        payload: Prisma.$vocabularyPayload<ExtArgs>
        fields: Prisma.vocabularyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vocabularyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vocabularyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload>
          }
          findFirst: {
            args: Prisma.vocabularyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vocabularyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload>
          }
          findMany: {
            args: Prisma.vocabularyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload>[]
          }
          create: {
            args: Prisma.vocabularyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload>
          }
          createMany: {
            args: Prisma.vocabularyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vocabularyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload>[]
          }
          delete: {
            args: Prisma.vocabularyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload>
          }
          update: {
            args: Prisma.vocabularyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload>
          }
          deleteMany: {
            args: Prisma.vocabularyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vocabularyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vocabularyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload>[]
          }
          upsert: {
            args: Prisma.vocabularyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocabularyPayload>
          }
          aggregate: {
            args: Prisma.VocabularyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocabulary>
          }
          groupBy: {
            args: Prisma.vocabularyGroupByArgs<ExtArgs>
            result: $Utils.Optional<VocabularyGroupByOutputType>[]
          }
          count: {
            args: Prisma.vocabularyCountArgs<ExtArgs>
            result: $Utils.Optional<VocabularyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    courses?: CoursesOmit
    show_history?: show_historyOmit
    category?: categoryOmit
    lessons?: lessonsOmit
    vocabulary?: vocabularyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    show_history: number
    courses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show_history?: boolean | UserCountOutputTypeCountShow_historyArgs
    courses?: boolean | UserCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShow_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: show_historyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    lessons: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | CategoryCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonsWhereInput
  }


  /**
   * Count Type LessonsCountOutputType
   */

  export type LessonsCountOutputType = {
    vocabulary: number
  }

  export type LessonsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabulary?: boolean | LessonsCountOutputTypeCountVocabularyArgs
  }

  // Custom InputTypes
  /**
   * LessonsCountOutputType without action
   */
  export type LessonsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonsCountOutputType
     */
    select?: LessonsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonsCountOutputType without action
   */
  export type LessonsCountOutputTypeCountVocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocabularyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    coin: number | null
  }

  export type UserSumAggregateOutputType = {
    coin: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    email: string | null
    profile_pic: string | null
    google_id: string | null
    role: $Enums.Role | null
    is_verified: boolean | null
    coin: number | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    email: string | null
    profile_pic: string | null
    google_id: string | null
    role: $Enums.Role | null
    is_verified: boolean | null
    coin: number | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    email: number
    profile_pic: number
    google_id: number
    role: number
    is_verified: number
    coin: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    coin?: true
  }

  export type UserSumAggregateInputType = {
    coin?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    profile_pic?: true
    google_id?: true
    role?: true
    is_verified?: true
    coin?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    profile_pic?: true
    google_id?: true
    role?: true
    is_verified?: true
    coin?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    profile_pic?: true
    google_id?: true
    role?: true
    is_verified?: true
    coin?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    surname: string | null
    email: string
    profile_pic: string | null
    google_id: string
    role: $Enums.Role
    is_verified: boolean
    coin: number
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    profile_pic?: boolean
    google_id?: boolean
    role?: boolean
    is_verified?: boolean
    coin?: boolean
    created_at?: boolean
    show_history?: boolean | User$show_historyArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    profile_pic?: boolean
    google_id?: boolean
    role?: boolean
    is_verified?: boolean
    coin?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    profile_pic?: boolean
    google_id?: boolean
    role?: boolean
    is_verified?: boolean
    coin?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    profile_pic?: boolean
    google_id?: boolean
    role?: boolean
    is_verified?: boolean
    coin?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "email" | "profile_pic" | "google_id" | "role" | "is_verified" | "coin" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show_history?: boolean | User$show_historyArgs<ExtArgs>
    courses?: boolean | User$coursesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      show_history: Prisma.$show_historyPayload<ExtArgs>[]
      courses: Prisma.$CoursesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      surname: string | null
      email: string
      profile_pic: string | null
      google_id: string
      role: $Enums.Role
      is_verified: boolean
      coin: number
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    show_history<T extends User$show_historyArgs<ExtArgs> = {}>(args?: Subset<T, User$show_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends User$coursesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly profile_pic: FieldRef<"User", 'String'>
    readonly google_id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly coin: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.show_history
   */
  export type User$show_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    where?: show_historyWhereInput
    orderBy?: show_historyOrderByWithRelationInput | show_historyOrderByWithRelationInput[]
    cursor?: show_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Show_historyScalarFieldEnum | Show_historyScalarFieldEnum[]
  }

  /**
   * User.courses
   */
  export type User$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    cursor?: CoursesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Courses
   */

  export type AggregateCourses = {
    _count: CoursesCountAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  export type CoursesMinAggregateOutputType = {
    id: string | null
    title: string | null
    course_id: string | null
    userId: string | null
  }

  export type CoursesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    course_id: string | null
    userId: string | null
  }

  export type CoursesCountAggregateOutputType = {
    id: number
    title: number
    course_id: number
    userId: number
    _all: number
  }


  export type CoursesMinAggregateInputType = {
    id?: true
    title?: true
    course_id?: true
    userId?: true
  }

  export type CoursesMaxAggregateInputType = {
    id?: true
    title?: true
    course_id?: true
    userId?: true
  }

  export type CoursesCountAggregateInputType = {
    id?: true
    title?: true
    course_id?: true
    userId?: true
    _all?: true
  }

  export type CoursesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to aggregate.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CoursesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursesMaxAggregateInputType
  }

  export type GetCoursesAggregateType<T extends CoursesAggregateArgs> = {
        [P in keyof T & keyof AggregateCourses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourses[P]>
      : GetScalarType<T[P], AggregateCourses[P]>
  }




  export type CoursesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursesWhereInput
    orderBy?: CoursesOrderByWithAggregationInput | CoursesOrderByWithAggregationInput[]
    by: CoursesScalarFieldEnum[] | CoursesScalarFieldEnum
    having?: CoursesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursesCountAggregateInputType | true
    _min?: CoursesMinAggregateInputType
    _max?: CoursesMaxAggregateInputType
  }

  export type CoursesGroupByOutputType = {
    id: string
    title: string
    course_id: string
    userId: string | null
    _count: CoursesCountAggregateOutputType | null
    _min: CoursesMinAggregateOutputType | null
    _max: CoursesMaxAggregateOutputType | null
  }

  type GetCoursesGroupByPayload<T extends CoursesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursesGroupByOutputType[P]>
            : GetScalarType<T[P], CoursesGroupByOutputType[P]>
        }
      >
    >


  export type CoursesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    course_id?: boolean
    userId?: boolean
    User?: boolean | Courses$UserArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    course_id?: boolean
    userId?: boolean
    User?: boolean | Courses$UserArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    course_id?: boolean
    userId?: boolean
    User?: boolean | Courses$UserArgs<ExtArgs>
  }, ExtArgs["result"]["courses"]>

  export type CoursesSelectScalar = {
    id?: boolean
    title?: boolean
    course_id?: boolean
    userId?: boolean
  }

  export type CoursesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "course_id" | "userId", ExtArgs["result"]["courses"]>
  export type CoursesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Courses$UserArgs<ExtArgs>
  }
  export type CoursesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Courses$UserArgs<ExtArgs>
  }
  export type CoursesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Courses$UserArgs<ExtArgs>
  }

  export type $CoursesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courses"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      course_id: string
      userId: string | null
    }, ExtArgs["result"]["courses"]>
    composites: {}
  }

  type CoursesGetPayload<S extends boolean | null | undefined | CoursesDefaultArgs> = $Result.GetResult<Prisma.$CoursesPayload, S>

  type CoursesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursesCountAggregateInputType | true
    }

  export interface CoursesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courses'], meta: { name: 'Courses' } }
    /**
     * Find zero or one Courses that matches the filter.
     * @param {CoursesFindUniqueArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursesFindUniqueArgs>(args: SelectSubset<T, CoursesFindUniqueArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Courses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursesFindUniqueOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursesFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursesFindFirstArgs>(args?: SelectSubset<T, CoursesFindFirstArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Courses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindFirstOrThrowArgs} args - Arguments to find a Courses
     * @example
     * // Get one Courses
     * const courses = await prisma.courses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursesFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.courses.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.courses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursesWithIdOnly = await prisma.courses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursesFindManyArgs>(args?: SelectSubset<T, CoursesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Courses.
     * @param {CoursesCreateArgs} args - Arguments to create a Courses.
     * @example
     * // Create one Courses
     * const Courses = await prisma.courses.create({
     *   data: {
     *     // ... data to create a Courses
     *   }
     * })
     * 
     */
    create<T extends CoursesCreateArgs>(args: SelectSubset<T, CoursesCreateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CoursesCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursesCreateManyArgs>(args?: SelectSubset<T, CoursesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CoursesCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const courses = await prisma.courses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursesCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Courses.
     * @param {CoursesDeleteArgs} args - Arguments to delete one Courses.
     * @example
     * // Delete one Courses
     * const Courses = await prisma.courses.delete({
     *   where: {
     *     // ... filter to delete one Courses
     *   }
     * })
     * 
     */
    delete<T extends CoursesDeleteArgs>(args: SelectSubset<T, CoursesDeleteArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Courses.
     * @param {CoursesUpdateArgs} args - Arguments to update one Courses.
     * @example
     * // Update one Courses
     * const courses = await prisma.courses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursesUpdateArgs>(args: SelectSubset<T, CoursesUpdateArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CoursesDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.courses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursesDeleteManyArgs>(args?: SelectSubset<T, CoursesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursesUpdateManyArgs>(args: SelectSubset<T, CoursesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CoursesUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const courses = await prisma.courses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const coursesWithIdOnly = await prisma.courses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoursesUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Courses.
     * @param {CoursesUpsertArgs} args - Arguments to update or create a Courses.
     * @example
     * // Update or create a Courses
     * const courses = await prisma.courses.upsert({
     *   create: {
     *     // ... data to create a Courses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courses we want to update
     *   }
     * })
     */
    upsert<T extends CoursesUpsertArgs>(args: SelectSubset<T, CoursesUpsertArgs<ExtArgs>>): Prisma__CoursesClient<$Result.GetResult<Prisma.$CoursesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.courses.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CoursesCountArgs>(
      args?: Subset<T, CoursesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursesAggregateArgs>(args: Subset<T, CoursesAggregateArgs>): Prisma.PrismaPromise<GetCoursesAggregateType<T>>

    /**
     * Group by Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoursesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursesGroupByArgs['orderBy'] }
        : { orderBy?: CoursesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courses model
   */
  readonly fields: CoursesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Courses$UserArgs<ExtArgs> = {}>(args?: Subset<T, Courses$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Courses model
   */
  interface CoursesFieldRefs {
    readonly id: FieldRef<"Courses", 'String'>
    readonly title: FieldRef<"Courses", 'String'>
    readonly course_id: FieldRef<"Courses", 'String'>
    readonly userId: FieldRef<"Courses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Courses findUnique
   */
  export type CoursesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findUniqueOrThrow
   */
  export type CoursesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses findFirst
   */
  export type CoursesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findFirstOrThrow
   */
  export type CoursesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses findMany
   */
  export type CoursesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CoursesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CoursesOrderByWithRelationInput | CoursesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CoursesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CoursesScalarFieldEnum | CoursesScalarFieldEnum[]
  }

  /**
   * Courses create
   */
  export type CoursesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to create a Courses.
     */
    data: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
  }

  /**
   * Courses createMany
   */
  export type CoursesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Courses createManyAndReturn
   */
  export type CoursesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CoursesCreateManyInput | CoursesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courses update
   */
  export type CoursesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The data needed to update a Courses.
     */
    data: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
    /**
     * Choose, which Courses to update.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses updateMany
   */
  export type CoursesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Courses updateManyAndReturn
   */
  export type CoursesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courses upsert
   */
  export type CoursesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * The filter to search for the Courses to update in case it exists.
     */
    where: CoursesWhereUniqueInput
    /**
     * In case the Courses found by the `where` argument doesn't exist, create a new Courses with this data.
     */
    create: XOR<CoursesCreateInput, CoursesUncheckedCreateInput>
    /**
     * In case the Courses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursesUpdateInput, CoursesUncheckedUpdateInput>
  }

  /**
   * Courses delete
   */
  export type CoursesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
    /**
     * Filter which Courses to delete.
     */
    where: CoursesWhereUniqueInput
  }

  /**
   * Courses deleteMany
   */
  export type CoursesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CoursesWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Courses.User
   */
  export type Courses$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Courses without action
   */
  export type CoursesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courses
     */
    select?: CoursesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Courses
     */
    omit?: CoursesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursesInclude<ExtArgs> | null
  }


  /**
   * Model show_history
   */

  export type AggregateShow_history = {
    _count: Show_historyCountAggregateOutputType | null
    _min: Show_historyMinAggregateOutputType | null
    _max: Show_historyMaxAggregateOutputType | null
  }

  export type Show_historyMinAggregateOutputType = {
    id: string | null
    category_id: string | null
    lesson_id: string | null
    showed_at: Date | null
    userId: string | null
  }

  export type Show_historyMaxAggregateOutputType = {
    id: string | null
    category_id: string | null
    lesson_id: string | null
    showed_at: Date | null
    userId: string | null
  }

  export type Show_historyCountAggregateOutputType = {
    id: number
    category_id: number
    lesson_id: number
    showed_at: number
    userId: number
    _all: number
  }


  export type Show_historyMinAggregateInputType = {
    id?: true
    category_id?: true
    lesson_id?: true
    showed_at?: true
    userId?: true
  }

  export type Show_historyMaxAggregateInputType = {
    id?: true
    category_id?: true
    lesson_id?: true
    showed_at?: true
    userId?: true
  }

  export type Show_historyCountAggregateInputType = {
    id?: true
    category_id?: true
    lesson_id?: true
    showed_at?: true
    userId?: true
    _all?: true
  }

  export type Show_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which show_history to aggregate.
     */
    where?: show_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of show_histories to fetch.
     */
    orderBy?: show_historyOrderByWithRelationInput | show_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: show_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` show_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` show_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned show_histories
    **/
    _count?: true | Show_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Show_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Show_historyMaxAggregateInputType
  }

  export type GetShow_historyAggregateType<T extends Show_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateShow_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow_history[P]>
      : GetScalarType<T[P], AggregateShow_history[P]>
  }




  export type show_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: show_historyWhereInput
    orderBy?: show_historyOrderByWithAggregationInput | show_historyOrderByWithAggregationInput[]
    by: Show_historyScalarFieldEnum[] | Show_historyScalarFieldEnum
    having?: show_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Show_historyCountAggregateInputType | true
    _min?: Show_historyMinAggregateInputType
    _max?: Show_historyMaxAggregateInputType
  }

  export type Show_historyGroupByOutputType = {
    id: string
    category_id: string
    lesson_id: string
    showed_at: Date
    userId: string | null
    _count: Show_historyCountAggregateOutputType | null
    _min: Show_historyMinAggregateOutputType | null
    _max: Show_historyMaxAggregateOutputType | null
  }

  type GetShow_historyGroupByPayload<T extends show_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Show_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Show_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Show_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Show_historyGroupByOutputType[P]>
        }
      >
    >


  export type show_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    lesson_id?: boolean
    showed_at?: boolean
    userId?: boolean
    User?: boolean | show_history$UserArgs<ExtArgs>
  }, ExtArgs["result"]["show_history"]>

  export type show_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    lesson_id?: boolean
    showed_at?: boolean
    userId?: boolean
    User?: boolean | show_history$UserArgs<ExtArgs>
  }, ExtArgs["result"]["show_history"]>

  export type show_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_id?: boolean
    lesson_id?: boolean
    showed_at?: boolean
    userId?: boolean
    User?: boolean | show_history$UserArgs<ExtArgs>
  }, ExtArgs["result"]["show_history"]>

  export type show_historySelectScalar = {
    id?: boolean
    category_id?: boolean
    lesson_id?: boolean
    showed_at?: boolean
    userId?: boolean
  }

  export type show_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_id" | "lesson_id" | "showed_at" | "userId", ExtArgs["result"]["show_history"]>
  export type show_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | show_history$UserArgs<ExtArgs>
  }
  export type show_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | show_history$UserArgs<ExtArgs>
  }
  export type show_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | show_history$UserArgs<ExtArgs>
  }

  export type $show_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "show_history"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category_id: string
      lesson_id: string
      showed_at: Date
      userId: string | null
    }, ExtArgs["result"]["show_history"]>
    composites: {}
  }

  type show_historyGetPayload<S extends boolean | null | undefined | show_historyDefaultArgs> = $Result.GetResult<Prisma.$show_historyPayload, S>

  type show_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<show_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Show_historyCountAggregateInputType | true
    }

  export interface show_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['show_history'], meta: { name: 'show_history' } }
    /**
     * Find zero or one Show_history that matches the filter.
     * @param {show_historyFindUniqueArgs} args - Arguments to find a Show_history
     * @example
     * // Get one Show_history
     * const show_history = await prisma.show_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends show_historyFindUniqueArgs>(args: SelectSubset<T, show_historyFindUniqueArgs<ExtArgs>>): Prisma__show_historyClient<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Show_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {show_historyFindUniqueOrThrowArgs} args - Arguments to find a Show_history
     * @example
     * // Get one Show_history
     * const show_history = await prisma.show_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends show_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, show_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__show_historyClient<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_historyFindFirstArgs} args - Arguments to find a Show_history
     * @example
     * // Get one Show_history
     * const show_history = await prisma.show_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends show_historyFindFirstArgs>(args?: SelectSubset<T, show_historyFindFirstArgs<ExtArgs>>): Prisma__show_historyClient<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Show_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_historyFindFirstOrThrowArgs} args - Arguments to find a Show_history
     * @example
     * // Get one Show_history
     * const show_history = await prisma.show_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends show_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, show_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__show_historyClient<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Show_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Show_histories
     * const show_histories = await prisma.show_history.findMany()
     * 
     * // Get first 10 Show_histories
     * const show_histories = await prisma.show_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const show_historyWithIdOnly = await prisma.show_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends show_historyFindManyArgs>(args?: SelectSubset<T, show_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Show_history.
     * @param {show_historyCreateArgs} args - Arguments to create a Show_history.
     * @example
     * // Create one Show_history
     * const Show_history = await prisma.show_history.create({
     *   data: {
     *     // ... data to create a Show_history
     *   }
     * })
     * 
     */
    create<T extends show_historyCreateArgs>(args: SelectSubset<T, show_historyCreateArgs<ExtArgs>>): Prisma__show_historyClient<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Show_histories.
     * @param {show_historyCreateManyArgs} args - Arguments to create many Show_histories.
     * @example
     * // Create many Show_histories
     * const show_history = await prisma.show_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends show_historyCreateManyArgs>(args?: SelectSubset<T, show_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Show_histories and returns the data saved in the database.
     * @param {show_historyCreateManyAndReturnArgs} args - Arguments to create many Show_histories.
     * @example
     * // Create many Show_histories
     * const show_history = await prisma.show_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Show_histories and only return the `id`
     * const show_historyWithIdOnly = await prisma.show_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends show_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, show_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Show_history.
     * @param {show_historyDeleteArgs} args - Arguments to delete one Show_history.
     * @example
     * // Delete one Show_history
     * const Show_history = await prisma.show_history.delete({
     *   where: {
     *     // ... filter to delete one Show_history
     *   }
     * })
     * 
     */
    delete<T extends show_historyDeleteArgs>(args: SelectSubset<T, show_historyDeleteArgs<ExtArgs>>): Prisma__show_historyClient<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Show_history.
     * @param {show_historyUpdateArgs} args - Arguments to update one Show_history.
     * @example
     * // Update one Show_history
     * const show_history = await prisma.show_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends show_historyUpdateArgs>(args: SelectSubset<T, show_historyUpdateArgs<ExtArgs>>): Prisma__show_historyClient<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Show_histories.
     * @param {show_historyDeleteManyArgs} args - Arguments to filter Show_histories to delete.
     * @example
     * // Delete a few Show_histories
     * const { count } = await prisma.show_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends show_historyDeleteManyArgs>(args?: SelectSubset<T, show_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Show_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Show_histories
     * const show_history = await prisma.show_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends show_historyUpdateManyArgs>(args: SelectSubset<T, show_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Show_histories and returns the data updated in the database.
     * @param {show_historyUpdateManyAndReturnArgs} args - Arguments to update many Show_histories.
     * @example
     * // Update many Show_histories
     * const show_history = await prisma.show_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Show_histories and only return the `id`
     * const show_historyWithIdOnly = await prisma.show_history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends show_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, show_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Show_history.
     * @param {show_historyUpsertArgs} args - Arguments to update or create a Show_history.
     * @example
     * // Update or create a Show_history
     * const show_history = await prisma.show_history.upsert({
     *   create: {
     *     // ... data to create a Show_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show_history we want to update
     *   }
     * })
     */
    upsert<T extends show_historyUpsertArgs>(args: SelectSubset<T, show_historyUpsertArgs<ExtArgs>>): Prisma__show_historyClient<$Result.GetResult<Prisma.$show_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Show_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_historyCountArgs} args - Arguments to filter Show_histories to count.
     * @example
     * // Count the number of Show_histories
     * const count = await prisma.show_history.count({
     *   where: {
     *     // ... the filter for the Show_histories we want to count
     *   }
     * })
    **/
    count<T extends show_historyCountArgs>(
      args?: Subset<T, show_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Show_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Show_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Show_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Show_historyAggregateArgs>(args: Subset<T, Show_historyAggregateArgs>): Prisma.PrismaPromise<GetShow_historyAggregateType<T>>

    /**
     * Group by Show_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends show_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: show_historyGroupByArgs['orderBy'] }
        : { orderBy?: show_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, show_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShow_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the show_history model
   */
  readonly fields: show_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for show_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__show_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends show_history$UserArgs<ExtArgs> = {}>(args?: Subset<T, show_history$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the show_history model
   */
  interface show_historyFieldRefs {
    readonly id: FieldRef<"show_history", 'String'>
    readonly category_id: FieldRef<"show_history", 'String'>
    readonly lesson_id: FieldRef<"show_history", 'String'>
    readonly showed_at: FieldRef<"show_history", 'DateTime'>
    readonly userId: FieldRef<"show_history", 'String'>
  }
    

  // Custom InputTypes
  /**
   * show_history findUnique
   */
  export type show_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    /**
     * Filter, which show_history to fetch.
     */
    where: show_historyWhereUniqueInput
  }

  /**
   * show_history findUniqueOrThrow
   */
  export type show_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    /**
     * Filter, which show_history to fetch.
     */
    where: show_historyWhereUniqueInput
  }

  /**
   * show_history findFirst
   */
  export type show_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    /**
     * Filter, which show_history to fetch.
     */
    where?: show_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of show_histories to fetch.
     */
    orderBy?: show_historyOrderByWithRelationInput | show_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for show_histories.
     */
    cursor?: show_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` show_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` show_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of show_histories.
     */
    distinct?: Show_historyScalarFieldEnum | Show_historyScalarFieldEnum[]
  }

  /**
   * show_history findFirstOrThrow
   */
  export type show_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    /**
     * Filter, which show_history to fetch.
     */
    where?: show_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of show_histories to fetch.
     */
    orderBy?: show_historyOrderByWithRelationInput | show_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for show_histories.
     */
    cursor?: show_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` show_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` show_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of show_histories.
     */
    distinct?: Show_historyScalarFieldEnum | Show_historyScalarFieldEnum[]
  }

  /**
   * show_history findMany
   */
  export type show_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    /**
     * Filter, which show_histories to fetch.
     */
    where?: show_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of show_histories to fetch.
     */
    orderBy?: show_historyOrderByWithRelationInput | show_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing show_histories.
     */
    cursor?: show_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` show_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` show_histories.
     */
    skip?: number
    distinct?: Show_historyScalarFieldEnum | Show_historyScalarFieldEnum[]
  }

  /**
   * show_history create
   */
  export type show_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a show_history.
     */
    data: XOR<show_historyCreateInput, show_historyUncheckedCreateInput>
  }

  /**
   * show_history createMany
   */
  export type show_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many show_histories.
     */
    data: show_historyCreateManyInput | show_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * show_history createManyAndReturn
   */
  export type show_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * The data used to create many show_histories.
     */
    data: show_historyCreateManyInput | show_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * show_history update
   */
  export type show_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a show_history.
     */
    data: XOR<show_historyUpdateInput, show_historyUncheckedUpdateInput>
    /**
     * Choose, which show_history to update.
     */
    where: show_historyWhereUniqueInput
  }

  /**
   * show_history updateMany
   */
  export type show_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update show_histories.
     */
    data: XOR<show_historyUpdateManyMutationInput, show_historyUncheckedUpdateManyInput>
    /**
     * Filter which show_histories to update
     */
    where?: show_historyWhereInput
    /**
     * Limit how many show_histories to update.
     */
    limit?: number
  }

  /**
   * show_history updateManyAndReturn
   */
  export type show_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * The data used to update show_histories.
     */
    data: XOR<show_historyUpdateManyMutationInput, show_historyUncheckedUpdateManyInput>
    /**
     * Filter which show_histories to update
     */
    where?: show_historyWhereInput
    /**
     * Limit how many show_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * show_history upsert
   */
  export type show_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the show_history to update in case it exists.
     */
    where: show_historyWhereUniqueInput
    /**
     * In case the show_history found by the `where` argument doesn't exist, create a new show_history with this data.
     */
    create: XOR<show_historyCreateInput, show_historyUncheckedCreateInput>
    /**
     * In case the show_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<show_historyUpdateInput, show_historyUncheckedUpdateInput>
  }

  /**
   * show_history delete
   */
  export type show_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
    /**
     * Filter which show_history to delete.
     */
    where: show_historyWhereUniqueInput
  }

  /**
   * show_history deleteMany
   */
  export type show_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which show_histories to delete
     */
    where?: show_historyWhereInput
    /**
     * Limit how many show_histories to delete.
     */
    limit?: number
  }

  /**
   * show_history.User
   */
  export type show_history$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * show_history without action
   */
  export type show_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_history
     */
    select?: show_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the show_history
     */
    omit?: show_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: show_historyInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    title: string | null
    thumbnail: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    title: string | null
    thumbnail: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    title: number
    thumbnail: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    title?: true
    thumbnail?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    title: string
    thumbnail: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
    lessons?: boolean | category$lessonsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    thumbnail?: boolean
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    title?: boolean
    thumbnail?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "thumbnail", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | category$lessonsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      lessons: Prisma.$lessonsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      thumbnail: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends category$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, category$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'String'>
    readonly title: FieldRef<"category", 'String'>
    readonly thumbnail: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.lessons
   */
  export type category$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    where?: lessonsWhereInput
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    cursor?: lessonsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model lessons
   */

  export type AggregateLessons = {
    _count: LessonsCountAggregateOutputType | null
    _min: LessonsMinAggregateOutputType | null
    _max: LessonsMaxAggregateOutputType | null
  }

  export type LessonsMinAggregateOutputType = {
    id: string | null
    video_url: string | null
    title: string | null
    categoryId: string | null
  }

  export type LessonsMaxAggregateOutputType = {
    id: string | null
    video_url: string | null
    title: string | null
    categoryId: string | null
  }

  export type LessonsCountAggregateOutputType = {
    id: number
    video_url: number
    title: number
    categoryId: number
    _all: number
  }


  export type LessonsMinAggregateInputType = {
    id?: true
    video_url?: true
    title?: true
    categoryId?: true
  }

  export type LessonsMaxAggregateInputType = {
    id?: true
    video_url?: true
    title?: true
    categoryId?: true
  }

  export type LessonsCountAggregateInputType = {
    id?: true
    video_url?: true
    title?: true
    categoryId?: true
    _all?: true
  }

  export type LessonsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lessons to aggregate.
     */
    where?: lessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: lessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned lessons
    **/
    _count?: true | LessonsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonsMaxAggregateInputType
  }

  export type GetLessonsAggregateType<T extends LessonsAggregateArgs> = {
        [P in keyof T & keyof AggregateLessons]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessons[P]>
      : GetScalarType<T[P], AggregateLessons[P]>
  }




  export type lessonsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: lessonsWhereInput
    orderBy?: lessonsOrderByWithAggregationInput | lessonsOrderByWithAggregationInput[]
    by: LessonsScalarFieldEnum[] | LessonsScalarFieldEnum
    having?: lessonsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonsCountAggregateInputType | true
    _min?: LessonsMinAggregateInputType
    _max?: LessonsMaxAggregateInputType
  }

  export type LessonsGroupByOutputType = {
    id: string
    video_url: string
    title: string
    categoryId: string | null
    _count: LessonsCountAggregateOutputType | null
    _min: LessonsMinAggregateOutputType | null
    _max: LessonsMaxAggregateOutputType | null
  }

  type GetLessonsGroupByPayload<T extends lessonsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonsGroupByOutputType[P]>
            : GetScalarType<T[P], LessonsGroupByOutputType[P]>
        }
      >
    >


  export type lessonsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_url?: boolean
    title?: boolean
    categoryId?: boolean
    vocabulary?: boolean | lessons$vocabularyArgs<ExtArgs>
    category?: boolean | lessons$categoryArgs<ExtArgs>
    _count?: boolean | LessonsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessons"]>

  export type lessonsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_url?: boolean
    title?: boolean
    categoryId?: boolean
    category?: boolean | lessons$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["lessons"]>

  export type lessonsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    video_url?: boolean
    title?: boolean
    categoryId?: boolean
    category?: boolean | lessons$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["lessons"]>

  export type lessonsSelectScalar = {
    id?: boolean
    video_url?: boolean
    title?: boolean
    categoryId?: boolean
  }

  export type lessonsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "video_url" | "title" | "categoryId", ExtArgs["result"]["lessons"]>
  export type lessonsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocabulary?: boolean | lessons$vocabularyArgs<ExtArgs>
    category?: boolean | lessons$categoryArgs<ExtArgs>
    _count?: boolean | LessonsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type lessonsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | lessons$categoryArgs<ExtArgs>
  }
  export type lessonsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | lessons$categoryArgs<ExtArgs>
  }

  export type $lessonsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "lessons"
    objects: {
      vocabulary: Prisma.$vocabularyPayload<ExtArgs>[]
      category: Prisma.$categoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      video_url: string
      title: string
      categoryId: string | null
    }, ExtArgs["result"]["lessons"]>
    composites: {}
  }

  type lessonsGetPayload<S extends boolean | null | undefined | lessonsDefaultArgs> = $Result.GetResult<Prisma.$lessonsPayload, S>

  type lessonsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<lessonsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonsCountAggregateInputType | true
    }

  export interface lessonsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['lessons'], meta: { name: 'lessons' } }
    /**
     * Find zero or one Lessons that matches the filter.
     * @param {lessonsFindUniqueArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lessonsFindUniqueArgs>(args: SelectSubset<T, lessonsFindUniqueArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lessons that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lessonsFindUniqueOrThrowArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lessonsFindUniqueOrThrowArgs>(args: SelectSubset<T, lessonsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsFindFirstArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lessonsFindFirstArgs>(args?: SelectSubset<T, lessonsFindFirstArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lessons that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsFindFirstOrThrowArgs} args - Arguments to find a Lessons
     * @example
     * // Get one Lessons
     * const lessons = await prisma.lessons.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lessonsFindFirstOrThrowArgs>(args?: SelectSubset<T, lessonsFindFirstOrThrowArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lessons.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lessons.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonsWithIdOnly = await prisma.lessons.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends lessonsFindManyArgs>(args?: SelectSubset<T, lessonsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lessons.
     * @param {lessonsCreateArgs} args - Arguments to create a Lessons.
     * @example
     * // Create one Lessons
     * const Lessons = await prisma.lessons.create({
     *   data: {
     *     // ... data to create a Lessons
     *   }
     * })
     * 
     */
    create<T extends lessonsCreateArgs>(args: SelectSubset<T, lessonsCreateArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {lessonsCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lessons = await prisma.lessons.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends lessonsCreateManyArgs>(args?: SelectSubset<T, lessonsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {lessonsCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lessons = await prisma.lessons.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonsWithIdOnly = await prisma.lessons.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends lessonsCreateManyAndReturnArgs>(args?: SelectSubset<T, lessonsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lessons.
     * @param {lessonsDeleteArgs} args - Arguments to delete one Lessons.
     * @example
     * // Delete one Lessons
     * const Lessons = await prisma.lessons.delete({
     *   where: {
     *     // ... filter to delete one Lessons
     *   }
     * })
     * 
     */
    delete<T extends lessonsDeleteArgs>(args: SelectSubset<T, lessonsDeleteArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lessons.
     * @param {lessonsUpdateArgs} args - Arguments to update one Lessons.
     * @example
     * // Update one Lessons
     * const lessons = await prisma.lessons.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends lessonsUpdateArgs>(args: SelectSubset<T, lessonsUpdateArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {lessonsDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lessons.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends lessonsDeleteManyArgs>(args?: SelectSubset<T, lessonsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lessons = await prisma.lessons.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends lessonsUpdateManyArgs>(args: SelectSubset<T, lessonsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {lessonsUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lessons = await prisma.lessons.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonsWithIdOnly = await prisma.lessons.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends lessonsUpdateManyAndReturnArgs>(args: SelectSubset<T, lessonsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lessons.
     * @param {lessonsUpsertArgs} args - Arguments to update or create a Lessons.
     * @example
     * // Update or create a Lessons
     * const lessons = await prisma.lessons.upsert({
     *   create: {
     *     // ... data to create a Lessons
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lessons we want to update
     *   }
     * })
     */
    upsert<T extends lessonsUpsertArgs>(args: SelectSubset<T, lessonsUpsertArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lessons.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends lessonsCountArgs>(
      args?: Subset<T, lessonsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LessonsAggregateArgs>(args: Subset<T, LessonsAggregateArgs>): Prisma.PrismaPromise<GetLessonsAggregateType<T>>

    /**
     * Group by Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lessonsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends lessonsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: lessonsGroupByArgs['orderBy'] }
        : { orderBy?: lessonsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, lessonsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the lessons model
   */
  readonly fields: lessonsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for lessons.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__lessonsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocabulary<T extends lessons$vocabularyArgs<ExtArgs> = {}>(args?: Subset<T, lessons$vocabularyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends lessons$categoryArgs<ExtArgs> = {}>(args?: Subset<T, lessons$categoryArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the lessons model
   */
  interface lessonsFieldRefs {
    readonly id: FieldRef<"lessons", 'String'>
    readonly video_url: FieldRef<"lessons", 'String'>
    readonly title: FieldRef<"lessons", 'String'>
    readonly categoryId: FieldRef<"lessons", 'String'>
  }
    

  // Custom InputTypes
  /**
   * lessons findUnique
   */
  export type lessonsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where: lessonsWhereUniqueInput
  }

  /**
   * lessons findUniqueOrThrow
   */
  export type lessonsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where: lessonsWhereUniqueInput
  }

  /**
   * lessons findFirst
   */
  export type lessonsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where?: lessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lessons.
     */
    cursor?: lessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lessons.
     */
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * lessons findFirstOrThrow
   */
  export type lessonsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where?: lessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for lessons.
     */
    cursor?: lessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of lessons.
     */
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * lessons findMany
   */
  export type lessonsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter, which lessons to fetch.
     */
    where?: lessonsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of lessons to fetch.
     */
    orderBy?: lessonsOrderByWithRelationInput | lessonsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing lessons.
     */
    cursor?: lessonsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` lessons.
     */
    skip?: number
    distinct?: LessonsScalarFieldEnum | LessonsScalarFieldEnum[]
  }

  /**
   * lessons create
   */
  export type lessonsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * The data needed to create a lessons.
     */
    data: XOR<lessonsCreateInput, lessonsUncheckedCreateInput>
  }

  /**
   * lessons createMany
   */
  export type lessonsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many lessons.
     */
    data: lessonsCreateManyInput | lessonsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * lessons createManyAndReturn
   */
  export type lessonsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * The data used to create many lessons.
     */
    data: lessonsCreateManyInput | lessonsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * lessons update
   */
  export type lessonsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * The data needed to update a lessons.
     */
    data: XOR<lessonsUpdateInput, lessonsUncheckedUpdateInput>
    /**
     * Choose, which lessons to update.
     */
    where: lessonsWhereUniqueInput
  }

  /**
   * lessons updateMany
   */
  export type lessonsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update lessons.
     */
    data: XOR<lessonsUpdateManyMutationInput, lessonsUncheckedUpdateManyInput>
    /**
     * Filter which lessons to update
     */
    where?: lessonsWhereInput
    /**
     * Limit how many lessons to update.
     */
    limit?: number
  }

  /**
   * lessons updateManyAndReturn
   */
  export type lessonsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * The data used to update lessons.
     */
    data: XOR<lessonsUpdateManyMutationInput, lessonsUncheckedUpdateManyInput>
    /**
     * Filter which lessons to update
     */
    where?: lessonsWhereInput
    /**
     * Limit how many lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * lessons upsert
   */
  export type lessonsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * The filter to search for the lessons to update in case it exists.
     */
    where: lessonsWhereUniqueInput
    /**
     * In case the lessons found by the `where` argument doesn't exist, create a new lessons with this data.
     */
    create: XOR<lessonsCreateInput, lessonsUncheckedCreateInput>
    /**
     * In case the lessons was found with the provided `where` argument, update it with this data.
     */
    update: XOR<lessonsUpdateInput, lessonsUncheckedUpdateInput>
  }

  /**
   * lessons delete
   */
  export type lessonsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    /**
     * Filter which lessons to delete.
     */
    where: lessonsWhereUniqueInput
  }

  /**
   * lessons deleteMany
   */
  export type lessonsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which lessons to delete
     */
    where?: lessonsWhereInput
    /**
     * Limit how many lessons to delete.
     */
    limit?: number
  }

  /**
   * lessons.vocabulary
   */
  export type lessons$vocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    where?: vocabularyWhereInput
    orderBy?: vocabularyOrderByWithRelationInput | vocabularyOrderByWithRelationInput[]
    cursor?: vocabularyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * lessons.category
   */
  export type lessons$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * lessons without action
   */
  export type lessonsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
  }


  /**
   * Model vocabulary
   */

  export type AggregateVocabulary = {
    _count: VocabularyCountAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  export type VocabularyMinAggregateOutputType = {
    id: string | null
    word: string | null
    org_version: string | null
    lessonsId: string | null
  }

  export type VocabularyMaxAggregateOutputType = {
    id: string | null
    word: string | null
    org_version: string | null
    lessonsId: string | null
  }

  export type VocabularyCountAggregateOutputType = {
    id: number
    word: number
    org_version: number
    lessonsId: number
    _all: number
  }


  export type VocabularyMinAggregateInputType = {
    id?: true
    word?: true
    org_version?: true
    lessonsId?: true
  }

  export type VocabularyMaxAggregateInputType = {
    id?: true
    word?: true
    org_version?: true
    lessonsId?: true
  }

  export type VocabularyCountAggregateInputType = {
    id?: true
    word?: true
    org_version?: true
    lessonsId?: true
    _all?: true
  }

  export type VocabularyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocabulary to aggregate.
     */
    where?: vocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocabularies to fetch.
     */
    orderBy?: vocabularyOrderByWithRelationInput | vocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vocabularies
    **/
    _count?: true | VocabularyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VocabularyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VocabularyMaxAggregateInputType
  }

  export type GetVocabularyAggregateType<T extends VocabularyAggregateArgs> = {
        [P in keyof T & keyof AggregateVocabulary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocabulary[P]>
      : GetScalarType<T[P], AggregateVocabulary[P]>
  }




  export type vocabularyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocabularyWhereInput
    orderBy?: vocabularyOrderByWithAggregationInput | vocabularyOrderByWithAggregationInput[]
    by: VocabularyScalarFieldEnum[] | VocabularyScalarFieldEnum
    having?: vocabularyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VocabularyCountAggregateInputType | true
    _min?: VocabularyMinAggregateInputType
    _max?: VocabularyMaxAggregateInputType
  }

  export type VocabularyGroupByOutputType = {
    id: string
    word: string
    org_version: string
    lessonsId: string | null
    _count: VocabularyCountAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  type GetVocabularyGroupByPayload<T extends vocabularyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VocabularyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VocabularyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
            : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
        }
      >
    >


  export type vocabularySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    org_version?: boolean
    lessonsId?: boolean
    lessons?: boolean | vocabulary$lessonsArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type vocabularySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    org_version?: boolean
    lessonsId?: boolean
    lessons?: boolean | vocabulary$lessonsArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type vocabularySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    org_version?: boolean
    lessonsId?: boolean
    lessons?: boolean | vocabulary$lessonsArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type vocabularySelectScalar = {
    id?: boolean
    word?: boolean
    org_version?: boolean
    lessonsId?: boolean
  }

  export type vocabularyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "org_version" | "lessonsId", ExtArgs["result"]["vocabulary"]>
  export type vocabularyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | vocabulary$lessonsArgs<ExtArgs>
  }
  export type vocabularyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | vocabulary$lessonsArgs<ExtArgs>
  }
  export type vocabularyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | vocabulary$lessonsArgs<ExtArgs>
  }

  export type $vocabularyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vocabulary"
    objects: {
      lessons: Prisma.$lessonsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      org_version: string
      lessonsId: string | null
    }, ExtArgs["result"]["vocabulary"]>
    composites: {}
  }

  type vocabularyGetPayload<S extends boolean | null | undefined | vocabularyDefaultArgs> = $Result.GetResult<Prisma.$vocabularyPayload, S>

  type vocabularyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vocabularyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VocabularyCountAggregateInputType | true
    }

  export interface vocabularyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vocabulary'], meta: { name: 'vocabulary' } }
    /**
     * Find zero or one Vocabulary that matches the filter.
     * @param {vocabularyFindUniqueArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vocabularyFindUniqueArgs>(args: SelectSubset<T, vocabularyFindUniqueArgs<ExtArgs>>): Prisma__vocabularyClient<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocabulary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vocabularyFindUniqueOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vocabularyFindUniqueOrThrowArgs>(args: SelectSubset<T, vocabularyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vocabularyClient<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocabulary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocabularyFindFirstArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vocabularyFindFirstArgs>(args?: SelectSubset<T, vocabularyFindFirstArgs<ExtArgs>>): Prisma__vocabularyClient<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocabulary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocabularyFindFirstOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vocabularyFindFirstOrThrowArgs>(args?: SelectSubset<T, vocabularyFindFirstOrThrowArgs<ExtArgs>>): Prisma__vocabularyClient<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocabularies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocabularyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany()
     * 
     * // Get first 10 Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vocabularyFindManyArgs>(args?: SelectSubset<T, vocabularyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocabulary.
     * @param {vocabularyCreateArgs} args - Arguments to create a Vocabulary.
     * @example
     * // Create one Vocabulary
     * const Vocabulary = await prisma.vocabulary.create({
     *   data: {
     *     // ... data to create a Vocabulary
     *   }
     * })
     * 
     */
    create<T extends vocabularyCreateArgs>(args: SelectSubset<T, vocabularyCreateArgs<ExtArgs>>): Prisma__vocabularyClient<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocabularies.
     * @param {vocabularyCreateManyArgs} args - Arguments to create many Vocabularies.
     * @example
     * // Create many Vocabularies
     * const vocabulary = await prisma.vocabulary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vocabularyCreateManyArgs>(args?: SelectSubset<T, vocabularyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vocabularies and returns the data saved in the database.
     * @param {vocabularyCreateManyAndReturnArgs} args - Arguments to create many Vocabularies.
     * @example
     * // Create many Vocabularies
     * const vocabulary = await prisma.vocabulary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vocabularies and only return the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vocabularyCreateManyAndReturnArgs>(args?: SelectSubset<T, vocabularyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vocabulary.
     * @param {vocabularyDeleteArgs} args - Arguments to delete one Vocabulary.
     * @example
     * // Delete one Vocabulary
     * const Vocabulary = await prisma.vocabulary.delete({
     *   where: {
     *     // ... filter to delete one Vocabulary
     *   }
     * })
     * 
     */
    delete<T extends vocabularyDeleteArgs>(args: SelectSubset<T, vocabularyDeleteArgs<ExtArgs>>): Prisma__vocabularyClient<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocabulary.
     * @param {vocabularyUpdateArgs} args - Arguments to update one Vocabulary.
     * @example
     * // Update one Vocabulary
     * const vocabulary = await prisma.vocabulary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vocabularyUpdateArgs>(args: SelectSubset<T, vocabularyUpdateArgs<ExtArgs>>): Prisma__vocabularyClient<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocabularies.
     * @param {vocabularyDeleteManyArgs} args - Arguments to filter Vocabularies to delete.
     * @example
     * // Delete a few Vocabularies
     * const { count } = await prisma.vocabulary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vocabularyDeleteManyArgs>(args?: SelectSubset<T, vocabularyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocabularyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocabularies
     * const vocabulary = await prisma.vocabulary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vocabularyUpdateManyArgs>(args: SelectSubset<T, vocabularyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocabularies and returns the data updated in the database.
     * @param {vocabularyUpdateManyAndReturnArgs} args - Arguments to update many Vocabularies.
     * @example
     * // Update many Vocabularies
     * const vocabulary = await prisma.vocabulary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vocabularies and only return the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vocabularyUpdateManyAndReturnArgs>(args: SelectSubset<T, vocabularyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vocabulary.
     * @param {vocabularyUpsertArgs} args - Arguments to update or create a Vocabulary.
     * @example
     * // Update or create a Vocabulary
     * const vocabulary = await prisma.vocabulary.upsert({
     *   create: {
     *     // ... data to create a Vocabulary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocabulary we want to update
     *   }
     * })
     */
    upsert<T extends vocabularyUpsertArgs>(args: SelectSubset<T, vocabularyUpsertArgs<ExtArgs>>): Prisma__vocabularyClient<$Result.GetResult<Prisma.$vocabularyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocabularyCountArgs} args - Arguments to filter Vocabularies to count.
     * @example
     * // Count the number of Vocabularies
     * const count = await prisma.vocabulary.count({
     *   where: {
     *     // ... the filter for the Vocabularies we want to count
     *   }
     * })
    **/
    count<T extends vocabularyCountArgs>(
      args?: Subset<T, vocabularyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VocabularyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VocabularyAggregateArgs>(args: Subset<T, VocabularyAggregateArgs>): Prisma.PrismaPromise<GetVocabularyAggregateType<T>>

    /**
     * Group by Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocabularyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vocabularyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vocabularyGroupByArgs['orderBy'] }
        : { orderBy?: vocabularyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vocabularyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabularyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vocabulary model
   */
  readonly fields: vocabularyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vocabulary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vocabularyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lessons<T extends vocabulary$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, vocabulary$lessonsArgs<ExtArgs>>): Prisma__lessonsClient<$Result.GetResult<Prisma.$lessonsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vocabulary model
   */
  interface vocabularyFieldRefs {
    readonly id: FieldRef<"vocabulary", 'String'>
    readonly word: FieldRef<"vocabulary", 'String'>
    readonly org_version: FieldRef<"vocabulary", 'String'>
    readonly lessonsId: FieldRef<"vocabulary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vocabulary findUnique
   */
  export type vocabularyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    /**
     * Filter, which vocabulary to fetch.
     */
    where: vocabularyWhereUniqueInput
  }

  /**
   * vocabulary findUniqueOrThrow
   */
  export type vocabularyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    /**
     * Filter, which vocabulary to fetch.
     */
    where: vocabularyWhereUniqueInput
  }

  /**
   * vocabulary findFirst
   */
  export type vocabularyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    /**
     * Filter, which vocabulary to fetch.
     */
    where?: vocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocabularies to fetch.
     */
    orderBy?: vocabularyOrderByWithRelationInput | vocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocabularies.
     */
    cursor?: vocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * vocabulary findFirstOrThrow
   */
  export type vocabularyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    /**
     * Filter, which vocabulary to fetch.
     */
    where?: vocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocabularies to fetch.
     */
    orderBy?: vocabularyOrderByWithRelationInput | vocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocabularies.
     */
    cursor?: vocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * vocabulary findMany
   */
  export type vocabularyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    /**
     * Filter, which vocabularies to fetch.
     */
    where?: vocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocabularies to fetch.
     */
    orderBy?: vocabularyOrderByWithRelationInput | vocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vocabularies.
     */
    cursor?: vocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocabularies.
     */
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * vocabulary create
   */
  export type vocabularyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    /**
     * The data needed to create a vocabulary.
     */
    data: XOR<vocabularyCreateInput, vocabularyUncheckedCreateInput>
  }

  /**
   * vocabulary createMany
   */
  export type vocabularyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vocabularies.
     */
    data: vocabularyCreateManyInput | vocabularyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vocabulary createManyAndReturn
   */
  export type vocabularyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * The data used to create many vocabularies.
     */
    data: vocabularyCreateManyInput | vocabularyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vocabulary update
   */
  export type vocabularyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    /**
     * The data needed to update a vocabulary.
     */
    data: XOR<vocabularyUpdateInput, vocabularyUncheckedUpdateInput>
    /**
     * Choose, which vocabulary to update.
     */
    where: vocabularyWhereUniqueInput
  }

  /**
   * vocabulary updateMany
   */
  export type vocabularyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vocabularies.
     */
    data: XOR<vocabularyUpdateManyMutationInput, vocabularyUncheckedUpdateManyInput>
    /**
     * Filter which vocabularies to update
     */
    where?: vocabularyWhereInput
    /**
     * Limit how many vocabularies to update.
     */
    limit?: number
  }

  /**
   * vocabulary updateManyAndReturn
   */
  export type vocabularyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * The data used to update vocabularies.
     */
    data: XOR<vocabularyUpdateManyMutationInput, vocabularyUncheckedUpdateManyInput>
    /**
     * Filter which vocabularies to update
     */
    where?: vocabularyWhereInput
    /**
     * Limit how many vocabularies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vocabulary upsert
   */
  export type vocabularyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    /**
     * The filter to search for the vocabulary to update in case it exists.
     */
    where: vocabularyWhereUniqueInput
    /**
     * In case the vocabulary found by the `where` argument doesn't exist, create a new vocabulary with this data.
     */
    create: XOR<vocabularyCreateInput, vocabularyUncheckedCreateInput>
    /**
     * In case the vocabulary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vocabularyUpdateInput, vocabularyUncheckedUpdateInput>
  }

  /**
   * vocabulary delete
   */
  export type vocabularyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
    /**
     * Filter which vocabulary to delete.
     */
    where: vocabularyWhereUniqueInput
  }

  /**
   * vocabulary deleteMany
   */
  export type vocabularyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocabularies to delete
     */
    where?: vocabularyWhereInput
    /**
     * Limit how many vocabularies to delete.
     */
    limit?: number
  }

  /**
   * vocabulary.lessons
   */
  export type vocabulary$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lessons
     */
    select?: lessonsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the lessons
     */
    omit?: lessonsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: lessonsInclude<ExtArgs> | null
    where?: lessonsWhereInput
  }

  /**
   * vocabulary without action
   */
  export type vocabularyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocabulary
     */
    select?: vocabularySelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocabulary
     */
    omit?: vocabularyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocabularyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    email: 'email',
    profile_pic: 'profile_pic',
    google_id: 'google_id',
    role: 'role',
    is_verified: 'is_verified',
    coin: 'coin',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CoursesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    course_id: 'course_id',
    userId: 'userId'
  };

  export type CoursesScalarFieldEnum = (typeof CoursesScalarFieldEnum)[keyof typeof CoursesScalarFieldEnum]


  export const Show_historyScalarFieldEnum: {
    id: 'id',
    category_id: 'category_id',
    lesson_id: 'lesson_id',
    showed_at: 'showed_at',
    userId: 'userId'
  };

  export type Show_historyScalarFieldEnum = (typeof Show_historyScalarFieldEnum)[keyof typeof Show_historyScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    thumbnail: 'thumbnail'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const LessonsScalarFieldEnum: {
    id: 'id',
    video_url: 'video_url',
    title: 'title',
    categoryId: 'categoryId'
  };

  export type LessonsScalarFieldEnum = (typeof LessonsScalarFieldEnum)[keyof typeof LessonsScalarFieldEnum]


  export const VocabularyScalarFieldEnum: {
    id: 'id',
    word: 'word',
    org_version: 'org_version',
    lessonsId: 'lessonsId'
  };

  export type VocabularyScalarFieldEnum = (typeof VocabularyScalarFieldEnum)[keyof typeof VocabularyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    surname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    profile_pic?: StringNullableFilter<"User"> | string | null
    google_id?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_verified?: BoolFilter<"User"> | boolean
    coin?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    show_history?: Show_historyListRelationFilter
    courses?: CoursesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrderInput | SortOrder
    email?: SortOrder
    profile_pic?: SortOrderInput | SortOrder
    google_id?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    coin?: SortOrder
    created_at?: SortOrder
    show_history?: show_historyOrderByRelationAggregateInput
    courses?: CoursesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    google_id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    surname?: StringNullableFilter<"User"> | string | null
    profile_pic?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    is_verified?: BoolFilter<"User"> | boolean
    coin?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    show_history?: Show_historyListRelationFilter
    courses?: CoursesListRelationFilter
  }, "id" | "email" | "google_id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrderInput | SortOrder
    email?: SortOrder
    profile_pic?: SortOrderInput | SortOrder
    google_id?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    coin?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    surname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    profile_pic?: StringNullableWithAggregatesFilter<"User"> | string | null
    google_id?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    coin?: IntWithAggregatesFilter<"User"> | number
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CoursesWhereInput = {
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    id?: StringFilter<"Courses"> | string
    title?: StringFilter<"Courses"> | string
    course_id?: StringFilter<"Courses"> | string
    userId?: StringNullableFilter<"Courses"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type CoursesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    course_id?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type CoursesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    course_id?: string
    AND?: CoursesWhereInput | CoursesWhereInput[]
    OR?: CoursesWhereInput[]
    NOT?: CoursesWhereInput | CoursesWhereInput[]
    userId?: StringNullableFilter<"Courses"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "title" | "course_id">

  export type CoursesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    course_id?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: CoursesCountOrderByAggregateInput
    _max?: CoursesMaxOrderByAggregateInput
    _min?: CoursesMinOrderByAggregateInput
  }

  export type CoursesScalarWhereWithAggregatesInput = {
    AND?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    OR?: CoursesScalarWhereWithAggregatesInput[]
    NOT?: CoursesScalarWhereWithAggregatesInput | CoursesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Courses"> | string
    title?: StringWithAggregatesFilter<"Courses"> | string
    course_id?: StringWithAggregatesFilter<"Courses"> | string
    userId?: StringNullableWithAggregatesFilter<"Courses"> | string | null
  }

  export type show_historyWhereInput = {
    AND?: show_historyWhereInput | show_historyWhereInput[]
    OR?: show_historyWhereInput[]
    NOT?: show_historyWhereInput | show_historyWhereInput[]
    id?: StringFilter<"show_history"> | string
    category_id?: StringFilter<"show_history"> | string
    lesson_id?: StringFilter<"show_history"> | string
    showed_at?: DateTimeFilter<"show_history"> | Date | string
    userId?: StringNullableFilter<"show_history"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type show_historyOrderByWithRelationInput = {
    id?: SortOrder
    category_id?: SortOrder
    lesson_id?: SortOrder
    showed_at?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type show_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: show_historyWhereInput | show_historyWhereInput[]
    OR?: show_historyWhereInput[]
    NOT?: show_historyWhereInput | show_historyWhereInput[]
    category_id?: StringFilter<"show_history"> | string
    lesson_id?: StringFilter<"show_history"> | string
    showed_at?: DateTimeFilter<"show_history"> | Date | string
    userId?: StringNullableFilter<"show_history"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type show_historyOrderByWithAggregationInput = {
    id?: SortOrder
    category_id?: SortOrder
    lesson_id?: SortOrder
    showed_at?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: show_historyCountOrderByAggregateInput
    _max?: show_historyMaxOrderByAggregateInput
    _min?: show_historyMinOrderByAggregateInput
  }

  export type show_historyScalarWhereWithAggregatesInput = {
    AND?: show_historyScalarWhereWithAggregatesInput | show_historyScalarWhereWithAggregatesInput[]
    OR?: show_historyScalarWhereWithAggregatesInput[]
    NOT?: show_historyScalarWhereWithAggregatesInput | show_historyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"show_history"> | string
    category_id?: StringWithAggregatesFilter<"show_history"> | string
    lesson_id?: StringWithAggregatesFilter<"show_history"> | string
    showed_at?: DateTimeWithAggregatesFilter<"show_history"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"show_history"> | string | null
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: StringFilter<"category"> | string
    title?: StringFilter<"category"> | string
    thumbnail?: StringFilter<"category"> | string
    lessons?: LessonsListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    lessons?: lessonsOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    thumbnail?: StringFilter<"category"> | string
    lessons?: LessonsListRelationFilter
  }, "id" | "title">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"category"> | string
    title?: StringWithAggregatesFilter<"category"> | string
    thumbnail?: StringWithAggregatesFilter<"category"> | string
  }

  export type lessonsWhereInput = {
    AND?: lessonsWhereInput | lessonsWhereInput[]
    OR?: lessonsWhereInput[]
    NOT?: lessonsWhereInput | lessonsWhereInput[]
    id?: StringFilter<"lessons"> | string
    video_url?: StringFilter<"lessons"> | string
    title?: StringFilter<"lessons"> | string
    categoryId?: StringNullableFilter<"lessons"> | string | null
    vocabulary?: VocabularyListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
  }

  export type lessonsOrderByWithRelationInput = {
    id?: SortOrder
    video_url?: SortOrder
    title?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    vocabulary?: vocabularyOrderByRelationAggregateInput
    category?: categoryOrderByWithRelationInput
  }

  export type lessonsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    video_url?: string
    AND?: lessonsWhereInput | lessonsWhereInput[]
    OR?: lessonsWhereInput[]
    NOT?: lessonsWhereInput | lessonsWhereInput[]
    title?: StringFilter<"lessons"> | string
    categoryId?: StringNullableFilter<"lessons"> | string | null
    vocabulary?: VocabularyListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
  }, "id" | "video_url">

  export type lessonsOrderByWithAggregationInput = {
    id?: SortOrder
    video_url?: SortOrder
    title?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: lessonsCountOrderByAggregateInput
    _max?: lessonsMaxOrderByAggregateInput
    _min?: lessonsMinOrderByAggregateInput
  }

  export type lessonsScalarWhereWithAggregatesInput = {
    AND?: lessonsScalarWhereWithAggregatesInput | lessonsScalarWhereWithAggregatesInput[]
    OR?: lessonsScalarWhereWithAggregatesInput[]
    NOT?: lessonsScalarWhereWithAggregatesInput | lessonsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"lessons"> | string
    video_url?: StringWithAggregatesFilter<"lessons"> | string
    title?: StringWithAggregatesFilter<"lessons"> | string
    categoryId?: StringNullableWithAggregatesFilter<"lessons"> | string | null
  }

  export type vocabularyWhereInput = {
    AND?: vocabularyWhereInput | vocabularyWhereInput[]
    OR?: vocabularyWhereInput[]
    NOT?: vocabularyWhereInput | vocabularyWhereInput[]
    id?: StringFilter<"vocabulary"> | string
    word?: StringFilter<"vocabulary"> | string
    org_version?: StringFilter<"vocabulary"> | string
    lessonsId?: StringNullableFilter<"vocabulary"> | string | null
    lessons?: XOR<LessonsNullableScalarRelationFilter, lessonsWhereInput> | null
  }

  export type vocabularyOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    org_version?: SortOrder
    lessonsId?: SortOrderInput | SortOrder
    lessons?: lessonsOrderByWithRelationInput
  }

  export type vocabularyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: vocabularyWhereInput | vocabularyWhereInput[]
    OR?: vocabularyWhereInput[]
    NOT?: vocabularyWhereInput | vocabularyWhereInput[]
    word?: StringFilter<"vocabulary"> | string
    org_version?: StringFilter<"vocabulary"> | string
    lessonsId?: StringNullableFilter<"vocabulary"> | string | null
    lessons?: XOR<LessonsNullableScalarRelationFilter, lessonsWhereInput> | null
  }, "id">

  export type vocabularyOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    org_version?: SortOrder
    lessonsId?: SortOrderInput | SortOrder
    _count?: vocabularyCountOrderByAggregateInput
    _max?: vocabularyMaxOrderByAggregateInput
    _min?: vocabularyMinOrderByAggregateInput
  }

  export type vocabularyScalarWhereWithAggregatesInput = {
    AND?: vocabularyScalarWhereWithAggregatesInput | vocabularyScalarWhereWithAggregatesInput[]
    OR?: vocabularyScalarWhereWithAggregatesInput[]
    NOT?: vocabularyScalarWhereWithAggregatesInput | vocabularyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"vocabulary"> | string
    word?: StringWithAggregatesFilter<"vocabulary"> | string
    org_version?: StringWithAggregatesFilter<"vocabulary"> | string
    lessonsId?: StringNullableWithAggregatesFilter<"vocabulary"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    profile_pic?: string | null
    google_id: string
    role?: $Enums.Role
    is_verified?: boolean
    coin?: number
    created_at?: Date | string
    show_history?: show_historyCreateNestedManyWithoutUserInput
    courses?: CoursesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    profile_pic?: string | null
    google_id: string
    role?: $Enums.Role
    is_verified?: boolean
    coin?: number
    created_at?: Date | string
    show_history?: show_historyUncheckedCreateNestedManyWithoutUserInput
    courses?: CoursesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    coin?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    show_history?: show_historyUpdateManyWithoutUserNestedInput
    courses?: CoursesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    coin?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    show_history?: show_historyUncheckedUpdateManyWithoutUserNestedInput
    courses?: CoursesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    profile_pic?: string | null
    google_id: string
    role?: $Enums.Role
    is_verified?: boolean
    coin?: number
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    coin?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    coin?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesCreateInput = {
    id?: string
    title: string
    course_id: string
    User?: UserCreateNestedOneWithoutCoursesInput
  }

  export type CoursesUncheckedCreateInput = {
    id?: string
    title: string
    course_id: string
    userId?: string | null
  }

  export type CoursesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutCoursesNestedInput
  }

  export type CoursesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CoursesCreateManyInput = {
    id?: string
    title: string
    course_id: string
    userId?: string | null
  }

  export type CoursesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type CoursesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type show_historyCreateInput = {
    id?: string
    category_id: string
    lesson_id: string
    showed_at?: Date | string
    User?: UserCreateNestedOneWithoutShow_historyInput
  }

  export type show_historyUncheckedCreateInput = {
    id?: string
    category_id: string
    lesson_id: string
    showed_at?: Date | string
    userId?: string | null
  }

  export type show_historyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    showed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutShow_historyNestedInput
  }

  export type show_historyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    showed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type show_historyCreateManyInput = {
    id?: string
    category_id: string
    lesson_id: string
    showed_at?: Date | string
    userId?: string | null
  }

  export type show_historyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    showed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type show_historyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    showed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryCreateInput = {
    id?: string
    title: string
    thumbnail: string
    lessons?: lessonsCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: string
    title: string
    thumbnail: string
    lessons?: lessonsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    lessons?: lessonsUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    lessons?: lessonsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: string
    title: string
    thumbnail: string
  }

  export type categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type lessonsCreateInput = {
    id?: string
    video_url: string
    title: string
    vocabulary?: vocabularyCreateNestedManyWithoutLessonsInput
    category?: categoryCreateNestedOneWithoutLessonsInput
  }

  export type lessonsUncheckedCreateInput = {
    id?: string
    video_url: string
    title: string
    categoryId?: string | null
    vocabulary?: vocabularyUncheckedCreateNestedManyWithoutLessonsInput
  }

  export type lessonsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    vocabulary?: vocabularyUpdateManyWithoutLessonsNestedInput
    category?: categoryUpdateOneWithoutLessonsNestedInput
  }

  export type lessonsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    vocabulary?: vocabularyUncheckedUpdateManyWithoutLessonsNestedInput
  }

  export type lessonsCreateManyInput = {
    id?: string
    video_url: string
    title: string
    categoryId?: string | null
  }

  export type lessonsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type lessonsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vocabularyCreateInput = {
    id?: string
    word: string
    org_version: string
    lessons?: lessonsCreateNestedOneWithoutVocabularyInput
  }

  export type vocabularyUncheckedCreateInput = {
    id?: string
    word: string
    org_version: string
    lessonsId?: string | null
  }

  export type vocabularyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    org_version?: StringFieldUpdateOperationsInput | string
    lessons?: lessonsUpdateOneWithoutVocabularyNestedInput
  }

  export type vocabularyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    org_version?: StringFieldUpdateOperationsInput | string
    lessonsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vocabularyCreateManyInput = {
    id?: string
    word: string
    org_version: string
    lessonsId?: string | null
  }

  export type vocabularyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    org_version?: StringFieldUpdateOperationsInput | string
  }

  export type vocabularyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    org_version?: StringFieldUpdateOperationsInput | string
    lessonsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Show_historyListRelationFilter = {
    every?: show_historyWhereInput
    some?: show_historyWhereInput
    none?: show_historyWhereInput
  }

  export type CoursesListRelationFilter = {
    every?: CoursesWhereInput
    some?: CoursesWhereInput
    none?: CoursesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type show_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoursesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    profile_pic?: SortOrder
    google_id?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    coin?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    coin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    profile_pic?: SortOrder
    google_id?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    coin?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    profile_pic?: SortOrder
    google_id?: SortOrder
    role?: SortOrder
    is_verified?: SortOrder
    coin?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    coin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CoursesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    course_id?: SortOrder
    userId?: SortOrder
  }

  export type CoursesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    course_id?: SortOrder
    userId?: SortOrder
  }

  export type CoursesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    course_id?: SortOrder
    userId?: SortOrder
  }

  export type show_historyCountOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    lesson_id?: SortOrder
    showed_at?: SortOrder
    userId?: SortOrder
  }

  export type show_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    lesson_id?: SortOrder
    showed_at?: SortOrder
    userId?: SortOrder
  }

  export type show_historyMinOrderByAggregateInput = {
    id?: SortOrder
    category_id?: SortOrder
    lesson_id?: SortOrder
    showed_at?: SortOrder
    userId?: SortOrder
  }

  export type LessonsListRelationFilter = {
    every?: lessonsWhereInput
    some?: lessonsWhereInput
    none?: lessonsWhereInput
  }

  export type lessonsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    thumbnail?: SortOrder
  }

  export type VocabularyListRelationFilter = {
    every?: vocabularyWhereInput
    some?: vocabularyWhereInput
    none?: vocabularyWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type vocabularyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type lessonsCountOrderByAggregateInput = {
    id?: SortOrder
    video_url?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
  }

  export type lessonsMaxOrderByAggregateInput = {
    id?: SortOrder
    video_url?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
  }

  export type lessonsMinOrderByAggregateInput = {
    id?: SortOrder
    video_url?: SortOrder
    title?: SortOrder
    categoryId?: SortOrder
  }

  export type LessonsNullableScalarRelationFilter = {
    is?: lessonsWhereInput | null
    isNot?: lessonsWhereInput | null
  }

  export type vocabularyCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    org_version?: SortOrder
    lessonsId?: SortOrder
  }

  export type vocabularyMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    org_version?: SortOrder
    lessonsId?: SortOrder
  }

  export type vocabularyMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    org_version?: SortOrder
    lessonsId?: SortOrder
  }

  export type show_historyCreateNestedManyWithoutUserInput = {
    create?: XOR<show_historyCreateWithoutUserInput, show_historyUncheckedCreateWithoutUserInput> | show_historyCreateWithoutUserInput[] | show_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: show_historyCreateOrConnectWithoutUserInput | show_historyCreateOrConnectWithoutUserInput[]
    createMany?: show_historyCreateManyUserInputEnvelope
    connect?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
  }

  export type CoursesCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursesCreateWithoutUserInput, CoursesUncheckedCreateWithoutUserInput> | CoursesCreateWithoutUserInput[] | CoursesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutUserInput | CoursesCreateOrConnectWithoutUserInput[]
    createMany?: CoursesCreateManyUserInputEnvelope
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
  }

  export type show_historyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<show_historyCreateWithoutUserInput, show_historyUncheckedCreateWithoutUserInput> | show_historyCreateWithoutUserInput[] | show_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: show_historyCreateOrConnectWithoutUserInput | show_historyCreateOrConnectWithoutUserInput[]
    createMany?: show_historyCreateManyUserInputEnvelope
    connect?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
  }

  export type CoursesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursesCreateWithoutUserInput, CoursesUncheckedCreateWithoutUserInput> | CoursesCreateWithoutUserInput[] | CoursesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutUserInput | CoursesCreateOrConnectWithoutUserInput[]
    createMany?: CoursesCreateManyUserInputEnvelope
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type show_historyUpdateManyWithoutUserNestedInput = {
    create?: XOR<show_historyCreateWithoutUserInput, show_historyUncheckedCreateWithoutUserInput> | show_historyCreateWithoutUserInput[] | show_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: show_historyCreateOrConnectWithoutUserInput | show_historyCreateOrConnectWithoutUserInput[]
    upsert?: show_historyUpsertWithWhereUniqueWithoutUserInput | show_historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: show_historyCreateManyUserInputEnvelope
    set?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
    disconnect?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
    delete?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
    connect?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
    update?: show_historyUpdateWithWhereUniqueWithoutUserInput | show_historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: show_historyUpdateManyWithWhereWithoutUserInput | show_historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: show_historyScalarWhereInput | show_historyScalarWhereInput[]
  }

  export type CoursesUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursesCreateWithoutUserInput, CoursesUncheckedCreateWithoutUserInput> | CoursesCreateWithoutUserInput[] | CoursesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutUserInput | CoursesCreateOrConnectWithoutUserInput[]
    upsert?: CoursesUpsertWithWhereUniqueWithoutUserInput | CoursesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursesCreateManyUserInputEnvelope
    set?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    disconnect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    delete?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    update?: CoursesUpdateWithWhereUniqueWithoutUserInput | CoursesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursesUpdateManyWithWhereWithoutUserInput | CoursesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
  }

  export type show_historyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<show_historyCreateWithoutUserInput, show_historyUncheckedCreateWithoutUserInput> | show_historyCreateWithoutUserInput[] | show_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: show_historyCreateOrConnectWithoutUserInput | show_historyCreateOrConnectWithoutUserInput[]
    upsert?: show_historyUpsertWithWhereUniqueWithoutUserInput | show_historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: show_historyCreateManyUserInputEnvelope
    set?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
    disconnect?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
    delete?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
    connect?: show_historyWhereUniqueInput | show_historyWhereUniqueInput[]
    update?: show_historyUpdateWithWhereUniqueWithoutUserInput | show_historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: show_historyUpdateManyWithWhereWithoutUserInput | show_historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: show_historyScalarWhereInput | show_historyScalarWhereInput[]
  }

  export type CoursesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursesCreateWithoutUserInput, CoursesUncheckedCreateWithoutUserInput> | CoursesCreateWithoutUserInput[] | CoursesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursesCreateOrConnectWithoutUserInput | CoursesCreateOrConnectWithoutUserInput[]
    upsert?: CoursesUpsertWithWhereUniqueWithoutUserInput | CoursesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursesCreateManyUserInputEnvelope
    set?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    disconnect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    delete?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    connect?: CoursesWhereUniqueInput | CoursesWhereUniqueInput[]
    update?: CoursesUpdateWithWhereUniqueWithoutUserInput | CoursesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursesUpdateManyWithWhereWithoutUserInput | CoursesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCoursesInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesInput
    upsert?: UserUpsertWithoutCoursesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesInput, UserUpdateWithoutCoursesInput>, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserCreateNestedOneWithoutShow_historyInput = {
    create?: XOR<UserCreateWithoutShow_historyInput, UserUncheckedCreateWithoutShow_historyInput>
    connectOrCreate?: UserCreateOrConnectWithoutShow_historyInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutShow_historyNestedInput = {
    create?: XOR<UserCreateWithoutShow_historyInput, UserUncheckedCreateWithoutShow_historyInput>
    connectOrCreate?: UserCreateOrConnectWithoutShow_historyInput
    upsert?: UserUpsertWithoutShow_historyInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShow_historyInput, UserUpdateWithoutShow_historyInput>, UserUncheckedUpdateWithoutShow_historyInput>
  }

  export type lessonsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<lessonsCreateWithoutCategoryInput, lessonsUncheckedCreateWithoutCategoryInput> | lessonsCreateWithoutCategoryInput[] | lessonsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutCategoryInput | lessonsCreateOrConnectWithoutCategoryInput[]
    createMany?: lessonsCreateManyCategoryInputEnvelope
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
  }

  export type lessonsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<lessonsCreateWithoutCategoryInput, lessonsUncheckedCreateWithoutCategoryInput> | lessonsCreateWithoutCategoryInput[] | lessonsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutCategoryInput | lessonsCreateOrConnectWithoutCategoryInput[]
    createMany?: lessonsCreateManyCategoryInputEnvelope
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
  }

  export type lessonsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<lessonsCreateWithoutCategoryInput, lessonsUncheckedCreateWithoutCategoryInput> | lessonsCreateWithoutCategoryInput[] | lessonsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutCategoryInput | lessonsCreateOrConnectWithoutCategoryInput[]
    upsert?: lessonsUpsertWithWhereUniqueWithoutCategoryInput | lessonsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: lessonsCreateManyCategoryInputEnvelope
    set?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    disconnect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    delete?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    update?: lessonsUpdateWithWhereUniqueWithoutCategoryInput | lessonsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: lessonsUpdateManyWithWhereWithoutCategoryInput | lessonsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
  }

  export type lessonsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<lessonsCreateWithoutCategoryInput, lessonsUncheckedCreateWithoutCategoryInput> | lessonsCreateWithoutCategoryInput[] | lessonsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: lessonsCreateOrConnectWithoutCategoryInput | lessonsCreateOrConnectWithoutCategoryInput[]
    upsert?: lessonsUpsertWithWhereUniqueWithoutCategoryInput | lessonsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: lessonsCreateManyCategoryInputEnvelope
    set?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    disconnect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    delete?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    connect?: lessonsWhereUniqueInput | lessonsWhereUniqueInput[]
    update?: lessonsUpdateWithWhereUniqueWithoutCategoryInput | lessonsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: lessonsUpdateManyWithWhereWithoutCategoryInput | lessonsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
  }

  export type vocabularyCreateNestedManyWithoutLessonsInput = {
    create?: XOR<vocabularyCreateWithoutLessonsInput, vocabularyUncheckedCreateWithoutLessonsInput> | vocabularyCreateWithoutLessonsInput[] | vocabularyUncheckedCreateWithoutLessonsInput[]
    connectOrCreate?: vocabularyCreateOrConnectWithoutLessonsInput | vocabularyCreateOrConnectWithoutLessonsInput[]
    createMany?: vocabularyCreateManyLessonsInputEnvelope
    connect?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
  }

  export type categoryCreateNestedOneWithoutLessonsInput = {
    create?: XOR<categoryCreateWithoutLessonsInput, categoryUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutLessonsInput
    connect?: categoryWhereUniqueInput
  }

  export type vocabularyUncheckedCreateNestedManyWithoutLessonsInput = {
    create?: XOR<vocabularyCreateWithoutLessonsInput, vocabularyUncheckedCreateWithoutLessonsInput> | vocabularyCreateWithoutLessonsInput[] | vocabularyUncheckedCreateWithoutLessonsInput[]
    connectOrCreate?: vocabularyCreateOrConnectWithoutLessonsInput | vocabularyCreateOrConnectWithoutLessonsInput[]
    createMany?: vocabularyCreateManyLessonsInputEnvelope
    connect?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
  }

  export type vocabularyUpdateManyWithoutLessonsNestedInput = {
    create?: XOR<vocabularyCreateWithoutLessonsInput, vocabularyUncheckedCreateWithoutLessonsInput> | vocabularyCreateWithoutLessonsInput[] | vocabularyUncheckedCreateWithoutLessonsInput[]
    connectOrCreate?: vocabularyCreateOrConnectWithoutLessonsInput | vocabularyCreateOrConnectWithoutLessonsInput[]
    upsert?: vocabularyUpsertWithWhereUniqueWithoutLessonsInput | vocabularyUpsertWithWhereUniqueWithoutLessonsInput[]
    createMany?: vocabularyCreateManyLessonsInputEnvelope
    set?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
    disconnect?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
    delete?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
    connect?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
    update?: vocabularyUpdateWithWhereUniqueWithoutLessonsInput | vocabularyUpdateWithWhereUniqueWithoutLessonsInput[]
    updateMany?: vocabularyUpdateManyWithWhereWithoutLessonsInput | vocabularyUpdateManyWithWhereWithoutLessonsInput[]
    deleteMany?: vocabularyScalarWhereInput | vocabularyScalarWhereInput[]
  }

  export type categoryUpdateOneWithoutLessonsNestedInput = {
    create?: XOR<categoryCreateWithoutLessonsInput, categoryUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: categoryCreateOrConnectWithoutLessonsInput
    upsert?: categoryUpsertWithoutLessonsInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutLessonsInput, categoryUpdateWithoutLessonsInput>, categoryUncheckedUpdateWithoutLessonsInput>
  }

  export type vocabularyUncheckedUpdateManyWithoutLessonsNestedInput = {
    create?: XOR<vocabularyCreateWithoutLessonsInput, vocabularyUncheckedCreateWithoutLessonsInput> | vocabularyCreateWithoutLessonsInput[] | vocabularyUncheckedCreateWithoutLessonsInput[]
    connectOrCreate?: vocabularyCreateOrConnectWithoutLessonsInput | vocabularyCreateOrConnectWithoutLessonsInput[]
    upsert?: vocabularyUpsertWithWhereUniqueWithoutLessonsInput | vocabularyUpsertWithWhereUniqueWithoutLessonsInput[]
    createMany?: vocabularyCreateManyLessonsInputEnvelope
    set?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
    disconnect?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
    delete?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
    connect?: vocabularyWhereUniqueInput | vocabularyWhereUniqueInput[]
    update?: vocabularyUpdateWithWhereUniqueWithoutLessonsInput | vocabularyUpdateWithWhereUniqueWithoutLessonsInput[]
    updateMany?: vocabularyUpdateManyWithWhereWithoutLessonsInput | vocabularyUpdateManyWithWhereWithoutLessonsInput[]
    deleteMany?: vocabularyScalarWhereInput | vocabularyScalarWhereInput[]
  }

  export type lessonsCreateNestedOneWithoutVocabularyInput = {
    create?: XOR<lessonsCreateWithoutVocabularyInput, lessonsUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: lessonsCreateOrConnectWithoutVocabularyInput
    connect?: lessonsWhereUniqueInput
  }

  export type lessonsUpdateOneWithoutVocabularyNestedInput = {
    create?: XOR<lessonsCreateWithoutVocabularyInput, lessonsUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: lessonsCreateOrConnectWithoutVocabularyInput
    upsert?: lessonsUpsertWithoutVocabularyInput
    disconnect?: lessonsWhereInput | boolean
    delete?: lessonsWhereInput | boolean
    connect?: lessonsWhereUniqueInput
    update?: XOR<XOR<lessonsUpdateToOneWithWhereWithoutVocabularyInput, lessonsUpdateWithoutVocabularyInput>, lessonsUncheckedUpdateWithoutVocabularyInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type show_historyCreateWithoutUserInput = {
    id?: string
    category_id: string
    lesson_id: string
    showed_at?: Date | string
  }

  export type show_historyUncheckedCreateWithoutUserInput = {
    id?: string
    category_id: string
    lesson_id: string
    showed_at?: Date | string
  }

  export type show_historyCreateOrConnectWithoutUserInput = {
    where: show_historyWhereUniqueInput
    create: XOR<show_historyCreateWithoutUserInput, show_historyUncheckedCreateWithoutUserInput>
  }

  export type show_historyCreateManyUserInputEnvelope = {
    data: show_historyCreateManyUserInput | show_historyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CoursesCreateWithoutUserInput = {
    id?: string
    title: string
    course_id: string
  }

  export type CoursesUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    course_id: string
  }

  export type CoursesCreateOrConnectWithoutUserInput = {
    where: CoursesWhereUniqueInput
    create: XOR<CoursesCreateWithoutUserInput, CoursesUncheckedCreateWithoutUserInput>
  }

  export type CoursesCreateManyUserInputEnvelope = {
    data: CoursesCreateManyUserInput | CoursesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type show_historyUpsertWithWhereUniqueWithoutUserInput = {
    where: show_historyWhereUniqueInput
    update: XOR<show_historyUpdateWithoutUserInput, show_historyUncheckedUpdateWithoutUserInput>
    create: XOR<show_historyCreateWithoutUserInput, show_historyUncheckedCreateWithoutUserInput>
  }

  export type show_historyUpdateWithWhereUniqueWithoutUserInput = {
    where: show_historyWhereUniqueInput
    data: XOR<show_historyUpdateWithoutUserInput, show_historyUncheckedUpdateWithoutUserInput>
  }

  export type show_historyUpdateManyWithWhereWithoutUserInput = {
    where: show_historyScalarWhereInput
    data: XOR<show_historyUpdateManyMutationInput, show_historyUncheckedUpdateManyWithoutUserInput>
  }

  export type show_historyScalarWhereInput = {
    AND?: show_historyScalarWhereInput | show_historyScalarWhereInput[]
    OR?: show_historyScalarWhereInput[]
    NOT?: show_historyScalarWhereInput | show_historyScalarWhereInput[]
    id?: StringFilter<"show_history"> | string
    category_id?: StringFilter<"show_history"> | string
    lesson_id?: StringFilter<"show_history"> | string
    showed_at?: DateTimeFilter<"show_history"> | Date | string
    userId?: StringNullableFilter<"show_history"> | string | null
  }

  export type CoursesUpsertWithWhereUniqueWithoutUserInput = {
    where: CoursesWhereUniqueInput
    update: XOR<CoursesUpdateWithoutUserInput, CoursesUncheckedUpdateWithoutUserInput>
    create: XOR<CoursesCreateWithoutUserInput, CoursesUncheckedCreateWithoutUserInput>
  }

  export type CoursesUpdateWithWhereUniqueWithoutUserInput = {
    where: CoursesWhereUniqueInput
    data: XOR<CoursesUpdateWithoutUserInput, CoursesUncheckedUpdateWithoutUserInput>
  }

  export type CoursesUpdateManyWithWhereWithoutUserInput = {
    where: CoursesScalarWhereInput
    data: XOR<CoursesUpdateManyMutationInput, CoursesUncheckedUpdateManyWithoutUserInput>
  }

  export type CoursesScalarWhereInput = {
    AND?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
    OR?: CoursesScalarWhereInput[]
    NOT?: CoursesScalarWhereInput | CoursesScalarWhereInput[]
    id?: StringFilter<"Courses"> | string
    title?: StringFilter<"Courses"> | string
    course_id?: StringFilter<"Courses"> | string
    userId?: StringNullableFilter<"Courses"> | string | null
  }

  export type UserCreateWithoutCoursesInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    profile_pic?: string | null
    google_id: string
    role?: $Enums.Role
    is_verified?: boolean
    coin?: number
    created_at?: Date | string
    show_history?: show_historyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    profile_pic?: string | null
    google_id: string
    role?: $Enums.Role
    is_verified?: boolean
    coin?: number
    created_at?: Date | string
    show_history?: show_historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
  }

  export type UserUpsertWithoutCoursesInput = {
    update: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
    create: XOR<UserCreateWithoutCoursesInput, UserUncheckedCreateWithoutCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesInput, UserUncheckedUpdateWithoutCoursesInput>
  }

  export type UserUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    coin?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    show_history?: show_historyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    coin?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    show_history?: show_historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutShow_historyInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    profile_pic?: string | null
    google_id: string
    role?: $Enums.Role
    is_verified?: boolean
    coin?: number
    created_at?: Date | string
    courses?: CoursesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShow_historyInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    profile_pic?: string | null
    google_id: string
    role?: $Enums.Role
    is_verified?: boolean
    coin?: number
    created_at?: Date | string
    courses?: CoursesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShow_historyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShow_historyInput, UserUncheckedCreateWithoutShow_historyInput>
  }

  export type UserUpsertWithoutShow_historyInput = {
    update: XOR<UserUpdateWithoutShow_historyInput, UserUncheckedUpdateWithoutShow_historyInput>
    create: XOR<UserCreateWithoutShow_historyInput, UserUncheckedCreateWithoutShow_historyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShow_historyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShow_historyInput, UserUncheckedUpdateWithoutShow_historyInput>
  }

  export type UserUpdateWithoutShow_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    coin?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShow_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    google_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    coin?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CoursesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type lessonsCreateWithoutCategoryInput = {
    id?: string
    video_url: string
    title: string
    vocabulary?: vocabularyCreateNestedManyWithoutLessonsInput
  }

  export type lessonsUncheckedCreateWithoutCategoryInput = {
    id?: string
    video_url: string
    title: string
    vocabulary?: vocabularyUncheckedCreateNestedManyWithoutLessonsInput
  }

  export type lessonsCreateOrConnectWithoutCategoryInput = {
    where: lessonsWhereUniqueInput
    create: XOR<lessonsCreateWithoutCategoryInput, lessonsUncheckedCreateWithoutCategoryInput>
  }

  export type lessonsCreateManyCategoryInputEnvelope = {
    data: lessonsCreateManyCategoryInput | lessonsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type lessonsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: lessonsWhereUniqueInput
    update: XOR<lessonsUpdateWithoutCategoryInput, lessonsUncheckedUpdateWithoutCategoryInput>
    create: XOR<lessonsCreateWithoutCategoryInput, lessonsUncheckedCreateWithoutCategoryInput>
  }

  export type lessonsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: lessonsWhereUniqueInput
    data: XOR<lessonsUpdateWithoutCategoryInput, lessonsUncheckedUpdateWithoutCategoryInput>
  }

  export type lessonsUpdateManyWithWhereWithoutCategoryInput = {
    where: lessonsScalarWhereInput
    data: XOR<lessonsUpdateManyMutationInput, lessonsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type lessonsScalarWhereInput = {
    AND?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
    OR?: lessonsScalarWhereInput[]
    NOT?: lessonsScalarWhereInput | lessonsScalarWhereInput[]
    id?: StringFilter<"lessons"> | string
    video_url?: StringFilter<"lessons"> | string
    title?: StringFilter<"lessons"> | string
    categoryId?: StringNullableFilter<"lessons"> | string | null
  }

  export type vocabularyCreateWithoutLessonsInput = {
    id?: string
    word: string
    org_version: string
  }

  export type vocabularyUncheckedCreateWithoutLessonsInput = {
    id?: string
    word: string
    org_version: string
  }

  export type vocabularyCreateOrConnectWithoutLessonsInput = {
    where: vocabularyWhereUniqueInput
    create: XOR<vocabularyCreateWithoutLessonsInput, vocabularyUncheckedCreateWithoutLessonsInput>
  }

  export type vocabularyCreateManyLessonsInputEnvelope = {
    data: vocabularyCreateManyLessonsInput | vocabularyCreateManyLessonsInput[]
    skipDuplicates?: boolean
  }

  export type categoryCreateWithoutLessonsInput = {
    id?: string
    title: string
    thumbnail: string
  }

  export type categoryUncheckedCreateWithoutLessonsInput = {
    id?: string
    title: string
    thumbnail: string
  }

  export type categoryCreateOrConnectWithoutLessonsInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutLessonsInput, categoryUncheckedCreateWithoutLessonsInput>
  }

  export type vocabularyUpsertWithWhereUniqueWithoutLessonsInput = {
    where: vocabularyWhereUniqueInput
    update: XOR<vocabularyUpdateWithoutLessonsInput, vocabularyUncheckedUpdateWithoutLessonsInput>
    create: XOR<vocabularyCreateWithoutLessonsInput, vocabularyUncheckedCreateWithoutLessonsInput>
  }

  export type vocabularyUpdateWithWhereUniqueWithoutLessonsInput = {
    where: vocabularyWhereUniqueInput
    data: XOR<vocabularyUpdateWithoutLessonsInput, vocabularyUncheckedUpdateWithoutLessonsInput>
  }

  export type vocabularyUpdateManyWithWhereWithoutLessonsInput = {
    where: vocabularyScalarWhereInput
    data: XOR<vocabularyUpdateManyMutationInput, vocabularyUncheckedUpdateManyWithoutLessonsInput>
  }

  export type vocabularyScalarWhereInput = {
    AND?: vocabularyScalarWhereInput | vocabularyScalarWhereInput[]
    OR?: vocabularyScalarWhereInput[]
    NOT?: vocabularyScalarWhereInput | vocabularyScalarWhereInput[]
    id?: StringFilter<"vocabulary"> | string
    word?: StringFilter<"vocabulary"> | string
    org_version?: StringFilter<"vocabulary"> | string
    lessonsId?: StringNullableFilter<"vocabulary"> | string | null
  }

  export type categoryUpsertWithoutLessonsInput = {
    update: XOR<categoryUpdateWithoutLessonsInput, categoryUncheckedUpdateWithoutLessonsInput>
    create: XOR<categoryCreateWithoutLessonsInput, categoryUncheckedCreateWithoutLessonsInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutLessonsInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutLessonsInput, categoryUncheckedUpdateWithoutLessonsInput>
  }

  export type categoryUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type lessonsCreateWithoutVocabularyInput = {
    id?: string
    video_url: string
    title: string
    category?: categoryCreateNestedOneWithoutLessonsInput
  }

  export type lessonsUncheckedCreateWithoutVocabularyInput = {
    id?: string
    video_url: string
    title: string
    categoryId?: string | null
  }

  export type lessonsCreateOrConnectWithoutVocabularyInput = {
    where: lessonsWhereUniqueInput
    create: XOR<lessonsCreateWithoutVocabularyInput, lessonsUncheckedCreateWithoutVocabularyInput>
  }

  export type lessonsUpsertWithoutVocabularyInput = {
    update: XOR<lessonsUpdateWithoutVocabularyInput, lessonsUncheckedUpdateWithoutVocabularyInput>
    create: XOR<lessonsCreateWithoutVocabularyInput, lessonsUncheckedCreateWithoutVocabularyInput>
    where?: lessonsWhereInput
  }

  export type lessonsUpdateToOneWithWhereWithoutVocabularyInput = {
    where?: lessonsWhereInput
    data: XOR<lessonsUpdateWithoutVocabularyInput, lessonsUncheckedUpdateWithoutVocabularyInput>
  }

  export type lessonsUpdateWithoutVocabularyInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: categoryUpdateOneWithoutLessonsNestedInput
  }

  export type lessonsUncheckedUpdateWithoutVocabularyInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type show_historyCreateManyUserInput = {
    id?: string
    category_id: string
    lesson_id: string
    showed_at?: Date | string
  }

  export type CoursesCreateManyUserInput = {
    id?: string
    title: string
    course_id: string
  }

  export type show_historyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    showed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type show_historyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    showed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type show_historyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    lesson_id?: StringFieldUpdateOperationsInput | string
    showed_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type CoursesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type CoursesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    course_id?: StringFieldUpdateOperationsInput | string
  }

  export type lessonsCreateManyCategoryInput = {
    id?: string
    video_url: string
    title: string
  }

  export type lessonsUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    vocabulary?: vocabularyUpdateManyWithoutLessonsNestedInput
  }

  export type lessonsUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    vocabulary?: vocabularyUncheckedUpdateManyWithoutLessonsNestedInput
  }

  export type lessonsUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    video_url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type vocabularyCreateManyLessonsInput = {
    id?: string
    word: string
    org_version: string
  }

  export type vocabularyUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    org_version?: StringFieldUpdateOperationsInput | string
  }

  export type vocabularyUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    org_version?: StringFieldUpdateOperationsInput | string
  }

  export type vocabularyUncheckedUpdateManyWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    org_version?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}