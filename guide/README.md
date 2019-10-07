# Introduction

Canyon is an optimized version of CraftBukkit for Minecraft Beta 1.7.3. It is essentially
a rough equivalent of [Paper](https://papermc.io) for CraftBukkit Beta 1.7.3.

Canyon's patches are licensed under the [MIT License](https://opensource.org/licenses/MIT),
whereas the upstream Bukkit API is licensed under the [LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.en.html)
and upstream CraftBukkit is licensed under [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html).

::: warning
This documentation is a perpetual work in progress.
:::

## Why use Canyon?

Canyon includes features that no other Minecraft Beta 1.7.3 server software has:

* A revamped networking stack that makes the server feel much more snappy.
* An improved, more precise server tick loop immune to time adjustments.
* Online-mode functionality fully restored (provided a JAR modification on the client
  to point to the moved Mojang authentication server).
* Faster world loading and saving.
* Async chunk loading.
* Numerous small micro-optimizations.
* Other bug fixes.