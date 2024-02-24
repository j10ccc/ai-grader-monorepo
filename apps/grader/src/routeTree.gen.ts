/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as AuthenticatedWorkspaceExamsImport } from './routes/_authenticated/_workspace/exams'
import { Route as AuthenticatedWorkspaceDashboardImport } from './routes/_authenticated/_workspace/dashboard'
import { Route as AuthenticatedWorkspaceClassesImport } from './routes/_authenticated/_workspace/classes'
import { Route as AuthenticatedWorkspaceExamExamIdImport } from './routes/_authenticated/_workspace/exam.$examId'
import { Route as AuthenticatedWorkspaceHeaderReviewTasksDetailExamIdImport } from './routes/_authenticated/_workspace/header/review-tasks/detail.$examId'

// Create Virtual Routes

const LoginLazyImport = createFileRoute('/login')()
const AuthenticatedWorkspaceLazyImport = createFileRoute(
  '/_authenticated/_workspace',
)()
const AuthenticatedWorkspaceHeaderReviewTasksIndexLazyImport = createFileRoute(
  '/_authenticated/_workspace/header/review-tasks/',
)()

// Create/Update Routes

const LoginLazyRoute = LoginLazyImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedWorkspaceLazyRoute = AuthenticatedWorkspaceLazyImport.update(
  {
    id: '/_workspace',
    getParentRoute: () => AuthenticatedRoute,
  } as any,
).lazy(() =>
  import('./routes/_authenticated/_workspace.lazy').then((d) => d.Route),
)

const AuthenticatedWorkspaceExamsRoute =
  AuthenticatedWorkspaceExamsImport.update({
    path: '/exams',
    getParentRoute: () => AuthenticatedWorkspaceLazyRoute,
  } as any)

const AuthenticatedWorkspaceDashboardRoute =
  AuthenticatedWorkspaceDashboardImport.update({
    path: '/dashboard',
    getParentRoute: () => AuthenticatedWorkspaceLazyRoute,
  } as any)

const AuthenticatedWorkspaceClassesRoute =
  AuthenticatedWorkspaceClassesImport.update({
    path: '/classes',
    getParentRoute: () => AuthenticatedWorkspaceLazyRoute,
  } as any)

const AuthenticatedWorkspaceExamExamIdRoute =
  AuthenticatedWorkspaceExamExamIdImport.update({
    path: '/exam/$examId',
    getParentRoute: () => AuthenticatedWorkspaceLazyRoute,
  } as any)

const AuthenticatedWorkspaceHeaderReviewTasksIndexLazyRoute =
  AuthenticatedWorkspaceHeaderReviewTasksIndexLazyImport.update({
    path: '/header/review-tasks/',
    getParentRoute: () => AuthenticatedWorkspaceLazyRoute,
  } as any).lazy(() =>
    import(
      './routes/_authenticated/_workspace/header/review-tasks/index.lazy'
    ).then((d) => d.Route),
  )

const AuthenticatedWorkspaceHeaderReviewTasksDetailExamIdRoute =
  AuthenticatedWorkspaceHeaderReviewTasksDetailExamIdImport.update({
    path: '/header/review-tasks/detail/$examId',
    getParentRoute: () => AuthenticatedWorkspaceLazyRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/_workspace': {
      preLoaderRoute: typeof AuthenticatedWorkspaceLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/_workspace/classes': {
      preLoaderRoute: typeof AuthenticatedWorkspaceClassesImport
      parentRoute: typeof AuthenticatedWorkspaceLazyImport
    }
    '/_authenticated/_workspace/dashboard': {
      preLoaderRoute: typeof AuthenticatedWorkspaceDashboardImport
      parentRoute: typeof AuthenticatedWorkspaceLazyImport
    }
    '/_authenticated/_workspace/exams': {
      preLoaderRoute: typeof AuthenticatedWorkspaceExamsImport
      parentRoute: typeof AuthenticatedWorkspaceLazyImport
    }
    '/_authenticated/_workspace/exam/$examId': {
      preLoaderRoute: typeof AuthenticatedWorkspaceExamExamIdImport
      parentRoute: typeof AuthenticatedWorkspaceLazyImport
    }
    '/_authenticated/_workspace/header/review-tasks/': {
      preLoaderRoute: typeof AuthenticatedWorkspaceHeaderReviewTasksIndexLazyImport
      parentRoute: typeof AuthenticatedWorkspaceLazyImport
    }
    '/_authenticated/_workspace/header/review-tasks/detail/$examId': {
      preLoaderRoute: typeof AuthenticatedWorkspaceHeaderReviewTasksDetailExamIdImport
      parentRoute: typeof AuthenticatedWorkspaceLazyImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthenticatedRoute.addChildren([
    AuthenticatedWorkspaceLazyRoute.addChildren([
      AuthenticatedWorkspaceClassesRoute,
      AuthenticatedWorkspaceDashboardRoute,
      AuthenticatedWorkspaceExamsRoute,
      AuthenticatedWorkspaceExamExamIdRoute,
      AuthenticatedWorkspaceHeaderReviewTasksIndexLazyRoute,
      AuthenticatedWorkspaceHeaderReviewTasksDetailExamIdRoute,
    ]),
  ]),
  LoginLazyRoute,
])

/* prettier-ignore-end */
