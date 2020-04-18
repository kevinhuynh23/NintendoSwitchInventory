# NintendoSwitchInventory

## Dependency

- [NodeJS](https://nodejs.org/en/download/)
- AWS Account
- AWS Simple Email Service (SES)
- [AWS CLI Version 1](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html)
- [Bestbuy](https://github.com/BestBuyAPIs/bestbuy-sdk-js) API Key

## Instruction

1. Clone the repository and cd into project

2. Set an environment variable of BBY_API_KEY to your key

3. Install node packages

    ```bash
    npm install
    ```

4. Update the necessary fields:

    **sourceEmailAddr** = The email address the reciever will see

    **destinationEmailAddrs** = The email addresses that will be notified

    **zipcode** - Your local zipcode ex. 98105

5. In AWS SES, verify all the e-mail addresses added to the fields above in the **Email Addresses** section

6. Run the NodeJS server

    ```bash
    node index.js
    ```

## Important Notes
