# Kanmon JS/TS SDK

Kanmon SDK is a library that provides a simple way to interact with the Kanmon API.

## Documentation

You can find our full API docs at [https://kanmon.dev](https://kanmon.dev). Request an invite from your account manager if you don't have access yet.

### SDK Quickstart

Getting started with the SDK is easy. First, install the SDK:

```bash
npm install @kanmon/sdk
```

Then, you can initialize the SDK in your project:

```typescript
import { KanmonPlatformApi } from '@kanmon/sdk';

const kanmonApi = new KanmonPlatformApi('YOUR_API_KEY');
```

Example use of one of our API endpoints:

```typescript
const business = await kanmonApi.businesses.getBusiness({id: 'YourBizId', idType: 'PLATFORM'});
```

## Versioning

### Kanmon's spin on Semver

- Major version changes - non-backwards compatible API or SDK changes.
- Minor version changes - API changed, but backwards compatible. (SDK will change because of this too)
- Patch version changes - SDK bug fixes without syntax changes.

Our API docs located at [https://kanmon.dev](https://kanmon.dev) will always be up to date with the latest minor version. Patches won't be reflected in the API docs. Example: `v2.1`.

SDK tracks all the way to patches. `v2.1.3` -> `v2.1.4` would update the SDK package but the README docs wouldn't have changed.

### SDK Monorepo

Versioning for each SDK will always be the same across all SDKs. This means that occasionally, one language SDK could receive a version bump without any changes to the SDK itself. This is because another SDK had a change that required a version bump.

## Support

If you have any issues, please report them in the [issues](https://github.com/Kanmon/sdk/issues) section of Github. If you have any questions or need help, please contact your account manager and we'll be happy to help you directly!
