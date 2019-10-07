# The Canyon Demo Server

We host a public Canyon demo server at `demo.canyonmodded.com`. It is updated
with the latest Canyon build each night, so it is always on the bleeding edge.

The server is offline-mode, so anyone with a copy of the Minecraft Beta 1.7.3
client may connect. This is to allow unmodified clients to connect, for
convenience.

## Important information

The demo server is just like any other Minecraft server, however it is not 
intended to be a general-purpose Minecraft server. Therefore, we have placed
several limitations:

* The Nether is disabled.
* Every night at 3AM UTC, the server will reset to its original map, and the
  server will be updated to the latest build of Canyon.
* As the server is hosted on an EC2 Spot Instance, there may be times where the
  server shuts down unexpectedly. While we could warn about the possibility,
  this would require more effort than it's worth at the moment.
* We are only making a "best-effort" attempt to keep the demo server online.

Further, if there is evidence the demo server is being abused, it _will_ be shut
down. There is no contractual or legal obligation for us to keep the demo server
running.

## Server specifications

The demo server has the following specifications:

* There is a maximum player count of 20 players.
* The experimental Netty networking stack is enabled.
* It is hosted in Virginia using an Amazon EC2 Spot Instance, to keep costs down.
  (For the curious of you, we use `t3a.small` instances.)
* A simple plugin that sends a greeting message and overrides the `/help` command
  is installed. No other plugins are installed.