import type {
  FastifyBaseLogger,
  FastifyReply,
  FastifyRequest,
  FastifySchema,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteGenericInterface,
  RouteShorthandOptions,
} from 'fastify';
import type z from 'zod';
import type { ZodTypeProvider } from 'fastify-type-provider-zod';
import type {
  genericErrorResponse,
  schemaValidationErrorResponse,
} from './Validations';

export type RouteSchema = RouteShorthandOptions<
  RawServerDefault,
  RawRequestDefaultExpression<RawServerDefault>,
  RawReplyDefaultExpression<RawServerDefault>,
  RouteGenericInterface,
  unknown,
  FastifySchema,
  ZodTypeProvider,
  FastifyBaseLogger
>;

export type EntitySchema = {
  [key: string]: RouteSchema;
};

export type ControllerMethod = (
  request: FastifyRequest,
  reply: FastifyReply,
) => Promise<void>;

export type Controller = Record<string, ControllerMethod>;

export type GenericErrorResponse = z.infer<typeof genericErrorResponse>;
export type SchemaValidationErrorResponse = z.infer<
  typeof schemaValidationErrorResponse
>;
