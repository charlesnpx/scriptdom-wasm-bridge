# Third-Party Notices

This package vendors a .NET WebAssembly `AppBundle` produced from the C# source in `c-sharp/`.

## Microsoft.SqlServer.TransactSql.ScriptDom

- Package: `Microsoft.SqlServer.TransactSql.ScriptDom`
- Version: `180.37.3`
- Project: <https://github.com/microsoft/SqlScriptDOM>
- NuGet metadata license expression: `MIT`
- NuGet metadata copyright: Copyright Microsoft Corporation. All rights reserved.

The ScriptDOM package is redistributed in compiled WebAssembly form inside `vendor/AppBundle/_framework/Microsoft.SqlServer.TransactSql.ScriptDom.wasm`.

MIT license text for ScriptDOM:

```text
The MIT License (MIT)

Copyright (c) Microsoft Corporation. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## .NET Runtime Components

- Runtime family: .NET WebAssembly / Mono runtime components
- Local build version observed in generated runtime assets: `10.0.9`
- Project: <https://github.com/dotnet/runtime>
- License: MIT

The generated `vendor/AppBundle` includes .NET runtime assets such as `dotnet.js`, `dotnet.runtime.js`, `dotnet.native.wasm`, `System.Private.CoreLib.wasm`, and related framework assemblies compiled to WebAssembly.

MIT license text for .NET runtime components:

```text
The MIT License (MIT)

Copyright (c) .NET Foundation and Contributors

All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Additional Runtime Notices

The .NET SDK used to produce this bundle includes a `ThirdPartyNotices.txt` file for runtime dependencies and resources. A copy from the SDK used for this bundle is included in this package as `DOTNET_THIRD_PARTY_NOTICES.txt`.

Review and refresh that notice file when regenerating `vendor/AppBundle` with a different .NET SDK/runtime.

For source builds on this machine, the notice file was located at:

```text
/usr/local/share/dotnet/ThirdPartyNotices.txt
```
