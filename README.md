# DFINITY Wiki

My favorite wiki software ported to [DFINITY](https://dfinity.org/).

## Requirements

Install the beta version of the DFINITY Canister SDK

```
DFX_VERSION=0.7.0-beta.8 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)" 
```

## Usage 

Install dependencies: 

```
yarn
```

Start the backend: 

```
dfx start --background
dfx canister create --all
dfx build
dfx canister install --all
```

Start the frontend: 

```
yarn dev
```

## References

* [ic-starter-templates](https://github.com/MioQuispe/ic-starter-templates)
* [Journey](https://github.com/hansl/journey)
* [superheros](https://github.com/enzoh/superheroes)
* [github-guestbook](https://github.com/victoriadrake/github-guestbook)

## License

MIT