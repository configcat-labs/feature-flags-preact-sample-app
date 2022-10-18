# Using Feature Flags in a Preact application

The application is a random food menu generator that chooses a soup, a main and a dessert from a list of predefined food items. In order to accomodate users that are sugarFree or wish to not consume sugar, it uses a feature flag (and ConfigCat feature flag management system) to eliminate the dessert option for those users with a SubscriptionType = sugarFree.

## Setup and Run

- Clone the repository
- Open a terminal in the project folder
- Run "npm run dev"
- Open a new browser window with address: localhost:8080

## Controlling the feature flag

- Create a ConfigCat subscription
- Add your own SDK key on line 44
- Control the flag from ConfigCat Dashboard

## Learn more

- Consult the Preact official documentation [here](https://preactjs.com/guide/v10/getting-started)
- Learn Preact with the official [tutorial](https://preactjs.com/tutorial)

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/)

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author
[Roxana Halati](https://github.com/roxanahalati)

## Contributions
Contributions are welcome!
