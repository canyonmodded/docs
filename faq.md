---
sidebar: auto
---

# Frequently Asked Questions

## Do you need a client mod to use Canyon?

Canyon does not require any additional mods on the client. However, if
you choose to enable online-mode support, you will need a client mod to
change the login URL.

## Does Canyon retain full plugin compatibility with my Beta 1.7.3 plugins?

As much as practically possible, yes. However, these plugins do not understand
the new features that Canyon has introduced (such as async chunk loading). As
a result, you may not receive the full benefits from switching to Canyon.

## Does Canyon support mods?

Not yet, but we intend to support ModLoaderMP in the future - stay tuned.

## Is Canyon open source? Can I contribute to it?

Yes, but take note of the complex licensing structure of the project:

* Bukkit, the API for CraftBukkit, is [LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.en.html)-licensed.
* CraftBukkit, which implements the Bukkit API, is, in theory, [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)-licensed.
  However, it also patches proprietary Mojang code as well. Canyon has, for now, "grandfathered" the existing
  CraftBukkit structure.
* Canyon's patches on top of CraftBukkit are licensed under the [MIT License](https://opensource.org/licenses/MIT).
  These patches are incorporated into the existing CraftBukkit code base or patch decompiled proprietary
  Mojang code.

When you contribute to Canyon, you agree to make your changes under the MIT License, as with
the rest of the project.

With that being said, Canyon's source code is available on [GitHub](https://github.com/canyonmodded/canyon).

## How does Canyon reduce lag on my Beta 1.7.3 server?

Here are the changes that Canyon does to improve performance on the server. Note that this is
inevitably a limited list:

* **Improved server tick loop**: This makes the server immune to changes in the system clock and ensures that
  the server should sleep for the maximum amount of time it should be.
* **Sane auto-save interval**: Instead of saving every 2 seconds like regular CraftBukkit and vanilla, Canyon
  saves the world every 5 minutes and allows you to configure the interval as needed.
* **Async chunk loading**: Exploring the world, without chunk generation, will not usually lag the server as
  the I/O is offloaded to a separate thread pool. We have also made careful edits to reduce synchronous chunk
  loads from vanilla without changing gameplay.
* **A number of micro-optimizations** that, while not usually noticeable by themselves, sum up to a large performance
  improvement.
* **A number of knobs** you can tweak to improve server performance as needed.

Here are the changes that Canyon makes that allow you to perceive lower lag:

* **Better chunk sending**: The chunks nearest to the player will always get sent first.
* **New networking stack**: The new networking stack in Canyon uses native multiplexed I/O (instead of the old stack,
  which uses 2 threads per player and legacy Java network APIs) and can take full advantage of today's multi-core CPUs.