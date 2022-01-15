# Shopify Standalone App NextJS

This is a simple example of a standalone app (non-embedded) built from the shopify app node boilerplate.

## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.

## Setup

Create a .env file (there is a .env.example to help)

Head to your Partner Dashboard -> The app you created -> App Setup breadcrumb menu -> Scroll down to Embedded App -> Manage -> Click Disable next to the _Embed your app in Shopify admin_ section.

Use `shopify app serve` as with the shopify app node tutorial to serve your app. You can now visit your app url with `?shop=<shopname>.myshopify.com` to access your app, authenticate with shopify all without being embedded in the shopify admin.
