# Configuring Canyon

Once you've set up Canyon, you may want to tweak some options. The regular `server.properties`
and `bukkit.yml` are present and work as you would expect, but Canyon also adds its own
configuration file, `canyon.yml`, with more advanced options.

## `canyon.yml`

`canyon.yml` is used to configure functionality specific to Canyon. The default configuration is
as follows:

```yaml
settings:
    use-new-networking-stack: false
    auto-save-every: 6000
```

### Global settings (`settings` group)

#### `use-new-networking-stack`

Enables a new, experimental network stack built on top of the [Netty](https://netty.io) library,
which also sees use in modern versions of Minecraft. The new networking stack provides many improvements:

* More accurate information about disconnects, with an attendant reduction in console spam.
* A much smoother game play experience, including faster chunk sending.
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

Determines how many ticks the server should wait before initiating an auto-save. By default, Canyon
waits `6000` ticks (or every five minutes) before performing an autosave.

To revert to the previous save behavior (beware, this will increase lag), you should set this to `40`.