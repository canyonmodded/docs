# Configuring Canyon

Once you've set up Canyon, you may want to tweak some options. The regular `server.properties`
and `bukkit.yml` are present and work as you would expect, but Canyon also adds its own
configuration file, `canyon.yml`, with more advanced options.

## `canyon.yml`

`canyon.yml` is used to configure functionality specific to Canyon.

The default configuration is extremely conservative, preferring vanilla behavior and
maximum compatibility over all else. This is great for dropping in Canyon and getting
a virtually unchanged experience (but with less lag), but you don't get the full benefits
of switching to Canyon.

We strongly encourage you to tweak the `canyon.yml`. We've provided descriptions of the
settings and our own (opinionated) recommendations.

```yaml
settings:
    use-new-networking-stack: false
    auto-save-every: 6000
optimization:
    arrow-despawn-rate: 1200
    item-despawn-rate: 6000
```

### Global settings (`settings` group)

These settings modify the behavior of the entire server.

#### `use-new-networking-stack`

* **Default**: `false`
* **Optimized**: `true`

Enables a new, experimental network stack built on top of the [Netty](https://netty.io) library,
which also sees use in modern versions of Minecraft. You will get the best results when Canyon is
running on Linux or macOS.

The new networking stack provides many improvements:

* More accurate information about disconnects, with an attendant reduction in console spam.
* A much smoother game play experience, including faster chunk sending, especially when paired with
  Canyon's native async chunk loading.
* Takes full advantage of multiple CPU cores to compress chunk data, compared to the old stack which
  used a single thread for offloading chunk compression.
* Uses native polling functionality and I/O multiplexing, compared to the old network stack which spawns
  up to 3 threads per player.

::: warning
The new networking stack is incompatible with any plugin that tries to modify packets, such as Orebfuscator.
If you use any of these plugins, you should not enable the new networking stack.
:::

By default, due to potential plugin and mod incompatibilities, this option is disabled by default.

#### `auto-save-every`

* **Default**: `6000`
* **Optimized**: `6000`

Determines how many ticks the server should wait before initiating an auto-save.

To revert to the previous save behavior (beware, this will increase lag), you should set this to `40`.

### Optimization settings (`optimization` group)

These settings modify the entire server, but are tightly focused on performance enhancements.

#### `arrow-despawn-rate`

* **Default**: `1200`
* **Optimized**: `400`

How long (in ticks) Canyon should wait before removing arrows stuck on the ground. The default Minecraft setting
is to keep the arrows for 1 minute before despawning. The optimized setting cuts this to 20 seconds.

#### `item-despawn-rate`

* **Default**: `6000`
* **Optimized**: `1200`

How long (in ticks) Canyon should wait before removing items that have not been picked up off the ground. The
default Minecraft setting is to keep items for 5 minutes before despawning. The optimized setting
cuts this to 1 minute.