# TokenPlay RPC Proposal

This proposal is in regards to the Backend Endpoints required by the TokenPlay frontend written in Electron JS & React. We believe that we should be as fault tolerant and protocol agnostic as possible and are proposing an RPC system for the entire API.

The proposed web API method only allows for the POST method returning 200 or 500 codes with customized representations and errors.

When building a distributed system like our API for TokenPlay, we need to choose a communication protocol and decide how the data will be serialized. While there are many options out there, unfortunately a lot of developers choose HTTP + JSON, which is a very verbose and expensive combination for performing what ends up becoming RPC calls.

With Elixir, we already have a communication protocol and a serialization mechanism out of the box via Distributed Erlang therefore we are dropping Rest entirely from the backend API and recommend that all microservices do so. So our API is uniform and shows foresight as to how it was built. If you want to have two nodes communicating with each other, you only need to give them names, ensure they share the same secret cookie, and we are done.

Also Elixir processes communicate with each other via message passing, the runtime provides a feature called location transparency. This means it doesn’t really matter if two processes are in the same node or in different ones, they are still able to exchange messages.

The Distributed Erlang protocol and serialization mechanism are also documented and therefore it can be used to communicate with other languages. The Erlang VM ships with a binding for Java and others can be found for Python, Go and C++. Honestly, as a past games server developer I am not interested in a bunch of verbosity when it comes to communicating with a dedicated master server or backend.

In part breaking the monolithic backend up also supports the use of RPC though this is not the primary reason for this suggestion as already stated above the benefits of using Elixir are.

We have seen many companies pursuing microservices but they fail to organize code at the project level. So often they prematurely split their architecture in microservices which affects productivity in the short and long run. We recommend that the eWallet API be extended to support the proposed Gamer API which includes the Messaging System being proposed to be built by TheJibe.

In the end we have provided the necessary functionality for our Frontend teams to authenticate against the eWallet Backend. To use the eWallet lib as their own and extend their functionality into the Backend as they see fit. We ask they follow the same coding standards visible in the existing Backend for ease of use and portability.
